import axios from "axios";
import { TokenInfo, TokenList } from "@uniswap/token-lists";

import { HbChain, HelixboxChain } from "./chain";

const DEFAULT_LOAD_CHAINS = [
  1, // ethereum
  8453, // base
  10, // op
  137, // polygon
  42161, // arbitrum
];

interface GetTokenOptions {
  chains?: string[] | number[];
  tokens: string[];
  enableFuzzyMatching?: boolean;
}

export class HelixboxToken {
  private static _runtime: SyncTokenRuntime;

  private static runtime(): SyncTokenRuntime {
    if (!this._runtime) {
      this._runtime = new SyncTokenRuntime();
    }
    return this._runtime;
  }

  static async load(chains: string[] | number[]) {
    const runtime = this.runtime();
    await runtime.loadChainTokens(chains);
  }

  static async find(options: GetTokenOptions): Promise<SiliconToken[]> {
    return await this.runtime().find(options);
  }

  static async chain(chain: string): Promise<HbChainPlus | undefined> {
    return await this.runtime().chain(chain);
  }

  static merge(tokens: SiliconToken[]): SiliconToken[] {
    const results: SiliconToken[] = [];
    for (const token of tokens) {
      const mergedToken = results.find(item => item.id === token.id);
      if (!mergedToken) {
        results.push(token);
        continue;
      }
      for (const platform of token.platforms) {
        if (mergedToken.platforms.findIndex(item => item.id === platform.id) != -1) {
          continue;
        }
        mergedToken.platforms.push(platform);
      }
    }
    return results;
  }
}

enum LinkType {
  ChainGuide,
  Coins,
  Token,
  Chain,
}

interface WatchLink {
  type: LinkType;
  link: string;
  chainId?: number;
}

interface ChainGuide {
  id: string;
  chain_identifier: number;
}

interface CoinRaw {
  id: string;
  symbol: string;
  name: string;
  platforms: Record<string, string>;
}

interface ChainRaw {
  id: string;
  chain_identifier: number;
  name: string;
  shortname: string;
  native_coin_id: string;
  image: ChainImageRaw;
}

export interface HbChainPlus extends HbChain {
  logoURI?: string;
}

export interface ChainImageRaw {
  thumb: string;
  small: string;
  large: string;
}

export interface HbToken extends TokenList {}

class SyncTokenRuntime {
  private watchLinks: WatchLink[] = [];

  private loadedChains: number[] = [];
  private chainGuides: ChainGuide[] = [];
  private coinRaws: CoinRaw[] = [];
  private quickCoinRaw: Record<string, CoinRaw> = {};
  private firstInitialized: boolean = false;
  private chainMap: Record<string, ChainRaw> = {};
  private tokenMap: Record<string, HbToken> = {};
  private lastSyncTime: Date | undefined;
  private syncInterval: number;

  constructor(options?: { syncInterval?: number }) {
    this.watchLinks.push(
      ...[
        {
          type: LinkType.ChainGuide,
          link: "https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/resources/chain-guide.json",
        },
        {
          type: LinkType.Coins,
          link: "https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/resources/coins.json",
        },
      ]
    );
    this.syncInterval = options?.syncInterval ?? 1000 * 60 * 60 * 2; // default 2 hours
  }

  private async loadRemote(wls?: WatchLink[], force?: boolean) {
    const now = new Date();
    if (this.lastSyncTime) {
      const interval: number = +now - +this.lastSyncTime;
      if (interval <= this.syncInterval && !(force ?? false)) {
        return;
      }
    }
    if (wls && wls.length) {
      for (const wl of wls) {
        if (this.watchLinks.findIndex((item) => item.link === wl.link) != -1) {
          continue;
        }
        this.watchLinks.push(wl);
      }
    }
    for (const wl of this.watchLinks) {
      try {
        const response = await axios.get(wl.link);
        const data = response.data;
        console.log(
          `loaded [${wl.type}] ${wl.link}${
            wl.chainId ? " for chain " + wl.chainId : ""
          }`
        );
        switch (wl.type) {
          case LinkType.ChainGuide: {
            this.chainGuides = data;
            break;
          }
          case LinkType.Coins: {
            this.coinRaws = data;
            break;
          }
          case LinkType.Chain: {
            const chainId = wl.chainId;
            if (!chainId) {
              break;
            }
            this.chainMap[chainId.toString()] = data;
            break;
          }
          case LinkType.Token: {
            const chainId = wl.chainId;
            if (!chainId) {
              break;
            }
            this.tokenMap[chainId.toString()] = data;
            break;
          }
        }
      } catch (e) {
        console.warn(`failed to load [${wl.type}] ${wl.link} -> ${e}`);
      }
    }
    if (!this.firstInitialized) {
      this.firstInitialized = true;
      await this.loadChainTokens(DEFAULT_LOAD_CHAINS);
    }
    this.lastSyncTime = new Date();
  }

