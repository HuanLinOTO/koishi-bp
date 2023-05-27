import { Context, Logger, Schema } from 'koishi'
import spawn from 'execa'
import {} from '@koishijs/plugin-console'
import { DataService } from '@koishijs/plugin-console'
import which from "which-pm-runs"
import { resolve } from 'path'
import { readFile, writeFile } from 'fs/promises'
import yaml from "yaml"
import getPort from 'get-port';
import WebSocket from 'ws';

declare module '@koishijs/plugin-console' {
  interface Events {
    'koishi-get-port'(): number
  }
}
export const name = 'koishi'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

type readyStatus = 0 | // 还在装
                   1 | // 启动完毕
                   2;  // 失败

var isReady: readyStatus = 0;

var log = new Logger("2koishi")

declare module '@koishijs/plugin-console' {
  namespace Console {
    interface Services {
      "get-koishi-plugin-koishi-status": CustomProvider1
    }
  }
}

class CustomProvider1 extends DataService<readyStatus> {
  constructor(ctx: Context) {
    super(ctx, 'get-koishi-plugin-koishi-status')
  }

  async get() {
    return isReady
  }
}

interface Manager {
  name: string
  version: string
}
function spawnAsync(args: string[], options: spawn.Options = {}) {
  const child = spawn(args[0], args.slice(1), options)
  return new Promise<number>((resolve) => {
    // child.stderr?.pipe(process.stderr)
    // child.stdout?.pipe(process.stdout)
    child.stderr.on("data",(data) => {
      log.error(data.toString())
    })
    child.stdout.on("data",(data) => {
      log.info(data.toString())
    })
    child.on('close', resolve)
  })
}

function spawnKoishi(args: string[], options: spawn.Options = {}) {
  const child = spawn(args[0], args.slice(1), options)
  return new Promise((resolve) => {
    // child.stderr?.pipe(process.stderr)
    // child.stdout?.pipe(process.stdout)
    child.stderr.on("data",(data) => {
      log.error(data.toString())
    })
    child.stdout.on("data",(data) => {
      log.info(data.toString())
    })
    resolve(child)
  })
}

function getManager(manager: Manager): Array<string> {
  if (!manager) return ['npm']
  if (manager.name !== 'yarn' || manager.version.startsWith('1.')) return [manager.name]
  return ['yarn', 'npm']
}

export async function apply(ctx: Context) {
  
  var koishiYAML = yaml.parse((await readFile("./koishi.yml")).toString())
  var thisPort = koishiYAML.port
  var thisUiPath = ctx.console.config.uiPath || "/"
  console.log(thisPort,thisUiPath);
  
  ctx.plugin(CustomProvider1)
  ctx.using(['console'], (ctx) => {
    ctx.console.addEntry({
      dev: resolve(__dirname, '../client/index.ts'),
      prod: resolve(__dirname, '../dist'),
    })
  })
  // write your plugin here
  // console.log(getManager(which()));
  const manager = getManager(which())[0];
  // console.log(__dirname);
  // console.log(resolve(__dirname,"../bp"));
  const bp_path = resolve(__dirname,"../bp");
  var child = null;
  var port = await getPort()
  spawnAsync([manager], { cwd: bp_path }).then(async (code) => {
    var bpConfig = yaml.parse((await readFile(resolve(bp_path,"koishi.yml"))).toString());
    bpConfig.port = port;
    await writeFile(resolve(bp_path,"koishi.yml"),yaml.stringify(bpConfig))
    if(code == 0)
    isReady = 1;
    else
      isReady = 2;
    // var child = await spawnKoishi([manager,"start"], { cwd: bp_path })
    child = spawn(manager, ["start"], { cwd: bp_path })
    child.stderr.on("data",(data) => {
      // log.error(data.toString())
    })
    child.stdout.on("data",(data) => {
      // log.info(data.toString())
    })
    child.on("close",() => {
      log.info("process close!")
    })
  });
  ctx.on("dispose",() => {
    child.kill("SIGINT")
  })
  ctx.console.addListener('koishi-get-port', () => {
    return port
  })
  // console.log(global.endpoint)
}
  