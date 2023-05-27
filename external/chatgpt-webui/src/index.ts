import { Context } from "koishi";
// 此处需要导入 @koishijs/plugin-console 以获取类型
import {} from "@koishijs/plugin-console";
import {} from "koishi-plugin-rr-gpt"
import { resolve } from "path";

export const name = "my-plugin";

export const using = ["console","gpt"] as const;

declare module "@koishijs/plugin-console" {
  interface Events {
    "chatgpt-webui-ask"(prompt: string,id: string): Promise<string>;
  }
}

export function apply(ctx: Context) {
  ctx.console.addListener('chatgpt-webui-ask', async (prompt: string,id: string) => {
    return (await ctx.gpt.ask(prompt, id)).text;
  })
  // 在已有插件逻辑的基础上，添加下面这段
  ctx.console.addEntry({
    dev: resolve(__dirname, "../client/index.ts"),
    prod: resolve(__dirname, "../dist"),
  });
}
