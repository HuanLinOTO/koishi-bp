import { Context, Schema, h, sleep } from "koishi";
import {} from "koishi-plugin-puppeteer";

export const name = "draw-board";

export const using = ["puppeteer"];

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

declare module "koishi" {
  interface Tables {
    "draw-board": db;
  }
}
export interface db {
  id: number;
  color: string;
}
export async function apply(ctx: Context) {
  // write your plugin here
  ctx.model.extend("draw-board", {
    id: "unsigned",
    color: "char",
  });
  // console.log(await ctx.database.get("draw-board",{}));

  // await ctx.database.create("draw-board", { id: 20 , color: "255,255,255" });

  // for (var i = 0; i < 255 * 255; i++) {
  // ctx.database.remove("draw-board",{})
  // }
  // await ctx.database.create("draw-board",{id:1,color:"black"})
  // console.log(await ctx.database.get("draw-board",{id:1}));
  const fcolors = {
    white: "255,255,255",
    black: "0,0,0",
    red: "255,0,0",
    green: "0,255,0",
    blue: "0,0,255",
    yellow: "255,255,0",
    cyan: "0,255,255",
    magenta: "255,0,255",
    gray: "128,128,128",
    brown: "165,42,42",
    orange: "255,165,0",
    pink: "255,192,203",
    purple: "128,0,128",
    gold: "255,215,0",
    silver: "192,192,192",
    navy: "0,0,128",
    maroon: "128,0,0",
    olive: "128,128,0",
    lime: "0,255,0",
    teal: "0,128,128",
  };
  ctx.command("drawboard").action(() => {
    return (
      <message>
        <p>命令:</p>
        <p>drawboard.draw {`<pos> <color(rgb或快捷颜色)>`} 给画板上色</p>
        <p>drawboard.view 查看画板</p>
        <p>例子：</p>
        <p>drawboard.draw 0,0 black 把左上角上色成黑色 </p>
        <p>支持的快捷颜色：</p>
        <p>white: '白色'</p>
        <p>black: '黑色'</p>
        <p>red: '红色'</p>
        <p>green: '绿色'</p>
        <p>blue: '蓝色'</p>
        <p>yellow: '黄色'</p>
        <p>cyan: '青色'</p>
        <p>magenta: '洋红'</p>
        <p>gray: '灰色'</p>
        <p>brown: '棕色'</p>
        <p>orange: '橙色'</p>
        <p>pink: '粉红'</p>
        <p>purple: '紫色'</p>
        <p>gold: '金色'</p>
        <p>silver: '银色'</p>
        <p>navy: '深蓝'</p>
        <p>maroon: '暗红'</p>
        <p>olive: '橄榄'</p>
        <p>lime: '酸橙'</p>
        <p>teal: '水鸭'</p>
      </message>
    );
  });

  ctx
    .command("drawboard.draw <pos> <color:text>")
    .action(async ({ session }, pos, color) => {
      if (!pos || !color) return "缺少参数";
      // console.log(pos, color);
      const spl = pos.split(",").map((item) => Number(item));
      if (
        spl.length > 2 ||
        !(fcolors[color] || color.split(",").length <= 3) ||
        spl[0] > 255 ||
        spl[0] < 0 ||
        spl[1] > 255 ||
        spl[1] < 0
      )
        return "参数错误";
      var realPos = spl[0] + spl[1] * 256;
      // console.log(realPos,fcolors[color] || color);
      if ((await ctx.database.get("draw-board", { id: realPos })).length == 0)
        ctx.database
          .create("draw-board", { id: realPos, color: fcolors[color] || color })
          .then(() => {
            session.send("上色成功！");
          })
          .catch(() => {
            session.send("上色失败~");
          });
      else
        ctx.database
          .set(
            "draw-board",
            { id: realPos },
            { color: fcolors[color] || color }
          )
          .then(() => {
            session.send("上色成功！");
          })
          .catch(() => {
            session.send("上色失败~");
          });
    });
  ctx.command("drawboard.view").action(async ({ session }) => {
    // const page = await ctx.puppeteer.page();
    // page.
    var data = [];
    (await ctx.database.get("draw-board", {})).map((item) => {
      data[item.id] = item.color;
    });
    var colors = [];
    for (var i = 0; i < 255 * 255; i++) {
      colors[i] = data[i] || "255,255,255";
    }
    var board = [];
    for (const color of colors) {
      board.push(
        `<span style="background-color: rgb(${color});width: 1px;height: 1px;"></span>`
      );
      if (color % 255 === 0) {
        board.push("<br>");
      }
    }
    // console.log(colors);

    await ctx.puppeteer.render(
      `
        <style>
        body {
          margin: 0px;
        }
        .c {
          background-color: rgb(255, 242, 226);
          width: 300px;
          height: 300px;
        }
        </style>
        <div class="c">
          <div style="
          display: flex;
          align-content: flex-start;
          width: 256px;
          flex-flow: row wrap;
          padding: 22px;
          ">
            ${board.join("")}
          </div>
        </div>
        `,
      async (page) => {
        // @ts-ignore
        page.setViewport({ width: 300, height: 300 });
        session.send(
          h.image(await page.screenshot({ fullPage: true }), "image/png")
        );
        // await sleep(3000000);
        return "";
      }
    );
  });
}

// 0  1  2  3
// 4  5  6  7
// 8  9  10 11
// 12 13 14 15
