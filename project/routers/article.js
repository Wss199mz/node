var route = require('./router')
var articleModel = require('../model/articleModel')
route.get('/article', function(req, res) {
    articleModel(function(data) {
        let title = ''
        let content = ''
        for (let i = 0; i < data.length; i++) {
            title += data[i].title
            content += data[i].content
        }
        res.render('article', { title: title, content: content })
    })
})

module.exports = articleModel