  public async loadChainTokens(chains: string[] | number[]) {
    const chainIds = [];
    for (const c of chains) {
      if (!c) continue;
      const hc = HelixboxChain.get(c.toString());
      if (hc) {
        chainIds.push(hc.id);
        continue;
      }
    }
    const remoteResources: WatchLink[] = [];
    const baseLink =
      "https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/resources";
    let chnged = false;
    for (const chainId of chainIds) {
      if (this.loadedChains.findIndex((item) => item === chainId) != -1) {
        continue;
      }
      chnged = true;
      remoteResources.push({
        type: LinkType.Chain,
        link: `${baseLink}/chains/${chainId}.json`,
        chainId: chainId,
      });
      remoteResources.push({
        type: LinkType.Token,
        link: `${baseLink}/tokens/${chainId}.json`,
        chainId: chainId,
      });
      this.loadedChains.push(chainId);
    }
    if (chnged) {
      this.firstInitialized = true;
      await this.loadRemote(remoteResources);
    }
  }

  public async chain(chain: string): Promise<HbChainPlus | undefined> {
    await this.loadRemote();
    const hc = HelixboxChain.get(chain);
    if (!hc) {
      return;
    }
    const c = this.chainMap[hc.id.toString()];
    if (!c) {
      return hc;
    }
    return {
      ...hc,
      logoURI: c.image?.large,
    };
  }

