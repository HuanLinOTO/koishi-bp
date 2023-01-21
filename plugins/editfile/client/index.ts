import { Context, icons } from '@koishijs/client'
import page from "./page.vue"
import editfile from "./icons/editfile.vue"

icons.register("editfile",editfile)

export default (ctx: Context) => {
    ctx.page({
        name: '编辑文件',
        path: '/editfile',
        icon: "editfile",
        component: page
    })
    // console.log(6666);
    
    ctx.on("dispose",()=>{
    })
}