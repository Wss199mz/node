var articleSchemaModel = require('./mongoose')

var addArticle = function(data, callback) {
    articleSchemaModel.create(data, function(err) {
        callback(err)
    })
}

module.exports = addArticle