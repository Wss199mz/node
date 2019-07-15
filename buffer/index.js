var buf = Buffer.from('runoob', 'utf8') // ascii 7位的数据
console.log(buf.toString('hex'))

// 创建一个长度为10且用0田中的Buffer类
var buf = Buffer.alloc(10, 1)
var str = buf.write("ibeifeng")
console.log(buf.toString('utf8', 0, 4))


var buf = Buffer.from('runoob', 'utf8')
console.log(buf.toString('hex'))