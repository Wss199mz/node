var express = require('express')
var app = express()

app.get('/index.html', function(req, res) {
        console.log('这是一个ge请求')
        res.send('服务端接收到get请求')
    })
    app.post('/index.html', function(req, res) {
        console.log('这是一个post请求！')
        res.send('服务端接收到post请求')
    })
var myServer = app.listen(3000, function(error) {
    if (error)
        throw error
    console.log(myServer.address())
    console.log('服务开启成功！')
})