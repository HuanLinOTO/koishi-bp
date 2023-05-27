import { Context, icons } from '@koishijs/client'
import page from "./page.vue"
import uploadSessionIcon from "./icons/icon.vue"

icons.register("upload-session",uploadSessionIcon)



export default (ctx: Context) => {
    ctx.page({
        name: '变更登录信息',
        path: '/upload-session',
        icon: "upload-session",
        component: page
    })
    
    ctx.on("dispose",()=>{
    })
}