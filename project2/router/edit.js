var route = require('./router')
var getArticleDetail = require('../model/articleDetail')
var articleEdit = require('../model/articleEdit')
route.get('/article/edit/:id', function(req, res) {
    getArticleDetail({ _id: req.params.id }, function(data) {
        res.render('article/edit', { article: data })
    })
})

route.post('/api/article/edit', function(req, res) {
    var article = req.body
    console.log(article)
    var condition = { _id: article._id }
    var setData = { $set: article }
    articleEdit(condition, setData, function(err) {
        if (err)
            res.status(200).json({ status: false, message: '更新失败' })
        else
            res.status(200).json({ status: true, message: '更新成功！' })
    })
})

module.exports = route