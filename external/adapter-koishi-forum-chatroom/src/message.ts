import { Element, Messenger } from '@satorijs/satori'
import { KoishiForumChatRoomBot } from './index'
import { writeFileSync } from 'fs'
// import { Attachment } from './mail'

const letters = 'abcdefghijklmnopqrstuvwxyz'

export function randomId() {
  return Array(8).fill(0).map(() => letters[Math.floor(Math.random() * letters.length)]).join('')
}

export class myMessenger extends Messenger<KoishiForumChatRoomBot> {
  buffer = ''
  reply: string
  figure = false
  async flush() {
    if (!this.buffer) return
    // console.log(this.buffer);
    try {
    const data = {
        text: this.buffer
    };
    writeFileSync("./output.txt",this.buffer)
        await this.bot.ctx.http.post('https://forum.koishi.xyz/chat/hooks/e7ae7be980e1afea3480efb6.json', data)
    } catch(E) {
        console.log(E.response.data);
    
    }
    
    const messageId = "0"
    const session = this.bot.session()
    session.messageId = messageId
    session.timestamp = +new Date()
    session.userId = this.bot.selfId
    this.results.push(session)
    session.app.emit(session, 'send', session)

    this.buffer = ''
    this.reply = undefined
  }

  async visit(element: Element) {
    const { type, attrs, children } = element
    if (type === 'text') {
      this.buffer += attrs.content
    } else if (type === 'b' || type === 'strong') {
      this.buffer += '<b>'
      await this.render(children)
      this.buffer += '</b>'
    } else if (type === 'i' || type === 'em') {
      this.buffer += '<i>'
      await this.render(children)
      this.buffer += '</i>'
    } else if (type === 'u' || type === 'ins') {
      this.buffer += '<u>'
      await this.render(children)
      this.buffer += '</u>'
    } else if (type === 's' || type === 'del') {
      this.buffer += '<s>'
      await this.render(children)
      this.buffer += '</s>'
    } else if (type === 'code') {
      this.buffer += '<code>'
      await this.render(children)
      this.buffer += '</code>'
    } else if (type === 'a') {
      this.buffer += `<a href=${attrs.href}>`
      await this.render(children)
      this.buffer += `</a>`
    } else if (type === 'p') {
      await this.render(children)
      this.buffer += `\n`
    } else if (type === 'at') {
      if (attrs.id) {
        this.buffer += `<a class="mention" href="/u/${attrs.id}">@${attrs.id}</a>`
      }
    } else if (type === 'sharp' && attrs.id) {
      this.buffer += ` #${attrs.id} `
    } else if (type === 'image' && attrs.url) {
      let url: string
      if (attrs.url.match(/^https?:/)) {
        url = attrs.url
      } else {
        // const cid = randomId()
        // const { filename, mime, data } = await this.bot.ctx.http.file(attrs.url)
        
        url = attrs.url
        console.log(url.slice(0,100));
      }
      this.buffer += `<img src="${url}" alt="" role="presentation"/>`
    } else if (type === 'quote') {
      this.reply = attrs.id
    } else if (type === 'message') {
      if (this.figure) {
        await this.render(children)
        this.buffer += '<br/>'
      } else {
        await this.flush()
        await this.render(children, true)
      }
    } else if (type === 'figure') {
      this.figure = true
      await this.render(children)
      this.figure = false
    } else {
      await this.render(children)
    }
  }
}
