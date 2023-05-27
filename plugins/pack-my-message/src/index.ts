import { Context, Schema, h } from 'koishi'

export const name = 'huanlin-welcome'

export interface Config {}

export const usage = `
`

export const Config: Schema<Config> = Schema.object({
})

export function apply(ctx) {
    ctx.command("#pack-test <content:text>").action(({ session },content) => {
        // 整出一个bot对象
        var { bot } = session;
        // 去掉命令
        const attrs = {
            userId: session.userId,
            nickname: session.author?.nickname || session.username,
        };
        // console.log(attrs);
        // 撤回消息
        bot.deleteMessage(session.channelId, session.messageId);
        // 丢出去
        return h("message", { ...attrs, forward: true }, [
            h("message", attrs, [`本打包消息由 ${session.userId} 打包\n`]),
            content,
        ]);
    });
}