var express = require('express')

// 引入cookie-parser
var cookieParser = require('cookie-parser')
    // 创建一个express实例
var app = express()

// 使用cookie-parser
app.use(cookieParser())
app.get('/index.html', function(req, res) {
    // 设置cookie ： 
    if (req.cookies.username) {
        console.log(req.cookies) // 从客户端获取cookie
    } else {
        res.cookie("username", "李四") // 从服务端设置cookie key value [过期时间]
    }
    // req.cookies 获取cookie
    res.end()
})
app.listen(3000, function(error) {
    if (error)
        throw error
    console.log('服务开启成功！')
})