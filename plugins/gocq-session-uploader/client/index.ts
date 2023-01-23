import { Context, icons } from '@koishijs/client'
import page from "./page.vue"
import uploadSessionIcon from "./icons/icon.vue"

icons.register("upload-session",uploadSessionIcon)

export default (ctx: Context) => {
    ctx.page({
        name: '编辑文件',
        path: '/upload-session',
        icon: "upload-session",
        component: page
    })
    // console.log(6666);
    
    ctx.on("dispose",()=>{
    })
}