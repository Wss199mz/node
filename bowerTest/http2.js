var http = require('http')
const port = 3000
const hostName = 'localhost';
var myserver = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html;charset=utf8' })
    if (req.url == '/index.html') {
        res.write('<h1>首页</h1>')
    } else if (req.url == '/product.html') {
        var productList = [
            { id: 1, name: '电脑', price: 200 },
            { id: 2, name: '手机', price: 100 }
        ]
        res.writeHead(200, { 'Content-type': 'text/json;charset=utf8' })
        res.write(JSON.stringify(productList))
    }
    res.end()
})
myserver.listen(port, hostName, function(err) {
    if (err) {
        throw err
    }
    console.log('服务创建成功！')
})