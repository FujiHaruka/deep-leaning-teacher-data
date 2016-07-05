const {execSync} = require('child_process')
const fs = require('fs')

process.chdir(__dirname)

// 改行で区切ってみたけど、Macだと違うかも。
let imgFiles = execSync('ls public/img')
  .toString()
  .split('\n')
  .filter(file => file !== '')

let json = JSON.stringify(imgFiles, null, '  ')

let writer = fs.createWriteStream('ui/json/imgs.json')

writer.on('error', (err) => {
  console.error(err)
})

writer.write(json)
