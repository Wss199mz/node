// 创建http服务
var http = require('http')
var fs = require('fs')
var path = require('path')
http.createServer(function(req, res) {
    var url = req.url.length <= 1 ? '/index.html' : req.url // 默认跳转
    console.log(path.join('www', url))
    if (fs.existsSync(path.join('www', url))) // 如果这个文件存在
    {
        var content = fs.readFileSync(path.join('www', url))
        res.write(content)
    } else {
        var content = fs.readFileSync(path.join('www', 'error', 'index.html'))
        res.write(content)
    }
    res.end()
}).listen(8000, function(err) {
    if (err)
        throw err
    console.log('服务创建成功！')
})