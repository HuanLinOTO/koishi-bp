import { resolve } from 'path'
import { Context, Schema } from 'koishi'
import {} from '@koishijs/plugin-console'

export const name = 'gocq-session-uploader'
export const usage = `
只需要启用此插件即可 提供了一个嵌入在控制台 Manaco Editor(Vscode)
`

export interface Config {
  ignoreScan: Array<string>
}

export const Config: Schema<Config> = Schema.object({
  ignoreScan: Schema.array(Schema.string()).default(["node_modules",".git",".vite",".github"]).description("目录扫描器忽略文件夹名称")
}) 

export function apply(ctx: Context,config: Config) {
  ctx.using(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })
} 