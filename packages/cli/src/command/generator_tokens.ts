import { TokenList } from "@uniswap/token-lists";
import axios from "axios";
import * as fs from "node:fs";
import { Service } from "typedi";
import { setTimeout } from "timers/promises";

export interface GenerateOptions {
  platforms: string[];
}

// interface SiliconMenifest {
//   version: number;
//   networks: number[];
//   tokens: string[];
//   networkToken: Record<number, string[]>;
//   ts: string;
// }

interface ChainGuide {
  id: string;
  chain_identifier: number;
}

@Service()
export class SiliconGeneratorTokens {
  private readonly coinGeckoTokenListGenerator: CoinGeckoTokenListGenerator;

  constructor() {
    this.coinGeckoTokenListGenerator = new CoinGeckoTokenListGenerator();
  }

  async generate(options: GenerateOptions) {
    await this.coinGeckoTokenListGenerator.generate(options);
  }
}

class CoinGeckoTokenListGenerator {
  async generate(options: GenerateOptions) {
    const platforms = await this.platforms(options);
    const networks: number[] = [];
    const tokens: string[] = [];
    const networkToken: Record<number, string[]> = {};
    const { definitionPath, chainPath, tokenPath, chainGuidePath, coinsPath } =
      await this.ensureStorePath();

    const count = platforms.length;
    let ix = 0;
    const guides: ChainGuide[] = [];
    for (const platform of platforms) {
      ix += 1;
      const tokenList = await this.tokenList(platform);
      if (!tokenList) {
        continue;
      }
      if (!tokenList.tokens || !tokenList.tokens.length) {
        console.log(
          `skipped ${platform.chain_identifier} (${platform.name}) because of no tokens`
        );
        continue;
      }

      const thisNetworkTokens: string[] =
        networkToken[platform.chain_identifier] || [];
      for (const tkn of tokenList.tokens) {
        const symbol = tkn.symbol.toUpperCase();
        if (tokens.findIndex((item) => item === symbol) != -1) {
          continue;
        }
        tokens.push(symbol);
        thisNetworkTokens.push(symbol);
      }

      networks.push(platform.chain_identifier);
      networkToken[platform.chain_identifier] = thisNetworkTokens;
      guides.push({
        id: platform.id,
        chain_identifier: platform.chain_identifier,
      });
      const storedChainPath = `${chainPath}/${platform.chain_identifier}.json`;
      const storedTokenPath = `${tokenPath}/${platform.chain_identifier}.json`;
      fs.writeFileSync(storedChainPath, JSON.stringify(platform, null, 2));
      fs.writeFileSync(storedTokenPath, JSON.stringify(tokenList, null, 2));

      console.log(
        `generated ${thisNetworkTokens.length} tokens for ${platform.chain_identifier} (${platform.id}) ${ix}/${count}`
      );
      await setTimeout(1000 * 5);
    }
    // const manifest: SiliconMenifest = {
    //   version: 1,
    //   networks: networks,
    //   tokens: tokens,
    //   networkToken: networkToken,
    //   ts: new Date().toISOString(),
    // };
    //# disabled, if required please open it
    // fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
    fs.writeFileSync(chainGuidePath, JSON.stringify(guides, null, 2));

    const coins = await this.coins();
    fs.writeFileSync(coinsPath, JSON.stringify(coins, null, 2));

    await this.restructuringCustomData({
      definitionPath,
      chainPath,
      tokenPath,
    });
  }

  private async restructuringCustomData(options: {
    definitionPath: string;
    chainPath: string;
    tokenPath: string;
  }) {
    const { definitionPath, chainPath, tokenPath } = options;
    const restructMapings = [
      { type: "chain", source: `${definitionPath}/chains`, target: chainPath },
      { type: "token", source: `${definitionPath}/tokens`, target: tokenPath },
    ];
    for (const mps of restructMapings) {
      const files = fs.readdirSync(mps.source);
      if (!files || !files.length) {
        continue;
      }
      for (const file of files) {
        const sourcePath = `${mps.source}/${file}`;
        const targetPath = `${mps.target}/${file}`;
        const _sourceContent = fs.existsSync(sourcePath)
          ? fs.readFileSync(sourcePath, "utf-8")
          : "";
        const _targetContent = fs.existsSync(targetPath)
          ? fs.readFileSync(targetPath, "utf-8")
          : "";
        const sourceContent = _sourceContent ? JSON.parse(_sourceContent) : {};
        const targetContent = _targetContent ? JSON.parse(_targetContent) : {};
        switch (mps.type) {
          case "chain": {
            if (sourceContent.id) targetContent.id = sourceContent.id;
            if (sourceContent.chain_identifier)
              targetContent.chain_identifier = sourceContent.chain_identifier;
            if (sourceContent.name) targetContent.name = sourceContent.name;
            if (sourceContent.shortname)
              targetContent.shortname = sourceContent.shortname;
            if (sourceContent.native_coin_id)
              targetContent.native_coin_id = sourceContent.native_coin_id;
            if (sourceContent.image) targetContent.image = sourceContent.image;
            console.log(`merged chain ${sourcePath} to ${targetPath}`);
            break;
          }
          case "token": {
            if (sourceContent.name) targetContent.name = sourceContent.name;
            if (sourceContent.logoURI)
              targetContent.logoURI = sourceContent.logoURI;
            if (sourceContent.keywords)
              targetContent.keywords = sourceContent.keywords;
            if (sourceContent.tokens) {
              const targetTokens = targetContent.tokens;
              if (!targetTokens || !targetTokens.length) {
                targetContent.tokens = [...sourceContent.tokens];
                break;
              }
              for (const sourceToken of sourceContent.tokens) {
                let updated = false;
                for (const targetToken of targetTokens) {
                  if (
                    sourceToken.address.toLowerCase() ===
                    targetToken.address.toLowerCase()
                  ) {
                    targetToken.chainId = sourceToken.chainId;
                    targetToken.address = sourceToken.address;
                    targetToken.name = sourceToken.name;
                    targetToken.symbol = sourceToken.symbol;
                    targetToken.decimals = sourceToken.decimals;
                    targetToken.logoURI = sourceToken.logoURI;
                    updated = true;
                    break;
                  }
                }
                if (!updated) {
                  targetTokens.push(sourceToken);
                }
              }
            }
            if (sourceContent.version)
              targetContent.version = sourceContent.version;
            console.log(`merged token ${sourcePath} to ${targetPath}`);
            break;
          }
        }
        fs.writeFileSync(targetPath, JSON.stringify(targetContent, null, 2));
      }
    }
  }