  public async find(options: GetTokenOptions): Promise<SiliconToken[]> {
    await this.loadRemote();
    let chainIds = [];

    const inputChains = options.chains;
    const inputTokens = options.tokens;
    if (inputChains && inputChains.length) {
      for (const c of inputChains) {
        if (!c) continue;
        const hc = HelixboxChain.get(c.toString());
        if (hc) {
          chainIds.push(hc.id.toString());
          continue;
        }
        const chainGuide = this.chainGuides.find(
          (item) =>
            item.id === c.toString() ||
            item.chain_identifier.toString() === c.toString()
        );
        if (chainGuide) {
          chainIds.push(chainGuide.chain_identifier.toString());
          continue;
        }
      }
    }
    if (!chainIds.length) {
      chainIds = Object.keys(this.chainMap);
    }

    const results: SiliconToken[] = [];
    for (const itkn of inputTokens) {
      for (const sc of chainIds) {
        const chain = this.chainMap[sc];
        const token = this.tokenMap[sc];

        if (!chain || !token) {
          continue;
        }
        const hc = HelixboxChain.get(chain.chain_identifier.toString());
        if (!hc) {
          continue;
        }
        const tokens = token.tokens;
        if (!tokens || !tokens.length) continue;
        let foundedTokens: TokenInfo[] = [];

        // native token
        const nativeCurrencySymbol = hc.nativeCurrency.symbol.toUpperCase();
        if (
          nativeCurrencySymbol === itkn.toUpperCase() ||
          itkn.toLowerCase() === "0x0000000000000000000000000000000000000000"
        ) {
          foundedTokens.push({
            chainId: chain.chain_identifier,
            address: "0x0000000000000000000000000000000000000000",
            name: hc.nativeCurrency.name,
            decimals: hc.nativeCurrency.decimals,
            symbol: nativeCurrencySymbol,
            logoURI: `https://raw.githubusercontent.com/darwinia-network/devops/refs/heads/main/assets/tokens/${nativeCurrencySymbol}.png`,
          });
        }

        // check address
        const foundedTokenByAddress = tokens.find(
          (item) => item.address.toLowerCase() === itkn.toLowerCase()
        );
        if (foundedTokenByAddress) {
          foundedTokens.push(foundedTokenByAddress);
        }

        const foundedTokenBySymbol = tokens.filter(
          (item) => item.symbol.toUpperCase() === itkn.toUpperCase()
        );
        if (foundedTokenBySymbol && foundedTokenBySymbol.length) {
          foundedTokens.push(...foundedTokenBySymbol);
        }
        if (options.enableFuzzyMatching ?? false) {
          const fuzzyFoundedTokenBySymbol = tokens.filter(
            (item) =>
              item.symbol.toUpperCase().indexOf(itkn.toUpperCase()) != -1
          );
          const fuzzyFoundedTokenByName = tokens.filter((item) => {
            const nameWords = item.name.split(" ");
            return (
              nameWords.findIndex(
                (item) => item.toUpperCase() === itkn.toUpperCase()
              ) != -1
            );
          });
          const fuzzyList = [
            ...fuzzyFoundedTokenBySymbol,
            ...fuzzyFoundedTokenByName,
          ];
          for (const fl of fuzzyList) {
            if (
              foundedTokens.findIndex((item) => item.address === fl.address) !=
              -1
            ) {
              continue;
            }
            foundedTokens.push(fl);
          }
        }

        if (!foundedTokens.length) {
          continue;
        }

        for (const foundedToken of foundedTokens) {
          const coin = this.findCoin({
            chainPlatformId: chain.id,
            address: foundedToken.address,
            symbol: foundedToken.symbol,
          });
          let coinId: string;
          if (coin) {
            coinId = coin.id;
          } else {
            console.warn(
              `can not found coin by ${foundedToken.address} from ${chain.id}`
            );
            coinId = `${chain.id}-${
              foundedToken.symbol
            }-${foundedToken.name.replaceAll(" ", "_")}`;
          }
          let siliconToken: SiliconToken | undefined = results.find(
            (item) => item.id == coinId
          );
          if (!siliconToken) {
            let logoURI = foundedToken.logoURI;
            if (logoURI && logoURI.indexOf("coingecko.com") != -1) {
              logoURI = logoURI.replace("/thumb/", "/large/");
            }
            siliconToken = {
              logoURI,
              id: coinId,
              symbol: foundedToken.symbol.toUpperCase(),
              name: foundedToken.name,
              platforms: [],
            };
            results.push(siliconToken);
          }

          const platforms = siliconToken.platforms;
          if (
            platforms.findIndex(
              (item) => item.id.toString() === chain.chain_identifier.toString()
            ) != -1
          ) {
            continue;
          }

          platforms.push({
            id: hc.id,
            name: hc.name,
            nativeCurrency: hc.nativeCurrency,
            rpcUrls: hc.rpcUrls,
            blockExplorers: hc.blockExplorers,
            address: foundedToken.address,
            logoURI: chain.image?.large,
            decimals: foundedToken.decimals,
          });
        }
      }
    }
    return results;
  }

  private findCoin(options: {
    address: string;
    chainPlatformId: string;
    symbol: string;
  }): CoinRaw | undefined {
    const _address = options.address.toLowerCase();
    const quickCoinKey = `${options.chainPlatformId}__${_address}`;
    const qcr = this.quickCoinRaw[quickCoinKey];
    if (qcr) {
      return qcr;
    }

    if (_address === "0x0000000000000000000000000000000000000000") {
      const nativeCoinRaw: CoinRaw = {
        id: `native-${options.symbol.toLowerCase()}`,
        symbol: options.symbol,
        name: options.symbol,
        platforms: JSON.parse(`{"${options.chainPlatformId}": "${_address}"}`),
      };
      this.quickCoinRaw[quickCoinKey] = nativeCoinRaw;
      return nativeCoinRaw;
    }
    for (const cr of this.coinRaws) {
      const platformAddress = cr.platforms[options.chainPlatformId];
      if (!platformAddress) {
        continue;
      }
      if (platformAddress.toLowerCase() != _address) {
        continue;
      }
      this.quickCoinRaw[quickCoinKey] = cr;
      return cr;
    }
  }
}

export interface SiliconToken {
  logoURI?: string;
  id: string;
  symbol: string;
  name: string;
  platforms: SiliconTokenPlatform[];
}

export interface SiliconTokenPlatform extends HbChain {
  logoURI?: string;
  address: string;
  decimals: number;
}
