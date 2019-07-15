// 1.  require('http')
var http = require('http')
var port = 8000
    // 2. 通过http模块创建http服务
var nodeServer = http.createServer(function(request, response) {
    // 发送http头部
    // http 状态值：200(成功) 400 500 401 402 403。。。 502 服务端的错误
    response.writeHead(200, { 'Content-Type': 'text/plain' }) // 内容为text/plain
        // 发送所响应的数据给客户端
    response.end('北风网')
})
nodeServer.listen(port, 'localhost', function(err) {
    if (err)
        throw err // 服务创建失败，爆出错误
    console.log('服务创建成功！')
})