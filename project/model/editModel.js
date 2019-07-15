var mongoose = require('./model')

// 创建骨架
var articleSchema = new mongoose.Schema({
    title: String,
    content: String
})

// 创建数据模型
var articleModel = mongoose.model('articles', articleSchema)

var editArticle = function(title, callback) {
    articleModel.find({ title: title }, function(err, doc) {
        callback(doc)
    })
}
module.exports = editArticle