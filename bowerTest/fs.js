// var fs = require('fs')
// var data = ''
//     // 创建一个可读流
// var readStream = fs.createReadStream('text.txt') // 读入文件
//     // 设置编码为utf8
// readStream.setEncoding('utf8')
// readStream.on('data', function(chunk) { // 正在读取
//     data += chunk
// })
// readStream.on('end', function() { // 读取结束
//     console.log(data)
// })

var fs = require('fs')
    // fs.writeFile('ibf.txt', '北风网ibeifeng.com', function(err) {
    //     if (err)
    //         throw err
    //     console.log('写入成功！')
    // })

fs.exists('www', function(data) {
    if (!data) {
        fs.mkdir('www', function(err) {
            if (err)
                throw err
            console.log('创建成功！')
        })
    }
})

fs.appendFile('ibf.txt', '课程：区块链', function(err) {
    if (err)
        throw err
    console.log('文件写入成功！')
})