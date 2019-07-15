var events = require('events') // 引入events模块
var emitter = new events.EventEmitter();
emitter.on('data', function() { // 监听
    console.log('data方法被触发！')
})
emitter.emit('data') // 触发