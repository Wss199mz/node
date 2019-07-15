var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

var app = express()
    // 使用中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true })) // 处理所有的数据类型

// 使用静态站点
app.use(express.static(path.join(__dirname, 'static')))

// 创建接口
app.post('/api/user/login', function(req, res) {
    console.log(req.body) // 可以拿到前台传过来的数据
    var userList = [
            { id: 0, username: '张三', password: 123321, age: 18, sex: '男' },
            { id: 0, username: '李四', password: 123456, age: 18, sex: '男' },
            { id: 0, username: '萝卜头', password: 123456, age: 18, sex: '未知' },
            { id: 0, username: '邓传龙', password: 123321, age: 18, sex: '男' },
            { id: 0, username: '谢立', password: 123321, age: 18, sex: '男' },
            { id: 0, username: '王婷', password: 123321, age: 18, sex: '女' },
            { id: 0, username: '王五', password: 123321, age: 18, sex: '男' }
        ]
        // 用户输入的信息是否为空
    if (req.body.username == '' || req.body.password == '') {
        res.status(200).json({ loginStaus: false, message: '用户名或者密码不能为空！', code: 100 })
        return
    }
    // 匹配
    var status = false
    for (var i = 0; i < userList.length; i++) {
        if (req.body.username == userList[i].username && req.body.password == userList[i].password) {
            status = true
            break;
        }
    }
    if (status) {
        res.status(200).json({ loginStaus: true, message: '匹配成功！', code: 200 })
        return
    } else {
        res.status(200).json({ loginStaus: false, message: '用户名或密码错误！', code: 200 })
    }
    res.end()
})
app.listen(3000, function(error) {
    if (error)
        throw error
    console.log('服务开启成功！')
})