var mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1/27017', function(err) {
    if (err)
        throw err
    console.log('数据库连接成功！')
})

// 创建骨架
var articleSchema = new mongoose.Schema({
        title: String,
        content: String
    })
    // 创建数据模型
var articleSchemaModel = mongoose.model('article', articleSchema)


module.exports = articleSchemaModel