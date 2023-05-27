import { Adapter, Bot, Context, h, Schema, SendOptions } from 'koishi'
import { myMessenger } from './message'
import { writeFile } from 'fs/promises'
declare module 'koishi' {
  interface Context {
    KoishiForumChatRoom: KoishiForumChatRoomAdapter
  }
}

interface Msg {
  content: string,
  username: string,
  uid: string,
  mid: string
}

export class KoishiForumChatRoomBot extends Bot {
  hidden = true
  
  
  constructor (ctx: Context, config: KoishiForumChatRoomBot.Config) {
    super(ctx, config)
    ctx.plugin(KoishiForumChatRoomAdapter, this)
  }

  async sendPrivateMessage(userId: string, content: h.Fragment) {
    console.log(`[KoishiForumChatRoomBot] ${userId}: ${content}`)
    return []
  }
  
  // async sendMessage(channelId: string, content: h.Fragment, guildId?: string, options?: SendOptions) {
  //   // console.log(this.ctx.config.ck);
    
  //   // console.log(`[KoishiForumChatRoomBot] ${channelId}: ${h('', content).toString(true)}`)
  //   try {
  //     const data = {
  //       text: content
  //     };
      
  //     this.ctx.http.post('https://forum.koishi.xyz/chat/hooks/6fdd9466f1be8a29bc441d59.json', data)
  //   } catch(E) {
  //     console.log(E);
      
  //   }
  //   return []
  // }
  async sendMessage(channelId: string, content: h.Fragment, guildId?: string, options?: SendOptions) {
    return await new myMessenger(this, channelId, guildId, options).send(content)
  }
}
export namespace KoishiForumChatRoomBot {
  
  export interface Config {
    
  }
  export const Config: Schema = Schema.object({
    ck: Schema.string().description("Koishi 论坛的 Cookie，必须要！"),
  })
}

export class KoishiForumChatRoomAdapter extends Adapter.Server<KoishiForumChatRoomBot> {
  constructor(private ctx: Context, bot: KoishiForumChatRoomBot) {
    super()
    ctx.KoishiForumChatRoom = this
  }

   diff(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    
    const diffSet = new Set(
      // @ts-ignore
      [...setA].filter((x) => !setB.has(x)).map((item) => JSON.parse(item))
    );
    return Array.from(diffSet);
  }
  

