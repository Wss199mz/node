var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://127.0.0.1:27017'
MongoClient.connect(url, function(err, db) {
    if (err)
        throw err
    console.log('数据库已经连接')
        // 创建数据库
    var database = db.db('users')
        // 创建表
        // database.createCollection('ibf_user', function(err, res) { // 创建集合
        //     if (err)
        //         throw err
        //     console.log('创建集合成功！')
        //     console.log(res)
        // })

    // 插入数据
    // var arrData = [{ username: '张三', age: 70, sex: "男" }, { username: '李四', age: 20, sex: "男" }, { username: '王五', age: 30, sex: "男" }]
    // database.collection('www').insertMany(arrData, function(err, res) {
    //     if (err)
    //         throw err
    //     console.log('数据插入成功！')
    //     console.log(res)
    // })

    // 查询数据
    // database.collection('www').find({}).toArray(function(err, res) {
    //     if (err)
    //         throw err
    //     console.log(res)
    // })

    // 更新数据
    // database.collection('www').updateOne({ username: '张三' }, { $set: { username: '张张' } },
    //     function(err, res) {
    //         if (err)
    //             throw err
    //         console.log(res)
    //     }
    // )

    // 删除数据
    database.collection('www').deleteOne({ username: "张张" }, function(err, res) {
        if (err)
            throw err
        console.log('数据删除成功！')
    })
})