var express = require('express')
var path = require('path')
    // 创建应用
var app = express()
app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))

app.get('/', function(req, res) {
    var user = { username: 'Jerry', age: 18, nickName: '小飞侠' }
    res.render('index', user)
})
app.listen(3000, function(err) {
    if (err)
        throw err
    console.log('服务创建成功！')
})