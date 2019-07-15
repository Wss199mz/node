var articleSchemaModel = require('./mongoose')

var getArticleList = function(data, callback) {

    articleSchemaModel.find(data, function(err, doc) {
        if (err)
            console.log('数据查找失败')
        callback(doc)
    })
}

module.exports = getArticleList