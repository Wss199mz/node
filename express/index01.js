var express = require('express')
var path = require('path')
var expressTest = express() // 创建一个express应用
    // get post
    // expressTest.get('/index.html', function(req, res) {
    //     res.send('hello ibefeng')
    // })

// app.use()
expressTest.use(express.static(path.join(__dirname, 'www')))
expressTest.get('*', function(req, res) {
    console.log(req)
    res.sendFile(path.join(__dirname, 'www', 'error', 'index.html'))
})
expressTest.listen(3000, function(err) {
    if (err)
        throw err
    console.log('服务启动成功！')
})