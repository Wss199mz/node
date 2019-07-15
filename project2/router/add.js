var router = require('./router')
var addArticle = require('../model/articleAdd')
router.get('/article/add', function(req, res) {
    console.log(req.body)
    res.render('article/add')
})

router.post('/api/article/add', function(req, res) {
    console.log(req.body)
    var article = req.body
    addArticle(article, function(err) {
        if (err) {
            res.status(200).json({ status: false, message: '添加失败！' })
        } else {
            res.status(200).json({ status: true, message: '添加成功！' })
        }
    })
})

module.exports = router