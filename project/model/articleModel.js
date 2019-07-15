// 引入moogonse
var mongoose = require('./model')
    // 创建骨架
var articleSchema = new mongoose.Schema({
    title: String,
    content: String
})

// 创建数据模型
var articleModel = mongoose.model('article', articleSchema)

var data = { title: "时间简史", content: "这是一本有教育意义的书籍。" }
articleModel.create(data, function(err) {
    if (err)
        throw err
    console.log('数据插入成功！')
})

var getArticleList = function(callback) {
    articleModel.find({}, function(err, doc) {
        callback(doc)
    })
}

module.exports = getArticleList