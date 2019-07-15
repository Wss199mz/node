var path = require('path')
    // var myPath = "./static/components/jquery.js"
    // console.log(path.normalize(myPath)) // 转化标准化路径

// 路径整和
// ./www/js/jquery.js
// "./www" + var + "jquery.js"
var pathName = "js"
var joinPath = path.join('www', pathName, 'jquery.js')
console.log(joinPath)

// 获取路径
// var path = require('path')
// var dirname = path.dirname('./static/view/index.html')
// console.log(dirname)

// 获取文件名
// var path = require('path')
// var basename = path.basename('./statc/view/index.html')
// console.log(basename)

// 获取文件的扩展名
// var path = require('path')
// var extname = path.extname('./static/view/index.html')
// console.log(extname)

// console.log(__dirname) // 获取当前文件所在目录
// console.log(__filename) // 获取当前文件的名称