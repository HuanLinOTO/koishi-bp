import { resolve } from 'path'
import { Context, Schema } from 'koishi'
import {} from '@koishijs/plugin-console'
import scandir from './scandir'
import { scanResultItem } from './scandir'
import { mkdir, readFile, writeFile } from 'fs/promises'

export const name = 'spring-festival-ui'
export const usage = `
只需要启用此插件即可

警告: 在停用插件后将会刷新控制台(并不会重启 Koishi), 请及时保存
`

interface saveFileEventsArg {
  path: string,
  content: string
}
interface addFolderEventsArg {
  path: string,
  name: string 
}

declare module '@koishijs/plugin-console' {
  interface Events {
    // 扫描文件夹
    // CNM 的 VScode TS类型检查, 凭什么不给我用 scandir.scanResultItem
    'editfile-getFileList'(): Promise<Array<scanResultItem>>
    'editfile-getFile'(path: string): Promise<string>
    'editfile-saveFile'(arg: saveFileEventsArg): Promise<undefined>
    'editfile-addFolder'(arg: addFolderEventsArg): Promise<undefined>

  } 
}

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
  // 被动返回 扫描文件夹
  ctx.console.addListener('editfile-getFileList',async () => {
    return await scandir(config.ignoreScan); 
  })
  // 被动返回 文件内容
  ctx.console.addListener('editfile-getFile',async (path: string) => {
    return (await readFile(path)).toString(); 
  })
  ctx.console.addListener('editfile-saveFile',async (arg) => {
    await writeFile(arg.path,arg.content)
    return undefined;
  })
  ctx.console.addListener('editfile-addFolder',async (arg) => {
    await mkdir(arg.path+"/"+arg.name);
    return undefined;
  })
}