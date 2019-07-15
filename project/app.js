// 引入模块：express path
var express = require('express')
var path = require('path')


// var cookieParser = require('cookie-parser')
// 处理客户端数据类型
var bodyParser = require('body-parser')
var index = require('./routers/index')
var article = require('./routers/article')
var user = require('./routers/users')
var term = require('./routers/term')
var app = express()
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // 处理所有类型的数据

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', index)
    // app.use('/article', article)
app.use('/user', user)
app.use('/term', term)
app.use('/user', user)



app.listen(3000, function(err) {
    if (err)
        console.log(err)
    console.log('服务启动成功！')
})