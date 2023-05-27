import { Context, Schema, sleep } from 'koishi'
import OneBotBot from "@koishijs/plugin-adapter-onebot"


export const name = 'auto-poke'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export async function apply(ctx: Context) {
  // write your plugin here
  // console.log((await ctx.bots["onebot:262444672"].getGuildMemberList("426230045")).map(item => item.userId));
  // var bot = ctx.bots["onebot:262444672"] as OneBotBot
  // var members = (await bot.getGuildMemberList("207776080")).map(item => item.userId)
  // for (const member of members) {
  //   await sleep(1000);
  //   // ctx.bots["onebot:262444672"]
  //   await bot.sendMessage("207776080",`<onebot:gift qq="${member}" id="1"/>`)
  // }
}
