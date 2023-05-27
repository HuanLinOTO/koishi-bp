import { Context, Schema } from "koishi";

export const name = "chatgpt-free";

export interface Config {
  alias: string;
}

export const Config: Schema<Config> = Schema.object({
  alias: Schema.string().description("召唤前缀").default(">"),
});

export function apply(ctx: Context, config: Config) {
  // write your plugin here
  ctx
    .command("chatgpt <content:text>")
    .alias(config.alias)
    .action(async ({ session }, content) => {
      const { data } = await ctx.http.axios(
        encodeURI(
          `https://pnavhxy4vq.hk.aircode.run/conversation?key=${content}&qq=${session.userId}`
        )
      );
      return data.data.result;
    });
}
