var http = require('http')
const port = 8000
const hostName = 'localhost'

var myserver = http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' })
    if (request.url == '/index.html') {
        response.write("<h1>nodejs 课程主页</h1>")
    } else if (request.url == '/productList.html') {
        var productList = [
            { project: 'java', price: 999 },
            { project: 'php', price: 999 },
            { project: 'nodejs', price: 999 },
            { project: '大数据', price: 999 },
            { project: '人工智能', price: 999 },
            { project: 'h5', price: 999 }
        ]
        response.writeHead(200, { 'Content-Type': 'text/json;charset=utf8' })
        response.write(JSON.stringify(productList))
    } else {
        response.write("<h1>404 Not Found</h1>")
    }
    response.end()
})
myserver.listen(port, hostName, function(err) {
    if (err)
        throw err
    console.log('服务开启成功')
})