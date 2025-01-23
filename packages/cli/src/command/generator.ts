import { TokenList } from "@uniswap/token-lists";
import axios from "axios";
import * as fs from "node:fs";
import { Service } from "typedi";
import { setTimeout } from "timers/promises";

export interface GenerateOptions {
  platforms: string[];
}

interface SiliconMenifest {
  version: number;
  networks: number[];
  tokens: string[];
  networkToken: Record<number, string[]>;
  ts: string;
}

@Service()
export class SiliconGenerator {
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
    const { chainPath, tokenPath, manifestPath } = await this.ensureStorePath();

    const count = platforms.length;
    let ix = 0;
    for (const platform of platforms) {
      ix += 1;
      const tokenList = await this.tokenList(platform);
      if (!tokenList) {
        continue;
      }
      if (!tokenList.tokens || !tokenList.tokens.length) {
        console.log(`skipped ${platform.chain_identifier} (${platform.name}) because of no tokens`);
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
      fs.writeFileSync(
        `${chainPath}/${platform.chain_identifier}.json`,
        JSON.stringify(platform, null, 2)
      );
      fs.writeFileSync(
        `${tokenPath}/${platform.chain_identifier}.json`,
        JSON.stringify(tokenList, null, 2)
      );

      console.log(
        `generated ${thisNetworkTokens.length} tokens for ${platform.chain_identifier} (${platform.id}) ${ix}/${count}`
      );
      await setTimeout(1000 * 5);
    }
    const manifest: SiliconMenifest = {
      version: 1,
      networks: networks,
      tokens: tokens,
      networkToken: networkToken,
      ts: new Date().toISOString(),
    };
    fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  }

  private async ensureStorePath(): Promise<{
    baseStorePath: string;
    chainPath: string;
    tokenPath: string;
    manifestPath: string;
  }> {
    const baseStorePath = "../../resources";
    const chainPath = `${baseStorePath}/chains`;
    const tokenPath = `${baseStorePath}/tokens`;
    const manifestPath = `${baseStorePath}/silicon-manifest.json`;
    if (!fs.existsSync(baseStorePath)) {
      fs.mkdirSync(baseStorePath);
    }
    if (fs.existsSync(chainPath)) {
      fs.rmSync(chainPath, { recursive: true });
    }
    if (fs.existsSync(tokenPath)) {
      fs.rmSync(tokenPath, { recursive: true });
    }
    if (fs.existsSync(manifestPath)) {
      fs.rmSync(manifestPath);
    }
    fs.mkdirSync(chainPath);
    fs.mkdirSync(tokenPath);
    return {
      baseStorePath,
      chainPath,
      tokenPath,
      manifestPath,
    };
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
