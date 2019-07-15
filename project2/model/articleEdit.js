var articleSchemaModel = require('./mongoose')

var articleEdit = function(condition, data, callback) {
    articleSchemaModel.update(condition, data, function(err) {
        callback(err)
    })
}

module.exports = articleEdit