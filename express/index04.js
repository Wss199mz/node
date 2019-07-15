var express = require('express')
var path = require('path')
var bodyPaser = require('body-parser') // 中间件

const port = 3000

var app = express() // 创建一个应用
app.use(bodyPaser.json()) // 解析json格式的数据
app.use(bodyPaser.urlencoded({ extended: true })) // 处理all type

// 指定静态目录
app.use(express.static(path.join(__dirname, 'www')))
var userList = [
        { id: 1, username: 'Jerry', age: 18, score: 60 },
        { id: 2, username: 'Terry', age: 18, score: 60 },
        { id: 3, username: 'Tom', age: 18, score: 60 },
    ]
    // 创建接口
app.get('/api/user/get', function(req, res) {
    res.send('这是一个get接口')
})
app.post('/api/user/post', function(req, res) {
    if (req.body.score > 90) {
        res.status(200).json(userList[0]) // 返回一个json对象
    } else {
        res.status(200).json(userList[1]) // 返回一个json对象
    }
})
app.put('/api/user/put', function(req, res) {
    for (var i = 0; i < userList.length; i++) {
        if (req.body.id == userList[i].id) {
            userList[i].score = req.body.score
        }
    }
    var obj = { status: true, message: '修改成功', data: userList }
    res.status(200).json(obj)
})
app.listen(3000, function(err) {
    if (err)
        throw err
    console.log('服务开启')
})