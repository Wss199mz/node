var articleSchemaModel = require('./mongoose')

var getArticleDetail = function(data, callback) {
    articleSchemaModel.findOne(data, function(err, doc) {
        if (err)
            throw err
        callback(doc)
    })
}

module.exports = getArticleDetail