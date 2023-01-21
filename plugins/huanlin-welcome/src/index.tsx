import { Context, Schema } from 'koishi'

export const name = 'huanlin-welcome'

export interface Config {}

export const usage = `
对着机器人说「设定欢迎词」即可设定本群的欢迎词

「查看欢迎词」即可查看当前群的欢迎词

「删除欢迎词」即可删除当前群的欢迎词
`

export const Config: Schema<Config> = Schema.object({})

declare module "koishi" {
  interface Tables {
    "huanlin-welcome": HuanLinWelcomeDB;
  }
}

export interface HuanLinWelcomeDB {
  id: number;
  words: string;
}
export function apply(ctx: Context) {
  // write your plugin here
  ctx.model.extend("huanlin-welcome",{
    id: "integer",
    words: "string"
  })

  ctx.command("设定欢迎词").action(async ({ session }) => {
    // console.log();
    const group = session.guildId || session.channelId;
    session.send(<message>
      正在为 {group} 设定欢迎词, 请发送
    </message>)
    const words = await session.prompt()
    // try {
    const isCreated = (await ctx.database.get("huanlin-welcome",{
      id: Number(group),
    })).length > 0;
    if(isCreated) {
      ctx.database.set("huanlin-welcome",{
        id: Number(group)
      },{
        words
      })
    } else {
      ctx.database.create("huanlin-welcome",{
        id: Number(group),
        words
      })
    }
    // } catch {
    // }
    return <message>
      <p>已设定欢迎词</p>
      <p>{words}</p>
    </message>
  })
  ctx.command("删除欢迎词").action(({ session }) => {
    // console.log();
    const group = session.guildId || session.channelId;
    ctx.database.remove("huanlin-welcome",{
      id: Number(group),
    })
    return <message>
      <p>已删除本群欢迎词</p>
    </message>
  })
  ctx.command("查看欢迎词").action(async ({ session }) => {
    const group = session.guildId || session.channelId;
    const words = await ctx.database.get("huanlin-welcome",{
      id: Number(group),
    })  
    if(words.length == 0){
      return;
    }
    const result = []
    for (const word of words[0].words.split("\\r\\n")) {
      result.push(<p>{word}</p>)
    }
    return <message>
      {...result}
    </message>
    // session
  })
  ctx.on("guild-member-added",async (session)=>{
    const group = session.guildId || session.channelId;
    const words = (await ctx.database.get("huanlin-welcome",{
      id: Number(group),
    }))[0].words
    const result = []
    for (const word of words.split("\r\n")) {
      result.push(<p>{word}</p>)
    }
    session.send(<message>
      {...result}
    </message>)
    
    // session.bot.sendMessage(session.channelId,words[0])
  })
}
