var events = require('events')
var emitter = events.EventEmitter
var eventsEmitter = new emitter()
eventsEmitter.on('event', function(obj) {
    console.log('姓名：' + obj.username + '; 性别：' + obj.sex + '; 职业：' + obj.work)
})
eventsEmitter.on('event', function(obj) {
    console.log('1姓名：' + obj.username + '; 1性别：' + obj.sex + ';1 职业：' + obj.work)
})
var obj = {
    username: '仓进空',
    sex: '女',
    work: 'star'
}
setTimeout(function() {
    eventsEmitter.emit('event', obj)
}, 1000)