// import { resolve } from 'path';
import { Context, Schema, Session, Service } from "koishi";
import { spks, spk_list } from "./spks";
import gradioMessage from "./gradioTypes";
import { generateRandomString } from "./utils";

export const name = "hlsvc-cloud";

export interface Config {
  api: "svc.baimianxiao.cn" |
    "svc.ai-lab.top"
}

export const usage = `
API 资源说明：

 - svc.baimianxiao.cn 角色多, 推理快

 - svc.ai-lab.top 角色少, 推理慢

5.1 节假日期间特别说明:

  - svc.baimianxiao.cn 暂时无法使用
`

export const Config = Schema.object({
  api: Schema.union([
    "svc.baimianxiao.cn",
    "svc.ai-lab.top",
  ])
    .description("API Endpoint")
    .default("svc.ai-lab.top"),
});

const protocol = {
  "svc.baimianxiao.cn": "ws",
  "svc.ai-lab.top": "wss",
}

declare module "koishi" {
  interface Context {
    hlsvc: hlsvc;
  }
}

export class hlsvc extends Service {
  config: Config
  constructor(ctx: Context) {
    
    // 这样写你就不需要手动给 ctx 赋值了
    super(ctx, "hlsvc", true);
    this.config = ctx.config;
  }
  getSpks(api: string = this.config.api) {
    // console.log(api);
    return spk_list[this.getApi()]
    
  }
  getApi() {
    return this.config.api
  }
  get(spk: spks, base64: string,pitch: number = 0):Promise<string> {
    return new Promise((resolve,reject) => {
      this.ctx.logger("hlsvc").debug("recieve request",spk)
      if(spk_list[this.config.api].indexOf(spk) == -1) reject("unknown spk");
      const ws = this.ctx.http.ws(`${protocol[this.config.api]}://${this.config.api}/queue/join`);
      const session_hash = generateRandomString(17);
      ws.on("message", (msg: string) => {
        // data to json
        const data = JSON.parse(msg) as gradioMessage;
        if (data.msg == "send_hash") {
          ws.send(`{"session_hash":"${session_hash}","fn_index":0}`);
        } else if (data.msg == "send_data") {
          ws.send(`{"fn_index": 0,"data": [{"data": "${base64}","name": "${generateRandomString(25)}"},"${spk}",${pitch},100,true],"session_hash": "${session_hash}"}`);
        } else if (data.msg == "process_completed") {
          try {
            const url = `http://${this.config.api}/file=${data.output.data[0].name}`;
            resolve(url)
          } catch(e) {
            console.log(e);
          }
          
        } else if (data.msg == "progress") {
          this.ctx.logger("hlsvc").debug(data.progress_data.progress,data.progress_data.desc)
        }
      });
    })
  }
}

export function apply(ctx: Context) {
  ctx.hlsvc = new hlsvc(ctx);
}
