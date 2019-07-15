var router = require('./router')
var editArticle = require('../model/editModel')
router.get('/add', function(req, res) {
    res.send("这是一个文章页面")
})

router.get('/edit/:id', function(req, res) {
    let articleId = req.params.id
    editArticle(articleId, function(data) {
        let content = data[0].content
        res.send(content)
    })
})

module.exports = router