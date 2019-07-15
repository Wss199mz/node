// cnpm install nodejs-websocet
var ws = require('nodejs-websocket') // 服务端
const port = 3000
var server = ws.createServer(function(data) {
    console.log('创建一个websocket连接')
    console.log(data)
    data.on('text', function(str) { // 监听
        console.log('接受到' + str) // 接受客户端的数据
        data.sendText(str) // 回发数据到客户端
    })
    data.on('close', function(code, reason) {
        console.log('连接关闭')
    })
}).listen(port)
console.log('服务启动成功！')