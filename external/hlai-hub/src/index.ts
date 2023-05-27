// 此处需要导入 @koishijs/plugin-console 以获取类型
import {} from '@koishijs/plugin-console'
import { resolve } from 'path'
import { Context, Schema } from 'koishi'
import { mkdir, readdir } from 'fs/promises'
import { existsSync } from 'fs'

export const name = 'hlai-hub'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})
declare module '@koishijs/plugin-console' {
  interface Events {
    'get-last-audio'(): Promise<string>
  }
}


export function apply(ctx: Context) {
  if(!existsSync("./hlai-hub")) 
    mkdir("./hlai-hub")
  // 在已有插件逻辑的基础上，添加下面这段
  ctx.using(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
    ctx.console.addListener('get-last-audio',async () => {
      var fl = await readdir("./hlai-hub")
      if(fl.length == 0) return "000001"
      return fl[fl.length-1].replace(".wav","")
    })
  })
}