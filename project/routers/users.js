var router = require('./router')

router.get('/user', function(req, res) {
    res.send('respond width a resource')
})

module.exports = router