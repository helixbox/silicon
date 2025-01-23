import "reflect-metadata";

import { Command, Option } from "commander";
import { Container } from "typedi";
import { SiliconGenerator } from "./command/generator";
// import { SmartWalletAPIServer } from "@helixbox/smartwallet-component-apiserver";

const program = new Command();

program
  .name("silicon-cli")
  .description("helixbox silicon genrator cli")
  .version("0.1.0");

program
  .command("generate")
  .description("silicon generate")
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
    const c = Container.get(SiliconGenerator);
    await c.generate({
      platforms: options.platform,
    });
  });

program.parse(process.argv);

process.on("uncaughtException", (error) => {
  console.error(error);
});
