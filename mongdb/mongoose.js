// 引入mongoose
var MongoClient = require('mongoose')
var url = 'mongodb://127.0.0.1/27017'
MongoClient.connect(url, function(err) {
    if (err)
        throw err
    console.log('数据库连接成功！')
})

// 创建模型骨架
var userSchema = new MongoClient.Schema({
        username: String,
        password: String,
        age: Number,
        registerTime: Date
    })
    // 创建数据模型
var userModel = MongoClient.model('user', userSchema)
console.log(userModel)
if (userModel) {
    console.log('数据模型创建成功！')
}

// 插入数据
// var myUser = { username: "赵六", password: '123456', age: 30, registerTime: new Date() }
// userModel.create(myUser, function(err) {
//     if (err)
//         throw err
//     console.log('添加数据成功！')
// })

// 查找数据
userModel.find(function(err, result) {
    if (err)
        throw err
    console.log(result)
})

// 更新数据
var condition = { username: '张三' }
var data = { $set: { username: '小张' } }
userModel.update(condition, data, function(err) {
    if (err)
        throw err
    console.log('数据更新成功！')

})

// 删除数据
var condition = { username: '赵六' } // {} 删除所有数据 
userModel.remove(condition, function(err) {
    if (err)
        throw err
    console.log('数据删除成功！')
})