import { Context, h, Schema } from 'koishi'

export const name = 'huanlin-welcome'

export interface Config {}

export const usage = `
对着机器人说「设定欢迎词」即可设定本群的欢迎词

「查看欢迎词」即可查看当前群的欢迎词

「删除欢迎词」即可删除当前群的欢迎词
`

export const Config: Schema<Config> = Schema.object({
  isAt: Schema.boolean().default(true).description("at新进群的"),
  superusers: Schema.array(Schema.string()).description("超管列表")
})

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

  const guildRequestList = [];

  var timeInterval = {};

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
  ctx.command("#kick <id>").action(async({ session },id) => {
    // console.log(h.select(session.elements,"at")[0].attrs.id);
    id = String(h.select(session.elements,"at")[0]?.attrs.id || id);
    if(id == "undefined") {
      return "请提供 id"
    }
    if(!(await session.bot.getGuildMemberMap(session.guildId))[id]) {
      return "不存在此用户"
    }
    // console.log(id);
    await session.bot.kickGuildMember(session.guildId,id)
    return "已踹";    
  })
  ctx.on("guild-member-added",async (session)=>{
    // console.log(timeInterval[session.platform+session.guildId],timeInterval[session.platform+session.guildId] == null);
    
    if(timeInterval[session.platform+session.guildId] === null) return;
    timeInterval[session.platform+session.guildId] = null
    setTimeout(()=>{
      delete timeInterval[session.platform+session.guildId];
    },1000*30)
    const group = session.guildId || session.channelId;
    const words = (await ctx.database.get("huanlin-welcome",{
      id: Number(group),
    }))[0].words
    const result = []
    result.push(<at id={session.userId}></at>)
    for (const word of words.split("\r\n")) {
      result.push(<p>{word}</p>)
    }
    session.send(<message>
      {...result}
    </message>)
    // session.bot.sendMessage(session.channelId,words[0])
  })
  ctx.on("guild-member-request",async (session)=>{
    var snd = await session.bot.sendMessage(session.guildId,<message>
      <p>收到一份来自 { session.userId } 的请求（DEV）</p>
      <p>{ session.elements[0].attrs.content }</p>
    </message>)
    guildRequestList.push({
      user: session.userId,
      requestId: session.messageId,
      messageId: snd[0]
    })
  })

  ctx.on("message",async (session) => {
    if(session.quote) {
      const tmp = [];
      for (const iterator of guildRequestList) {
        if(session.quote.messageId != iterator.messageId) {
          tmp.push(iterator);
          continue;
        }
        var content = session.elements[session.elements.length - 1].attrs.content.replace(/^\s+|\s+$/g, '') 
        if(content == "y") {
          if ((await ctx.database.getUser(session.platform,session.userId)).authority < 3)  {
            session.send("权限不足")
            tmp.push(iterator)
            return;
          }
          session.bot.handleGuildMemberRequest(iterator.requestId,true)
        } else if(content == "n") {
          if ((await ctx.database.getUser(session.platform,session.userId)).authority < 3)  {
            session.send("权限不足")
            tmp.push(iterator)
            return;
          }
          session.bot.handleGuildMemberRequest(iterator.requestId,false)
        } else {
          tmp.push(iterator)
          session.send(<>未能匹配对于 { iterator.requestId } 的入群验证操作, 只能接受 y/n</>)
        }
      }
    }
  })
}

