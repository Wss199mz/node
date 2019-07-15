var http = require('http') // 引入http模块
var server = http.createServer(function(req, res) { // 创建http服务
    // req: request 请求
    // res: response 回发
    res.writeHead(200, { 'Content-type': 'text/html' }) // 写入头部信息
        // res.write('<span>hello nodejs!</span>') // 返回具体的数据
    if (req.url == '/index.html') {
        res.write('<h1>这里是首页</h1>')
    } else if (req.url == '/productList.html') {
        res.write('<h1>这里是产品页面</h1>')
    } else if (req.url == '/about.html') {
        res.write('<h1>关于我们</h1>')
    } else {
        res.write('<h1>404 NotFound</h1>')
    }
    res.end() // 结束响应
})

// listen: 监听
// 如果有错误就有值
server.listen(3000, '127.0.0.1', function(err) {
    if (err)
        throw err // 如果有错误就抛出错误，并且程序终止运行
    console.log("服务启动成功！端口号为3000")
})