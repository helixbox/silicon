import { Service } from "typedi";
import * as viemChain from "viem/chains";
import * as changeCase from "change-case";
import * as fs from "node:fs";

const Mustache = require("mustache");
const Wax = require("@jvitela/mustache-wax");

Wax(Mustache);
Mustache.Formatters = {
  json_stringify: (object) => JSON.stringify(object, null, 2),
  camel_case: (text) => changeCase.camelCase(text), // 	twoWords
  capital_case: (text) => changeCase.capitalCase(text), // 	Two Words
  constant_case: (text) => changeCase.constantCase(text), // 	TWO_WORDS
  dot_case: (text) => changeCase.dotCase(text), // 	two.words
  kebab_case: (text) => changeCase.kebabCase(text), // 	two-words
  no_case: (text) => changeCase.noCase(text), // 	two words
  pascal_case: (text) => changeCase.pascalCase(text), // 	TwoWords
  pascal_snake_case: (text) => changeCase.pascalSnakeCase(text), // 	Two_Words
  path_case: (text) => changeCase.pathCase(text), // 	two/words
  sentence_case: (text) => changeCase.sentenceCase(text), // 	Two words
  snake_case: (text) => changeCase.snakeCase(text), // 	two_words
  train_case: (text) => changeCase.trainCase(text), // 	Two-Words
  upper_case: (text) => (text ? text.toUpperCase() : text), // TWO WORDS
  lower_case: (text) => (text ? text.toLowerCase() : text), // two words
};

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
  constructor() {}

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
