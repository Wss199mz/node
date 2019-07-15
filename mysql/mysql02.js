var mysql = require('mysql') // 引入mysql模块

var server = mysql.createConnection({ // 创建mysql连接
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'ibf_user'
})
server.connect()
console.log('连接成功！')
var sql = 'SELECT * FROM employee'; // 查询数据
var sql = 'INSERT INTO course(sid,cname,tid) VALUES(?,?,?)';
var sql = 'UPDATE course set cname = ?,tid=? where sid=?'
var str = ['java', '1', '7']
server.query(sql, str, function(err, result) // 执行sql语句
    {
        if (err) {
            console.log('插入失败！')
            return
        }
        console.log('数据插入成功！')
    })