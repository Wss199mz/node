var mysql = require('mysql') // 引入mysql模块

var server = mysql.createConnection({
    host: 'localhost', // 服务器地址
    user: 'root', // 用户名
    password: '123456', // 用户密码
    database: 'ibf_user' // 数据库名称
})
server.connect()
console.log('数据库连接成功！')

// 查询数据
// var sql = 'select * from course'
// server.query(sql, function(err, result) {
//     if (err)
//         throw err
//     console.log(result)
// })

// 更新数据
// var sql = 'update course set sid=?,cname=?,tid=? where sid = ?'
// var newData = [7, 'java', 7, 8]
// server.query(sql, newData, function(err, result) {
//     if (err)
//         throw err
//     if (result.affectedRows) {
//         console.log('数据库更新成功！')
//     }
// })

// 插入语句 
// var sql = 'INSERT INTO course (sid,cname,tid) VALUES (?,?,?)'
// var inserData = [8, 'go', 8]
// server.query(sql, inserData, function(err, result) {
//     if (err)
//         throw err
//     if (result.affectedRows) {
//         console.log('数据更新成功！')
//     }
// })

// 删除数据
// var deleteSql = 'DELETE FROM course where sid = 8'
// server.query(deleteSql, function(err, result) {
//     if (err)
//         throw err
//     if (result.affectedRows) {
//         console.log('数据库更新成功！')
//     }
// })