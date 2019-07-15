var route = require('./router')
var getArticleDetail = require('../model/articleDetail')
route.get('/article/detail/:id', function(req, res) {
    getArticleDetail({ _id: req.params.id }, function(data) {
        console.log(data)
        res.render('article/detail', { articleDetail: data })
    })
})

module.exports = route