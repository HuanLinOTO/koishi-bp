import { createWriteStream } from "fs";
import { readFile, unlink } from "fs/promises";
import { Context, Schema } from "koishi";

import {} from "koishi-plugin-hlsvc-cloud";
import { spk_list, spks } from "koishi-plugin-hlsvc-cloud/lib/spks";

export const name = "163music-svc";

export interface Config {
  api:
    | "https://api.obfs.dev"
    | "https://hibiapi.lite0.com"
    | "https://api.kyomotoi.moe"
    | "https://hibiapi.aliserver.net"
    | "https://hibi.moecube.com";
  tooLong: 1 | 2
}

export const Config = Schema.object({
  api: Schema.union([
    "https://api.obfs.dev",
    "https://hibiapi.lite0.com",
    "https://api.kyomotoi.moe",
    "https://hibiapi.aliserver.net",
    "https://hibi.moecube.com",
  ])
    .description("API Endpoint")
    .default("https://api.obfs.dev"),
  tooLong: Schema.union([
    Schema.const(1).description("直接发送 (适配器可能会因为请求时间过久而出现异常)"),
    Schema.const(2).description("Koishi 下载完毕后将 Base64 发送给适配器 (占用内存偏大)"),
  ]).description("转换后的音频过长时的操作").default(1),
});

async function downloadMp3(url: string, ctx: Context) {
  const response = await ctx.http.get(url, { responseType: "arraybuffer" });
  const audioBase64 = Buffer.from(response).toString("base64");
  const dataURI = `data:audio/mp3;base64,${audioBase64}`;
  return dataURI;
}

export function apply(ctx: Context, config: Config) {
  // write your plugin here
  console.log()  
  ctx
    .command("163svc", "从网易云音乐获取歌曲，丢给 svc，使用该命令获取完整帮助")
    .action(({ session }) => {
      return (
        <message forward>
          <message>发送 `163svc.search (歌曲名称)` 搜索歌曲</message>
          <message>
            发送 `163svc.svc (歌曲id) (角色) (音高调整, 可选)` 进行推理{" "}
          </message>  
          <message>
            音高相关: 原唱女，转男，填 -20 ~ -30， 原唱男，转女，填 20 ~
            30，转换性别相同可不动{" "}
          </message>
          <message>支持以下角色</message>
          <message>
            {ctx.hlsvc.getSpks().map((item) => (
              <p>{item}</p>
            ))}
          </message>
        </message>
      );
    });
  ctx
    .command("163svc.search <keyword:text>", "搜索歌曲")
    .action(async ({ session }, keyword) => {
      if (!keyword) return <message>请输入歌曲名称</message>;
      const data = await ctx.http.get(
        `${config.api}/api/netease/search?s=${keyword}&search_type=1&limit=10`
      );
      var res: Array<{
        name: string;
        id: number;
      }> = [];
      // console.log(data);

      for (const item of data.result.songs) {
        res.push({ name: item.name, id: item.id });
      }
      return (
        <message forward>
          {res.map((item) => (
            <message>
              名称: {item.name} id: {item.id}
            </message>
          ))}
        </message>
      );
    });
  ctx
    .command("163svc.svc <id> <spk> [pitch:number]", "转换歌曲")
    .action(async ({ session }, id, spk: spks, pitch = 0) => {
      if (!spk) return <message>请输入转换目标</message>;
      if (!id) return <message>请输入歌曲id</message>;
      if (ctx.hlsvc.getSpks().indexOf(spk) == -1)
        return <message>转换目标不存在</message>;
      const data = await ctx.http.get(
        `https://api.obfs.dev/api/netease/song?id=${id}`
      );
      // console.log(data);

      const base64 = await downloadMp3(data.data[0].url, ctx);
      session.send("已获取到歌曲, 稍安勿躁, 在推理了！");
      // console.log(base64);

      const res = await ctx.hlsvc.get(spk, base64, pitch);
      console.log(res);
      
      if(config.tooLong == 1) {
        return <audio url={res}></audio>;
      } else {
          // 使用 axios 发送 get 请求，设置 responseType 为 'stream'
          const response = await ctx.http.get(res, {responseType: 'stream'});
          // 创建一个临时文件的路径
          const tempPath = `./163svc.temp.${id}.${spk}.${pitch}.${Date.now()}.wav`;
          // 创建一个可写流
          const writer = createWriteStream(tempPath);
          // 将响应数据流写入临时文件
          response.pipe(writer);
          // 等待写入完成
          await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
          });
          // 读取临时文件的内容
          const data = await readFile(tempPath);
          // 将内容转换成 base64 格式
          const base64 = data.toString('base64');
          // 删除临时文件
          await unlink(tempPath);
          // 返回 base64 字符串
          return <audio url={`data:audio/wav;base64,${base64}`}></audio>
      }
    });
}
