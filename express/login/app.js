var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'static')))
app.post('/api/user/login', function(req, res) {
    var userList = [
        { id: 0, username: '张三', age: 10, password: 123321 },
        { id: 0, username: '李四', age: 10, password: 123456 },
        { id: 0, username: '王五', age: 10, password: 654321 },
        { id: 0, username: '赵六', age: 10, password: 123321 },
    ]
    var status = false
    for (var i = 0; i < userList.length; i++) {
        if (req.body.username == userList[i].username && req.body.password == userList[i].password) {
            status = true
            break;
        }
    }
    if (req.body.username == '' || req.body.password == '') {
        res.status(200).json({ code: 100, status: false, message: '用户名或密码不能为空！' })
        return;
    } else if (status) {
        res.status(200).json({ code: 200, status: true, message: '用户信息匹配成功！' })
        return
    } else {
        res.status(200).json({ code: 400, status: false, message: '用户名或密码输入错误！请重新输入！' })
    }
    res.end()
})
app.listen(3000, function(error) {
    if (error)
        throw error
    console.log('服务开启成功！')
})