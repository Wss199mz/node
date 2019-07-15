var articleSchemaModel = require('./mongoose')

var articleDelete = function(data, callback) {
    articleSchemaModel.remove(data, function(err) {
        callback(err)
    })
}

module.exports = articleDelete