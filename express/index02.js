var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
const port = 3000

// 创建express应用
var app = express()

// json 处理客户端请求 get post delete put
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // string array ...

app.use(express.static(path.join(__dirname, 'www')))
app.listen(3000, function(err) {
    if (err)
        throw err
    console.log('服务创建成功！')
})