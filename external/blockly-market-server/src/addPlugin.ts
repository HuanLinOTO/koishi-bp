import { Context } from "koishi";
import checkTicket from "./checkTicket";

export default (ctx: Context) => {
  ctx.router.post("/bm/addPlugin", async (rctx) => {
    const { body, title, ticket } = rctx.request.body as Record<string,string>;
    // body,username,title if undefined, log 404
    // console.log(Boolean(body && username && title && ticket),body , username , title , ticket);
    
    if (!(body && title && ticket)) {
        rctx.status = 400
        rctx.body = {
            code: 400,
            msg: "缺东西了哥们"
        }
        return;
    }

    var isTicket = await checkTicket(ctx,ticket)
    // console.log(isTicket);
    
    if(isTicket.isAvailable) {
        const result = await ctx.database.create("blockly-market", {
          body,
          username: isTicket.username,
          title,
          // forumid
        });
        rctx.body = {
            code: 200,
            msg: "发布成功，感谢你的贡献！",
            data: result
        };
    } else {
        rctx.status = 400; 
        rctx.body = {
            code: 400,
            msg: "Ticket 不存在，请尝试重新登陆"
        }
    }

  });
};
// const addPlugin = async (username: Params["username"], code: Params["code"], title: Params["title"], ctx: Context) => {
//   const result = await ctx.database.create("blockly-market", {
//     body: code,
//     username,
//     title,
//     // forumid
//   })
//   return result;
// }
