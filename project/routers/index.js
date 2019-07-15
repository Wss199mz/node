var route = require('./router')

route.get('/', function(req, res) {
    res.render('index', { title: '欢迎来到首页' })
})

module.exports = route