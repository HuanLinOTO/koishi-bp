import { Context } from '@koishijs/client'
import "./style.css"
export default (ctx: Context) => {
    console.log("spring-festival-ui loaded");
    ctx.on("dispose",()=>{
        window.location.reload()
    })
    document.querySelector("#app > div > footer > div:nth-child(1)").innerHTML = `<div style="margin-left: 4px">新年快乐~</div>`
}