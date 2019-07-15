// 1. 引入开发依赖
var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser')
var app = express()

app.use(express.static(path.join(__dirname, 'static')))

// 引入路由

var index = require('./router/index')
var articleAdd = require('./router/add')
var articleDetail = require('./router/detail')
var articleEdit = require('./router/edit')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))


app.use('/', index)
app.use('/article/add', articleAdd)
app.use('/article/detail', articleDetail)
app.use('/article/edit', articleEdit)

app.listen('3000', function(err) {
    if (err)
        throw err
    console.log('服务开启！')
})