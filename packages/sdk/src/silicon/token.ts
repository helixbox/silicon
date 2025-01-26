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
  chains?: string[];
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
    await this.runtime().loadChainTokens(chains);
  }

  static async find(options: GetTokenOptions): Promise<SiliconToken[]> {
    return await this.runtime().find(options);
  }

  static async chain(chain: string): Promise<HbChainPlus | undefined> {
    return await this.runtime().chain(chain);
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

  constructor(options?: {syncInterval?: number}) {
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
      const interval: number = (+now) - (+this.lastSyncTime);
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
        console.log(`loaded [${wl.type}] ${wl.link}${wl.chainId ? ' for chain ' + wl.chainId : ''}`);
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
    if (!this.chainGuides) {
      await this.loadRemote();
    }
    const chainIds = [];
    for (const c of chains) {
      if (!c) continue;
      const hc = HelixboxChain.get(c.toString());
      if (hc) {
        chainIds.push(hc.id);
        continue;
      }
      const chainGuide = this.chainGuides.find(
        (item) =>
          item.id === c.toString() ||
          item.chain_identifier.toString() === c.toString()
      );
      if (chainGuide) {
        chainIds.push(chainGuide.chain_identifier);
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
      logoURI: c.image?.large
    };
  }

  public async find(options: GetTokenOptions): Promise<SiliconToken[]> {
    await this.loadRemote();
    let chainIds = [];

    const inputChains = options.chains;
    const inputTokens = options.tokens;
    if (inputChains && inputChains.length) {
      for (const c of inputChains) {
        if(!c) continue;
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
        const tokens = token.tokens;
        if (!tokens || !tokens.length) continue;
        let foundedToken: TokenInfo | undefined = undefined;
        foundedToken = tokens.find(item => item.address.toLowerCase() === itkn.toLowerCase());
        if (!foundedToken) {
          foundedToken = tokens.find(item => item.symbol.toUpperCase() === itkn.toUpperCase());
        }
        if (!foundedToken && (options.enableFuzzyMatching ?? false)) {
          foundedToken = tokens.find(item => item.symbol.toUpperCase().indexOf(itkn.toUpperCase()) != -1);
        }
        if (!foundedToken && (options.enableFuzzyMatching ?? false)) {
          foundedToken = tokens.find(item => item.name.toUpperCase().indexOf(itkn.toUpperCase()) != -1);
        }
        if (!foundedToken) {
          continue;
        }
        const findCionOptions = {chainPlatformId: chain.id, address: foundedToken.address};
        const coin = this.findCoin(findCionOptions);
        if (!coin) {
          console.warn(`can not found coin by ${foundedToken.address} from ${chain.id}`);
          continue;
        }
        let siliconToken: SiliconToken | undefined = results.find(item => item.id == coin.id);
        if (!siliconToken) {
          siliconToken = {
            logoURI: foundedToken.logoURI,
            id: coin.id,
            symbol: foundedToken.symbol.toUpperCase(),
            name: foundedToken.name,
            platforms: [],
          };
          results.push(siliconToken);
        }
        const platforms = siliconToken.platforms;
        if (platforms.findIndex(item => item.id.toString() === chain.chain_identifier.toString()) != -1) {
          continue;
        }
        const hc = HelixboxChain.get(chain.chain_identifier.toString());
        if (!hc) {
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
        });
      }
    }
    return results;
  }

  private findCoin(options: {address: string, chainPlatformId: string}): CoinRaw | undefined {
    const _address = options.address.toLowerCase();
    const quickCoinKey = `${options.chainPlatformId}__${_address}`;
    const qcr = this.quickCoinRaw[quickCoinKey];
    if (qcr) {
      return qcr;
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
}
