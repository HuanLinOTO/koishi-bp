const fs = require("fs")
var plugins = fs.readdirSync("./plugins/")
for (const plugin of plugins) {
    const path = `./plugins/${plugin}/package.json`
    var data = JSON.parse(fs.readFileSync(path).toString())
    data.author = "HuanLin <linsmc@126.com>"
    fs.writeFileSync(path,JSON.stringify(data,null,"\t"))
    console.log(plugin);
}
console.log(plugins);