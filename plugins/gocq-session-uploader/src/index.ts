import { resolve } from "path";
import { Context, Schema, h } from "koishi";
import {} from "@koishijs/plugin-console";

import fse from "fs-extra";
import { access, readdir, writeFile } from "fs/promises";

export const name  = "gocq-session-uploader";
export const usage = `
只需要启用此插件即可
`;

interface accountInfo {
  session: boolean;
  device : boolean;
  status : string;
}

declare module "@koishijs/plugin-console" {
  interface Events {
    "gocq-session-uploader-getAccountsList"(): Promise<
      Map<string, accountInfo>
    >;
    "gocq-session-set-file"(arg): Promise<undefined>;
  }
}

export interface Config {
  ignoreScan: Array<string>;
}

export const Config: Schema<Config> = Schema.object({
  ignoreScan: Schema.array(Schema.string())
    .default(["node_modules", ".git", ".vite", ".github"])
    .description("目录扫描器忽略文件夹名称"),
});

export function apply(ctx: Context, config: Config) {
  ctx.using(["console"], (ctx) => {
    ctx.console.addEntry({
      dev : resolve(__dirname, "../client/index.ts"),
      prod: resolve(__dirname, "../dist"),
    });
  });

  ctx.console.addListener("gocq-session-uploader-getAccountsList", async () => {
    const onebots = {};
    for (const bot of ctx.bots) {
      if (bot.platform == "onebot") onebots[bot.selfId] = bot;
    }
    const accounts = await readdir("accounts");
    // @ts-ignore
    var result: Map<string, accountInfo> = {};
    for (const account of accounts) {
      result[account] = {};
      try {
        await access(`accounts/${account}/session.token`);
        result[account].session = true;
      } catch {
        result[account].session = false;
      }
      try {
        await access(`accounts/${account}/device.json`);
        result[account].device = true;
      } catch {
        result[account].device = false;
      }
      result[account].status = onebots[account].status;
    }
    return result;
  });
  ctx.console.addListener("gocq-session-set-file", async (arg) => {
    const { account, type, base64 } = arg;
    // console.log(base64);

    if (type == "device.json")
      writeFile(
        `accounts/${account}/device.json`,
        Buffer.from(base64.replace(/data:.+;base64,/, ""), "base64")
      );
    if (type == "session.token")
      writeFile(
        `accounts/${account}/session.token`,
        Buffer.from(base64.replace(/data:.+;base64,/, ""), "base64")
      );
    return undefined;
  });
}
