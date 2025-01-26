import { Service } from "typedi";
import * as viemChain from "viem/chains";
import * as fs from "node:fs";
import Case from 'case';

const Mustache = require("mustache");
const Wax = require("@jvitela/mustache-wax");

Wax(Mustache);
Mustache.Formatters = {
  json_stringify: (object) => JSON.stringify(object, null, 2),
  camel_case: (text) => Case.camel(text), // 	twoWords
  kebab_case: (text) => Case.kebab(text), // 	two-words
  pascal_case: (text) => Case.pascal(text), // 	TwoWords
  sentence_case: (text) => Case.sentence(text), // 	Two words
  snake_case: (text) => Case.snake(text), // 	two_words
  upper_case: (text) => (text ? text.toUpperCase() : text), // TWO WORDS
  lower_case: (text) => (text ? text.toLowerCase() : text), // two words
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface GenerateOptions {}

interface InnerGenerateOptions extends GenerateOptions {
  tplBasePath: string;
  destBasePath: string;
}

function _reorganizeObject(object: any) {
  const rawObjJson = JSON.stringify(object, null, 2);
  if (!rawObjJson) {
    return rawObjJson;
  }
  return rawObjJson.replace(/"(\w+)":/g, '$1:');
}

@Service()
export class SiliconGeneratorSDK {

  async generate(options: GenerateOptions) {
    const tplBasePath = `${__dirname}/../../templates/silicon-sdk`;
    const destBasePath = `${__dirname}/../../../sdk/src/silicon`;
    const innerOptions: InnerGenerateOptions = {
      ...options,
      tplBasePath,
      destBasePath,
    };
    await this.generateChains(innerOptions);
  }

  private async generateChains(options: InnerGenerateOptions) {
    const chainNames = Object.keys(viemChain);
    const chainInfos = [];
    for (const cn of chainNames) {
      viemChain.crab.contracts
      const vc = viemChain[cn];



      const info = {
        _code: cn,
        id: vc.id,
        name: vc.name,
        nativeCurrency: _reorganizeObject(vc.nativeCurrency),
        rpcUrls: _reorganizeObject(vc.rpcUrls),
        blockExplorers: _reorganizeObject(vc.blockExplorers),
      };
      chainInfos.push(info);
    }


    const chainsTplPath = options.tplBasePath + "/chains.ts.mustache";
    const destPath = options.destBasePath + "/chain.ts";
    const tplContent = fs.readFileSync(chainsTplPath, 'utf-8');
    const output = Mustache.render(tplContent, {
      chainNames,
      chainInfos,
    });
    console.log(output);
    fs.writeFileSync(destPath, output);
  }
}
