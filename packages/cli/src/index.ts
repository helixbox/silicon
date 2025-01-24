import "reflect-metadata";

import { Command } from "commander";
import { Container } from "typedi";
import { SiliconGeneratorTokens } from "./command/generator_tokens";
import { SiliconGeneratorSDK } from "./command/generator_sdk";

const program = new Command();

program
  .name("silicon-cli")
  .description("helixbox silicon genrator cli")
  .version("0.1.0");

program
  .command("generate-tokens")
  .description("silicon generate tokens")
  .option(
    "-p, --platform <string>",
    "supported platforms",
    (val: string, items: string[]) => {
      if (!val) return items;
      const mrs: string[] = val.split(",");
      items.push(...mrs);
      return items;
    },
    [],
  )
  .action(async (options) => {
    const c = Container.get(SiliconGeneratorTokens);
    await c.generate({
      platforms: options.platform,
    });
  });

program
  .command("generate-sdk")
  .description("silicon generate sdk")
  .action(async (options) => {
    const c = Container.get(SiliconGeneratorSDK);
    await c.generate({});
  });

program.parse(process.argv);

process.on("uncaughtException", (error) => {
  console.error(error);
});
