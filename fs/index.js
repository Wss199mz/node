// 读取流
var fs = require( 'fs' )
var datas = ''
    // 创建一个可读流
var readerStream = fs.createReadStream('test.txt') // 二进制流
    // 设置编码
readerStream.setEncoding('UTF8')
    // 处理流事件
readerStream.on('data', function(str) { // 正在读取
    datas += str
    console.log(new Date())  
})
readerStream.on('end', function() { // 读取结束
    console.log(datas)
    console.log(new Date())
})

// 写入流
var fs = require('fs')
var data = '北风网www.ibeifeng.com'
    // 创建一个可以写入的文件流
var wirteStream = fs.createWriteStream('input.txt')
wirteStream.write(data, 'UTF8')
wirteStream.end()

wirteStream.on('finish', function() {
    console.log('写入完成')
})

// 管道流
var fs = require('fs')
    // 创建一个可读的流
var readerStream = fs.createReadStream('output.txt')
    // 创建一个写入的流
var writeStream = fs.createWriteStream('input.txt')

readerStream.pipe( writeStream )


// 链式流 创建压缩文件
var fs = require('fs')
var zlib = require('zlib')

// // 压缩文件 input.txt文件
var status = fs.createReadStream('input.txt') // 先读取文件流
    .pipe(zlib.createGzip()) // 通过管道流 转化gzip压缩文件
    .pipe(fs.createWriteStream('input.txt.gz')) // 通过管道 创建写入的文件流
if (status) {
    console.log('压缩完成')
}


// 创建文件夹
var fs = require('fs')
fs.mkdir('files', function(err) {
    if (err)
        throw err
    console.log('文件夹创建成功！')
})

fs.exists('files', function(isExists) {
    console.log(isExists) // 文件夹存在返回true 否则返回false
    if (!isExists) {
        fs.mkdir('files', function(err) {
            if (err)
                throw err
            console.log('文件夹创建成功！')
        })
    } else {
        console.log('文件夹已存在')
    }
})

// 异步操作
//引入fs模块
var fs = require('fs')
if (!fs.existsSync('files')) { // 如果文件夹不存在则创建文件夹
    var status = fs.mkdirSync('files')
    console.log('文件夹创建成功！')
}

fs.writeFileSync('./files/1.txt', '大数据课程') // 异步创建文件 （覆盖原来文件）

fs.appendFile('./files/1.txt', '区块链课程', function(error) {
    if (error)
        throw error
    console.log('写入成功！')
})

// 创建一个文件夹，用最简单的方法创建多个文件
var fs = require('fs')

function pruductFile(number) {
    fs.mkdir('ibeifeng', function(error) {
        for (var i = 0; i < number; i++) {
            fs.writeFile('./ibeifeng/' + i + '.txt', '北风网www.ibeifeng.com----' + i)
        }
    })
}
pruductFile(10)


var fs = require('fs')
fs.readFile('./ibeifeng/1.txt', function(error, data) {
    // 以流的方式读取
    if (error)
        throw error
    console.log(data.toString())
})

// 一次读取多个文件
'use strict'
var fs = require('fs')
for (let i = 0; i < 10; i++) {
    fs.readFile('./ibeifeng/' + i + '.txt', function(error, data) {
        if (error)
            throw error
        data.toString()
        fs.writeFile('./files/' + i + '.txt', data.toString(), function(error) {
            console.log(i)
            if (error)
                throw error
            console.log(i + '.txt写入成功！')
        })
    })
}

// 将读取的是个文件内容分别写入另外的一个文件夹内的十个文件中

// 将十个文件内容整合到一个文件
var fs = require('fs')
var dataList = ''
for (var i = 0; i < 10; i++) {
    fs.readFile('./ibeifeng/' + i + '.txt', function(error, data) {
        if (error)
            throw error
        data.toString()
        dataList += data.toString()
    })
}

// 上传文件 、图片、表格、视频。。。。
// 压缩文件 转化成二进制流 。。。。    文件操作    js     图片  

