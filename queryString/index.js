var queryString = require('querystring')
var qs = 'name=zhangsan&login=true'
var result = queryString.parse(qs, '&', "=")
console.log(typeof result)
var qs2 = { name: '张三', age: 18 }
var str = queryString.stringify(qs2, "&", "=")

var escapeStr = queryString.escape("a=100&name=张三")
console.log(escapeStr)
var unesccapeStr = queryString.unescape(escapeStr)
console.log(unesccapeStr)