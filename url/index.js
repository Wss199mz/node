var url = require('url')
var str = 'http://127.0.0.1:3000/index.html?name=zhangsan&login=true'
var urlObj = url.parse(str)
console.log(urlObj)
console.log(urlObj.port) // 获取端口号
console.log(urlObj.protocol) // 获取协议
console.log(urlObj.hostname) // 获取主机名称
console.log(urlObj.hash) // 获取hash
console.log(urlObj.search) // 获取search参数
console.log(urlObj.query) // 获取query参数
console.log(urlObj.pathname) // 获取文件的名称