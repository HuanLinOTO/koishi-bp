import { Context, Schema } from 'koishi'
import {} from '@koishijs/plugin-console'
import { resolve } from 'path'
import addPlugin from './addPlugin'
// import checkTicket from './checkTicket'
export const name = 'blockly-market-server'
export interface Config {}

export const Config: Schema<Config> = Schema.object({})
declare module "koishi" {
  interface Tables {
    "blockly-market": bmdb;
    "forum-user": userdb;
  }
}
export interface bmdb {
  id: number;
  username: string;
  body: string;
  title: string
}
export interface userdb{
  ticket: string;
  username: string;
}

// 一个ts函数，生成32位随机大小写字母字符串
function generateRandomString(long: number = 32): string {
  // 定义一个包含所有大小写字母的字符串
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  // 定义一个空字符串，用来存储生成的随机字符串
  let randomString = "";
  // 循环32次，每次从字母表中随机选取一个字符，拼接到随机字符串中
  for (let i = 0; i < long; i++) {
    // 获取一个0到51之间的随机整数，作为字母表的索引
    const index = Math.floor(Math.random() * 52);
    // 根据索引从字母表中取出一个字符，拼接到随机字符串中
    randomString += alphabet[index];
  }
  // 返回生成的随机字符串
  return randomString;
}

interface tokenUT {
  username: string,
  ticket: string
}

export async function apply(ctx: Context) {
  var tokens_pool = [];
  // console.log(1);
  // checkTicket(ctx,"dRcDLHBMGwBzyZhcNdJyEDylwumMiqiRoWZYclZVGWnbZaeKPbpUtmqMWXbAATbSFrwjjTitxDhiLbQtIPxuhaVFJpTkwdirdMIvLitVtpF")
  console.log(await ctx.database.get("blockly-market",{}));
  
  ctx.model.extend("blockly-market", {
    id: "unsigned",
    username: "char",
    body: "text",
    title: "char"
  });
  ctx.model.extend("forum-user", {
    ticket: "char",
    username: "char",
  }, {
    primary: "ticket"
  });
  addPlugin(ctx)
  const log = ctx.logger("BlocklyMarket")
  var tokens: Map<string,boolean | tokenUT> = new Map();
  ctx.command("bmlogin <token>").action(({ session }, token) => {
    log.info(session)
    if(session.platform != undefined) return "请去论坛，喵"
    if(tokens.get(token) != undefined) {
      // 老子 tmd 107 位 ticket，哪个 jb 给我 crack 了你别想活到第二天
      tokens.set(token,{
        username: session.username,
        ticket: generateRandomString(107)
      })
      return `验证成功！\n 登录账号：${session.username} \n 欢迎加入 Blockly 开放平台，请在 30s 内返回控制台点击验证。`
    } else {
      return "Token 不存在或者已经过期"
    }
    
  })
  ctx.router.get("/bmlogin/getToken",(rctx) => {

    let token = generateRandomString()
    log.info(`new token ${token}`)

    tokens.set(token,true);
    ctx.setTimeout(() => {
      // 如果没有验证成功
      if(typeof tokens.get(token) != 'string') {
        // 干掉你！
        tokens.delete(token)
        log.info(`delete token ${token}`)
      } else {
        // 劳资再给你 30 秒时间验证
        ctx.setTimeout(() => {
          // 干掉你！
          tokens.delete(token)
          log.info(`delete token ${token}`)
        },1000*30)
      }
    },1000*60)
    rctx.body = {
      code: 200,
      msg: `获取 Token 成功，请使用该命令: .bmlogin ${token}`,
      token
    }
  })  


  ctx.router.get("/bmlogin/verifyToken",(rctx) => {
    var token = rctx.query.token as string;
    const data = tokens.get(token);
    // console.log(typeof {});
    
    if(typeof data != 'object') {
      rctx.status = 400
      rctx.body = {
        code: 400,
        msg: "没 Token 你发你🐎呢"
      }
      return;
    }
    var { ticket, username } = data as tokenUT 
    if(typeof ticket == 'string') {
      rctx.body = {
        code: 200,
        msg: "Token 验证成功，欢迎来到 Blockly 开放平台！",
        ticket: ticket
      }
      ctx.database.create("forum-user",{
        ticket,username
      })
      tokens.delete(token)
    } else {
      rctx.status = 400
      rctx.body = {
        code: 400,
        msg: "没验证 Token 你发你🐎呢"
      }
    }
  })
  ctx.using(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })
}
