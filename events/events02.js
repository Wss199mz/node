var events = require('events')
var emitter = events.EventEmitter
var eventsEmitter = new emitter()

// 创建监听器
var listener_one = function listener_one() {
    console.log('执行listener_one监听器')
}

var listener_two = function listener_two() {
    console.log('执行listener_two监听器')
}

eventsEmitter.addListener('connect', listener_one)
eventsEmitter.removeListener('connect', listener_one)
eventsEmitter.addListener('connect', listener_two)
eventsEmitter.emit('connect')

// 移除绑定的监听事件
eventsEmitter.removeListener('connect', listener_one)