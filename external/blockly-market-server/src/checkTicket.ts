import { Context } from "koishi";

export default async (ctx: Context,ticket: string): Promise<{
    isAvailable: boolean,
    username?: string
}> => {
    var data = await ctx.database.get("forum-user",{ticket})
    // console.log(data);
    const isAvailable = data.length > 0
    if(!isAvailable) {
        return {
            isAvailable: data.length > 0,
            // username: data[0].username,
        }    
    } else {
        return {
            isAvailable: data.length > 0,
            username: data[0].username,
        }
    }
}