  private async ensureStorePath(): Promise<{
    baseStorePath: string;
    definitionPath: string;
    chainPath: string;
    tokenPath: string;
    manifestPath: string;
    chainGuidePath: string;
    coinsPath: string;
  }> {
    const basePath = `${__dirname}/../../../../`;

    const baseStorePath = `${basePath}/resources`;
    const definitionPath = `${basePath}/definition`;
    const chainPath = `${baseStorePath}/chains`;
    const tokenPath = `${baseStorePath}/tokens`;
    const manifestPath = `${baseStorePath}/silicon-manifest.json`;
    const chainGuidePath = `${baseStorePath}/chain-guide.json`;
    const coinsPath = `${baseStorePath}/coins.json`;
    if (!fs.existsSync(baseStorePath)) {
      fs.mkdirSync(baseStorePath);
    }
    if (!fs.existsSync(chainPath)) {
      fs.mkdirSync(chainPath);
    }
    if (!fs.existsSync(tokenPath)) {
      fs.mkdirSync(tokenPath);
    }
    // if (fs.existsSync(manifestPath)) {
    //   fs.rmSync(manifestPath);
    // }
    // if (fs.existsSync(chainGuidePath)) {
    //   fs.rmSync(chainGuidePath);
    // }
    // if (fs.existsSync(coinsPath)) {
    //   fs.rmSync(coinsPath);
    // }
    return {
      baseStorePath,
      definitionPath,
      chainPath,
      tokenPath,
      manifestPath,
      chainGuidePath,
      coinsPath,
    };
  }

  private async coins(): Promise<CoinGeckoCoin[]> {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list?include_platform=true"
      );
      return response.data;
    } catch (e) {
      console.log(`can not query coins from coingecko: ${e}`);
      return [];
    }
  }

  private async tokenList(
    platform: CoinGeckoPlatform
  ): Promise<TokenList | undefined> {
    try {
      const response = await axios.get(
        `https://tokens.coingecko.com/${platform.id}/all.json`
      );
      return response.data;
    } catch (e) {
      console.log(`can not query token list from coingecko: ${e}`);
      return undefined;
    }
  }

  private async platforms(
    options: GenerateOptions
  ): Promise<CoinGeckoPlatform[]> {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/asset_platforms"
    );
    const data: CoinGeckoPlatform[] = response.data;

    // const content = fs.readFileSync(
    //   "../../resources/assets/coingecko.platforms.local.json",
    //   "utf-8"
    // );
    // const data: CoinGeckoPlatform[] = JSON.parse(content);

    const allPlatforms = (data ?? []).filter((item) => item.chain_identifier);
    if (!options.platforms || !options.platforms.length) {
      return allPlatforms;
    }
    const allowPlatforms = allPlatforms.filter((item) => {
      const ops = options.platforms;
      return ops.findIndex(
        (o) =>
          o.toUpperCase() === item.name.toUpperCase() ||
          o === item.chain_identifier.toString()
      );
    });
    const customIconChains = [
      1, 10, 43, 44, 46, 56, 100, 137, 324, 1284, 2818, 5000, 8453, 42161,
      42220, 43114, 48900, 59144, 80094, 81457, 167000, 534352, 11155111,
    ];
    for (const ap of allowPlatforms) {
      if (customIconChains.includes(ap.chain_identifier)) {
        ap.image = {
          thumb: `https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/icons/chain/${ap.chain_identifier}.png`,
          small: `https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/icons/chain/${ap.chain_identifier}.png`,
          large: `https://raw.githubusercontent.com/helixbox/silicon/refs/heads/main/icons/chain/${ap.chain_identifier}.png`,
        };
      }
    }
    return allowPlatforms;
  }
}

interface CoinGeckoPlatform {
  id: string;
  chain_identifier?: number;
  name: string;
  shortname: string;
  native_coin_id: string;
  image: CoinGeckoImage;
}

interface CoinGeckoImage {
  thumb?: string;
  small?: string;
  large?: string;
}

interface CoinGeckoCoin {
  id: string;
  symbol: string;
  name: string;
  platforms: Record<string, string>;
}
