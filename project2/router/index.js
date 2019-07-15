var router = require('./router')
    // 引入model层
var getArticleList = require('../model/articleModel')
router.get('/', function(req, res) {
    // 获取article数据库的数据
    getArticleList({}, function(data) {
        res.render('index', { article: data })
    })
})

var articleDelete = require('../model/articleDelete')
router.post('/api/article/delete', function(req, res) {
    var data = {
        _id: req.body._id
    }
    console.log(data)
    articleDelete(data, function(err) {
        res.status(200).json({ status: true, message: '删除成功！' })
    })
})
module.exports = router