  async start() {
    var lastest_msgs: Array<Msg> = [];
    
    this.ctx.setInterval(async () => {
      // console.log("start");
      try {
        // console.log(lastest_msgs.length == 0);
        
        const start_mid = lastest_msgs.length == 0 ? 539 : lastest_msgs[lastest_msgs.length - 1].mid;
        // lastest_msgs[lastest_msgs.length - 1].midconsole.log(start_mid);
        // console.log(this.ctx.config.config.ck == "_t=1ufANLasn44Nysa7i0yGpByekdnPBmCWLKFIb8FevNDyk0Rk3hm6Xmgh2au48n%2FTIFfGZOwfxi0%2B5Gn3j69CkIxKuC4ZgFtZy9H20i6frVZ2oxE%2B5qWqhjbLGJeI3qO7Ih2RqJmY3%2FM%2FfZuXkEGeaRsluqRfjHxS3AC1eyHGTyX3BENLj%2F3q9FWXPtEQGecgfWIvwkgGjmdaRRmI2q4AUCbOZFei3KMB9Kco9GEDVIb%2Fgx%2FxrSdPMoqEK013pu9ZBUdr39dir7xE%2BxJe--pYdNJaFvDu%2FUXLX9--MKBcgPHnueG6hcvD6Db5ag%3D%3D; _forum_session=AR%2FsPjYz4vRTBvmpmKLoxvUfYWKZA7rVBZ%2FO3jIEw6Ejm%2FPWlx1fXrs9nOXqRg1f8wsOem%2B8vZRcjhjUvCxGEhLLWs3tg7UZhzIdmd89Wxt%2BwqAxR%2FWtlWsH%2F0Eh0JH5TB3N1TIuZXrN8P7HSlB3n0QuYR736xV2m57Me0VWbkD%2BPzEEqZXSCT88RjNgJjOAjwmzwvky5uTUiuBwPFaCHNjxBIaHoiAMWPvTmDP5AcsRPeeQgDtwCQz7VtOWm0gMy8unvjNJ7cHbrk9pzO9fOCaRLj9oTA%3D%3D--4r5dVw%2BoMvjZs%2Bg6--tjpRHVmqAHBaBdYinpX7jA%3D%3D");
        // console.log(this.ctx.config.config.ck == "_t=1ufANLasn44Nysa7i0yGpByekdnPBmCWLKFIb8FevNDyk0Rk3hm6Xmgh2au48n%2FTIFfGZOwfxi0%2B5Gn3j69CkIxKuC4ZgFtZy9H20i6frVZ2oxE%2B5qWqhjbLGJeI3qO7Ih2RqJmY3%2FM%2FfZuXkEGeaRsluqRfjHxS3AC1eyHGTyX3BENLj%2F3q9FWXPtEQGecgfWIvwkgGjmdaRRmI2q4AUCbOZFei3KMB9Kco9GEDVIb%2Fgx%2FxrSdPMoqEK013pu9ZBUdr39dir7xE%2BxJe--pYdNJaFvDu%2FUXLX9--MKBcgPHnueG6hcvD6Db5ag%3D%3D; _forum_session=AR%2FsPjYz4vRTBvmpmKLoxvUfYWKZA7rVBZ%2FO3jIEw6Ejm%2FPWlx1fXrs9nOXqRg1f8wsOem%2B8vZRcjhjUvCxGEhLLWs3tg7UZhzIdmd89Wxt%2BwqAxR%2FWtlWsH%2F0Eh0JH5TB3N1TIuZXrN8P7HSlB3n0QuYR736xV2m57Me0VWbkD%2BPzEEqZXSCT88RjNgJjOAjwmzwvky5uTUiuBwPFaCHNjxBIaHoiAMWPvTmDP5AcsRPeeQgDtwCQz7VtOWm0gMy8unvjNJ7cHbrk9pzO9fOCaRLj9oTA%3D%3D--4r5dVw%2BoMvjZs%2Bg6--tjpRHVmqAHBaBdYinpX7jA%3D%3D");
        // return;
        const data = await this.ctx.http.get(`https://forum.koishi.xyz/chat/lookup/539.json?chat_channel_id=29`, {
          headers: {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "cache-control": "max-age=0",
            "sec-ch-ua": "\"Microsoft Edge\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "upgrade-insecure-requests": "1",
            // 'cookie': this.ctx.config.config.ck   
            "Api-Key": "142bbf1f7a193b266aae5d5f83231eaa9053073e36b52d3db87ce1098374d9e2",
            "Api-Username": "HuanlinBot"
            // "cookie": "_t=1ufANLasn44Nysa7i0yGpByekdnPBmCWLKFIb8FevNDyk0Rk3hm6Xmgh2au48n%2FTIFfGZOwfxi0%2B5Gn3j69CkIxKuC4ZgFtZy9H20i6frVZ2oxE%2B5qWqhjbLGJeI3qO7Ih2RqJmY3%2FM%2FfZuXkEGeaRsluqRfjHxS3AC1eyHGTyX3BENLj%2F3q9FWXPtEQGecgfWIvwkgGjmdaRRmI2q4AUCbOZFei3KMB9Kco9GEDVIb%2Fgx%2FxrSdPMoqEK013pu9ZBUdr39dir7xE%2BxJe--pYdNJaFvDu%2FUXLX9--MKBcgPHnueG6hcvD6Db5ag%3D%3D; _forum_session=AR%2FsPjYz4vRTBvmpmKLoxvUfYWKZA7rVBZ%2FO3jIEw6Ejm%2FPWlx1fXrs9nOXqRg1f8wsOem%2B8vZRcjhjUvCxGEhLLWs3tg7UZhzIdmd89Wxt%2BwqAxR%2FWtlWsH%2F0Eh0JH5TB3N1TIuZXrN8P7HSlB3n0QuYR736xV2m57Me0VWbkD%2BPzEEqZXSCT88RjNgJjOAjwmzwvky5uTUiuBwPFaCHNjxBIaHoiAMWPvTmDP5AcsRPeeQgDtwCQz7VtOWm0gMy8unvjNJ7cHbrk9pzO9fOCaRLj9oTA%3D%3D--4r5dVw%2BoMvjZs%2Bg6--tjpRHVmqAHBaBdYinpX7jA%3D%3D"

          }
        })
        // console.log(data.chat_messages);
        const msgs: Array<Msg> = []
        for (const msg of data.chat_messages) {
          if(msg.message && msg.user.username != "system")
            msgs.push({
              content: msg.message,
              username: msg.user.username,
              uid: msg.user.id,
              mid: msg.id
            })
        }
        const diff: Array<Msg> = this.diff(msgs.map((item) => JSON.stringify(item)),lastest_msgs.map((item) => JSON.stringify(item)))
        if(diff.length > 0 && lastest_msgs.length != 0) {
          console.log(diff);
          
          for (const msg of diff) {
            // console.log("msg",msg);
            
            const session = this.bots[0].session({
              type: 'message',
              subtype: 'guild',
              platform: 'KoishiForumChatRoom',
              userId: msg.uid,
              channelId: 'KoishiForumChatRoom',
              content: msg.content,
              author: {
                username: msg.username,
                userId: msg.uid,
              },  
            })
            this.bots[0].dispatch(session)
          }
        }
          // console.log(this.diff(msgs,lastest_msgs));  
        lastest_msgs = msgs;
        // console.log("轮询完成",msgs,msgs[msgs.length-1]);
      } catch(e) {
        // console.log(e);
        // writeFile("./debug.txt",JSON.parse(e))
        console.log(e);
        
      }
      
    },2000)
    // const session = this.bots[0].session({
    //   type: 'message',
    //   subtype: 'private',
    //   platform: 'KoishiForumChatRoom',
    //   userId: 'KoishiForumChatRoom',
    //   channelId: 'KoishiForumChatRoom',
    //   content: '.help',
    //   author: {
    //     username: 'KoishiForumChatRoom',
    //     userId: 'KoishiForumChatRoom',
    //   },
    // })
    // this.bots[0].dispatch(session)
  }

  async stop() {
    this.ctx.KoishiForumChatRoom = null
  }
}

export default KoishiForumChatRoomBot
