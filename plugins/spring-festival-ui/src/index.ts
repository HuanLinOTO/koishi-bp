import { resolve } from 'path'
import { Context } from 'koishi'
import {} from '@koishijs/plugin-console'
export const name = 'spring-festival-ui'

export const usage = `
只需要启用此插件即可, 请务必在启用之前调整为 「明亮模式」

警告: 在停用插件后将会刷新控制台(并不会重启 Koishi), 请及时保存
`

export function apply(ctx: Context) {
  // 在已有插件逻辑的基础上，添加下面这段
  ctx.using(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })
}