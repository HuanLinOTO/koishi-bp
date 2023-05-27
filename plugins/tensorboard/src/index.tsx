import { writeFile } from "fs/promises";
import { Context, h, Schema } from "koishi";
import {} from "koishi-plugin-puppeteer";
export const using = ["puppeteer"];

export const name = "tensorboard";

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

const smooth = (data: Array<number>, weight = 0.85) => {
  var last = data[0];
  var result = [];
  for (const i in data) {
    var smoothed_val = last * weight + (1 - weight) * data[i];
    result.push(smoothed_val);
    last = smoothed_val;
  }
  return result;
};

export function apply(ctx: Context) {
  // write your plugin here
  const { axios } = ctx.http;
  ctx
    .command("tensorboard <url>", "查看 TensorBoard 图表列表")
    .alias("tb")
    .action(async ({ session }, url) => {
      if (!url) return "请提供您的 TensorBoard 链接";
      try {
        const { data } = await axios(
          `${url}/experiment/defaultExperimentId/data/plugin/timeseries/tags`
        );
        // console.log(data);

        var result = [];
        for (const folder in data.scalars.runTagInfo) {
          var thisFolder = [];
          const scalars = data.scalars.runTagInfo[folder];
          // console.log(2, folder, typeof folder);

          thisFolder.push(<p>文件夹名称: 「{folder}」</p>);
          // console.log(1);

          for (const index in scalars) {
            const scalar = scalars[index];
            // console.log(scalar);

            thisFolder.push(
              <p>
                图表{index}: 「{scalar}」
              </p>
            );
          }
          result.push(<message>{...thisFolder}</message>);
        }
        return <message forward>{...result}</message>;
      } catch {
        return "无法连接。";
      }
    });
  ctx
    .command(
      "tensorboard.scalar <url> <folder> <scalar> <smooth:number>",
      "获取 TensorBoard 图表"
    )
    .alias(".sc")
    .action(async ({ session }, url, folder, scalar, smoothw = 0.85) => {
      if (!url) return "请提供您的 TensorBoard 链接";
      if (!folder) return "请提供文件夹名称";
      if (!scalar) return "请提供图表名称";
      try {
        const { data } = await axios(
          `${url}/experiment/defaultExperimentId/data/plugin/timeseries/timeSeries`,
          {
            method: "POST",
            headers: {
              " Accept": "application/json",
              "content-type":
                "multipart/form-data; boundary=---011000010111000001101001",
            },
            data: `-----011000010111000001101001\r\nContent-Disposition: form-data; name="requests"\r\n\r\n[{"plugin":"scalars","tag":"${scalar}"}]\r\n-----011000010111000001101001--\r\n\r\n`,
          }
        );
        // console.log(data);
        if (Object.keys(data[0].runToSeries).length === 0)
          return "图表不存在！";
        var xAxis = [],
          yAxis = [];
        for (const dt of data[0].runToSeries[folder]) {
          xAxis.push(String(dt.step) + " step");
          yAxis.push(Number(dt.value));
        }
        // console.log(yAxis);
        // @ts-ignore
        yAxis = smooth(yAxis, smoothw);
        // console.log(yAxis);

        const renderHTML = `<html>
        <head>
          <meta charset="utf-8" />
          <title>ECharts</title>
          <script src="https://unpkg.com/echarts@5.4.1/dist/echarts.min.js"></script>
              <script>
                  
              </script>
        </head>
        <body>
          <div
            id="main"
            style="width: 100%; height: 100%"
          ></div>
          <script type="text/javascript">
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById('main'));
            var xAxis = JSON.parse('${JSON.stringify(xAxis)}'),
              yAxis = JSON.parse('${JSON.stringify(yAxis)}');
            // 指定图表的配置项和数据
            option = {
              xAxis: {
                data: xAxis,
              },
              yAxis: {},
              series: [
                {
                  data: yAxis,
                  type: 'line',
                  smooth: true,
                },
              ],
            };
            myChart.setOption(option);
          </script>
        </body>
      </html>`;
        ctx.puppeteer.render(
          renderHTML,
          (page, next) =>
            new Promise((res) => {
              setTimeout(async () => {
                // // console.log(await page.screenshot());
                // var filename = `tb-${new Date().getTime()}`;
                // await writeFile(filename,await page.screenshot())
                // @ts-ignore
                session.send(h.image(await page.screenshot(), "image/png"));
                page.close();
                // res("");
              }, 2000);
            })
        );
      } catch (e) {
        console.log(e);
        return "无法连接。";
      }
    });
}
