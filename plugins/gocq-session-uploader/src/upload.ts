const Router = require('koa-router')
const router = new Router()
const path = require('path')
const fse = require('fs-extra')

router.post('/upload', async (ctx, next) => {
  const { name, path: filePath, size, type } = ctx.request.files.file
  const dest = path.join(__dirname, '../upload', name) // 目标目录，没有没有这个文件夹会自动创建
  await fse.move(filePath, dest) // 移动文件
  ctx.body = {
    name, // 文件名称
    filePath, // 临时路径
    size, // 文件大小
    type // 文件类型
  }
})

module.exports = router