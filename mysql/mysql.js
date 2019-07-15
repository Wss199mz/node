var mysql = require('mysql') // 引入mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'ibf_user'
})
connection.connect() // 连接操作
console.log('连接成功！！！')