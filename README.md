# node
node各个模块demo，包含mysql、mongdb数据库操作等

一、安装nodejs
    下载地址：http://nodejs.cn/download/
二、安装git
    下载地址：https://git-scm.com/download/win    


git clone -》克隆  下拉代码  git clone + 仓库地址  (master:主分支 切换到开发分支)

git status  -> 查看本地文件修改记录 修改了哪些文件

git diff -> 查看具修改了的内容 查看具体修改了哪些内容

git add . ->新建本地仓库 由本地仓库发布到远程仓库

git commit -m "新增。。"  -》 提交代码 增加修改记录

git push -》推送到远程仓库

git pull -》 更新远程仓库的代码

git branch -》查看分支
-> 分支
    主分支： master （一个已经上线了的项目）
    开发分支: dev_201807..... 
    上线前的分支：dev_release_20181821...
    -》查看当前分支
    git branch
    git checkout dev_...... 本地开发分支
    git checkout origin/dev.... 远程分支


配置ssh :
    查看 git用户信息:
    git config user.name // 查看用户名
    git config user.email // 查看用户邮箱
    git config --global user.name "zhangsan" // 设置用户名
    git config --global user.email "a...com" // 设置邮箱
    生成sshkey
    ssh-keygen -t rsa -C "wangshanshan@mgzf.com"



bower -> 包管理
        安装： npm insall bower -g 
        安装淘宝镜像：
        npm install -g cnpm --registry=https://registry.npm.taobao.org
        -> static: jquery,bootstrap,swiper,vue, react.....(js库)
npm -> 包管理
        npm install -g bower 
        初始化：
        npm init -》package.json文件
        cnpm install jquery bootstrap swiper --save 下载开发所需要的依赖  --save（记录开发以来的版本号）
        创建package.json文件

 -> REPL
        打开交互式解释器： node
        交互式解释器
            读取 打印 循环

  -> 使用变量 将数据存储在变量中 
  -> console.log()  调试

  -> 多行表达式
   do while    for    while

 -> 下划线
   _ 获取上一个表达式的结果

   REPL命令
       ctrl + c 
       -> 两次 -》


   http模块 (服务)：
        服务器  apache  tomcat  nginx

   使用：
       1. 引入http模块  =》  require('http')   
       2. 通过http模块创建http服务 =》http.createServer
                http.listen() =》监听端口
                response: 响应
                request: 请求
                response.writeHead('状态', content-type)
       3. 发送请求与响应请求
          Content-Type: text/html  以html形式返回 
                        text/plain 以原样形式返回
                        text/json  以json形式返回
                        text/xml   以xml形式返回

events模块
        nodejs 异步操作 -》事件队列  a b c。。。

js单线程 

   event模块提供了一个对象：event.EventEmitter
   events.eventEmitter
   on 监听  支持多个监听
   emit 触发

   EventEmitter.addListener  为指定事件添加一个监听器到监听器数组的尾部

   Buffer -> 缓冲区
            buffer类 -》 存放二进制stream模块 fs模块
-》 可读性
-》 可写性
-》 可读可写
-》 先写再读
特点：
    -》阻塞型
    -》非阻塞型
1. 使用：
    require('fs')
            
// 读取
fs.createReadStream 创建一个读取文件流 fs.createReadStream 创建一个读取文件流
fs.readerStream.setEncoding('UTF8')  设置编码格式
fs.readerStream.on  -> data  // 正在读取
                 -> end  // 读取完成
// 写入
fs.createWriteStream 写入文件流
fs.wirteStream.write(data, 'UTF8')  // 正在写入
fs.wirteStream.end()   // 写入完成
            
fs.writeFile(文件名称, 写入内容, 回调函数) // 写入文件内容
fs.mkdir(文件夹名称, 回调) // 创建文件夹
fs.exists(文件夹名称,回调) // 判断是否有文件夹
fs.appendFile('文件',文件内容,回调)

管道流： 从一个文件读取，将一个文件的内容写入到另外一个文件


path: 路径模块
    path.normalize() // 标准化路径
    path.join() // 路径整合
    path.dirname() // 获取路径
    path.basename() // 获取文件名
                
常量： 
    1. __dirname  // 获取当前文件所在目录
    2. __filename  // 获取当前文件的目录和文件名

process模块： 
    process.version // node版本号
    process.pid // 进程号
    process.title // 进程的标题   

queryString模块: 对http请求数据进行处理
    queryString.parse   // 将字符串参数转化为对象
    queryString.stringfy  //将对象抓暖胃字符串
    queryString.escape
    queryString.unescape

url模块：
url.parse =>
   url.port // 获取端口号
   url.protocol // 获取协议
   url.hostname // 主机名称
   url.hash // hash参数
   url.search // 获取serach参数
   url.query
   url.pathname
   

express模版：
   nodejs web应用框架 route http请求等等
       1.可以用中间件来处理http请求
       2.可以使用router 
       3.可以利用模版来传参到页面

   使用：
       1.npm install express   引入express
           // 创建服务
           express().get('/index.html')
           http.createServer
           // ajax 前后端通信 get post put delete
           // 处理静态资源
           app.use(express.static(静态文件的位置))
           app.get() get请求 请求与响应

           路由：可以提取到请求的url  获取get参数 post参数
           app.get() // 查询数据
           app.post() // 提交数据
           app.put() // 修改数据
           app.delete() // 删除数据



body-parser 中间件   接收到客户端请求时，都会给req添加属性
           使用： npm install body-parser --save
           -》解析数据 json string 
           bodyParser.json() 
           bodyParser.urlencoded({extended: true/false}) false:处理字符串 或者 数组                                               true:处理所有类型的数据
cookie-parser 本地会话存储 -》 设置过期时间  由服务端发送给客户端
           http -> 无状态协议 客户端与服务端在数据传输完成之后就会中断连接
                             需要客户端主动发送请求
                             cookie -> 保持会话连接的机制

           cookie-parser : 设置、获取、删除cookie

           res.cookies() // 设置cookie
           req.cookie() // 获取cookie



模版引擎 -》 jade  -> 静态页面 -> 定义和使用变量 -> 最终会渲染成html

-> 服务端 ->res   模板引擎 -> 加载数据

// 使用模板引擎
npm install jade 
express() .set('view engine', 'jade')
          set('views', 'www') // 路径
jade -> html + 数据

res.render() 渲染响应的数据 将jade页面和数据整合

#{}  // 加载变量
定义变量  

mysql 是当今最流行的关系型数据库  -》 数据库：按数据结构来组织、存储和管理数据的仓库
   特点一：以表格的形式出现
   购买时间 商品名称 价格 商品id 。。。 存储在表格里面
   特点二：数据库是由若干张表组成的 表格之间建立联系 ->关系型数据库
   php java

   安装数据库：https://dev.mysql.com/downloads/mysql/
             windows 
               同意协议
               安装类型： server only
               执行mysql的下载

   navcat -> 数据库的可视化工具
   wampServer -> apache服务   资源： www目录下  -》 服务 集成了mysql服务

   创建数据库和表    表是存储在数据库内的。
   表里面存储的是字段，那么字段分为以下几种类型：
       数字类型
           int ->  (大整数值 )
           -> TINYINT (0, 255) 存储小整数值
           -> SMALLINT (0, 65535) 存储大的整数值
       字符串类型
           char  大小 0-255字节  用途类型：定长字符串
           varchar  大小 0-60000+字节  用途类型：变长字符串
       日期时间类型
           date -> 大小 3  日期值：YYYY-MM-DD
           time -> HH:MM:SS 时间
           datetime -> 日期和时间 YYYY-MM-DD HH:MM:SS
           timeStamp -> 时间戳 YYYY-MM-DD HH:MM:SS 

   use mysql  ->  使用数据库
   create DATABASE + 名称  ->  创建数据库
   create DATABASE IF NOT EXISTS + 名称
   show DATABASES -> 查看数据库
   drop database + 名称 -> 删除数据库
   use + 数据库名称 -> 使用数据库

   show tables; -> 查看表格
   create table if not exists user (
       'id' INT NOT NULL AUTO_INCREMENT,
       'username' varchar(20) NOT NULL,
       'age' INT NOT NULL,
       PRIMARY KEY (id)
   )
   主键：id
   id username age   id是不能重复的，并且不能为null

   插入数据：
       insert into 表格名称 (id,name) values ('1','王五')
   查看数据：
       select * from + 表名
       select + 字段名 + from + 表名

       条件查询：
       SELECT id,username from userdata WHERE username = '王五';
   
   更新数据：
       update + 表名 + set username = '范冰冰' where id = 3;
   删除数据：
       delete from + 表名 + where 。。。
   模糊查询：
   select * from + 表名 where ... like '%手机'

   union 操作符 用于连接两个以上的select语句的结果

   order by 排序 DESC倒叙 ESC正序
   group by 分组 根据一个或者多个列对结果进行分组  

   mysql的连接使用：
       在一张表里面进行操作，关系型数据库，表与表之间是关联的
   mysql多张表之间的连接：
       inner join : 内连接 a表 b表 获取两张表中字段相匹配的记录
       left join : 左连接
       right join : 右连接
   
   mysql事务：
       处理操作量大 复杂度高的数据 
       可以维护数据库的完整性，保证sql语句 全部执行或者全部不执行
       事务管理：insert，update，delete等语句 可能不止一条sql语句 如果其中的一条
               sql语句没有执行成功，那么其他的sql语句也不会执行成功。
       特性：
           原子性：一个事务中的操作，要么全成功，要么全部不成功。
           一致性：保证数据库的完整性
           持久性：事务处理成功后，对数据的修改是永久的
       语句：
           BEGIN  -> 开启一个事务
           COMMIT -> 提交一个事务
           ROOLLBACK -> 回滚，撤销正在进行的未提交的修改

       删除一个用户 -》 用户信息存储在几张表内 其中一张表的数据删除失败，就执行回滚操作，只能当所有的表的数据都删除，才执行最后的删除。

   alert命令 修改数据库表名或者字段
       alert table + 表名 + drop/add + 字段名
       ALTER TABLE ibf_student RENAME TO bfw_student; -> 修改表的名称  

   mysql的索引：
       索引可以提高mysql的检索速度
       索引是应用在sql与剧中的where语句中的。            
       select ... from ibf_student where id = 10
       ibf_student 数据量很大，查询速度会非常慢
       索引可以提升查询速度，但是降低更新表的速度
       优化查询速率
   
   mysql创建临时表
       保存临时数据，只在当前连接可见，当连接断开，mysql会自动清除这些表
       create temporary table + 表名

# node案例  websocket

websocket模块
   http服务 -》 前端发起请求，后端响应  http请求 -》 无状态的
   websocket 服务 长连接 后端可以主动发送响应给前端

   使用： npm install nodejs-websocket
   1.引入websocket
       require('nodejs-websocket')
       webSocket.createServer()
       ws.on('text') // 监听客户端的发送的数据
       ws.send() // 客户端发送数据到服务端
       ws.sendText() // 服务端发送数据到客户端
       ws.onmessage() // 接受到服务端传来的数据


nodejs连接mysql:
   mysql模块：
   1. cnpm install mysql --save
   2. 引入mysql模块 -》 require('mysql')
   mysql.createConnection()  // 建立连接
       -> host: 'localhost'
       -> user: ''
       -> password: ''
       -> database
   
   mongodb命令：
       查看数据库：show dbs
       创建数据库：use + 数据库名称  (数据库存在则使用这个数据库，否则创建这个数据库)
       插入数据：db.ibf_data.insert({})
       删除数据库：db.dropDatabase()
       查询数据：db + 数据库名称 + find()
       条件查询：db + 数据库名称 + findOne()
       更新语句：db + 数据库名称 + update() 参数：查询条件 更新内容 如果查询条件不存在，默认插入数据 true：查询匹配
                                               全部数据
       移除数据：db + 数据库名称 + reomve() 
       limit : db + 数据库名称 + find() + limit()
       skip: db + 数据库名称 + find() + skip()
       sort:  db + 数据库名称 + find() + sort() 1 / -1
       设置索引：db + 数据库名称 + createIndex 


   mongodb中间件：
   1.安装mongod / mongoose      
       npm install mongodb
       npm install mongoose
   2.引入mongodb / mongoose
   3.连接数据库：
       mongodb.MongoClient() -> connect()
       mongoose.connect()

   创建表：
       1.创建模型骨架 -》 定义key值类型
           mongoose.Schema() -》创建模型骨架
       2.创建数据模型
           mongoose.model()
       3.添加数据
           mongoose.model().create() 
       4.更新数据
           mongoose.model.update('查询条件','更新内容')
       5.删除数据
           mongoose.model.remove('查询条件')


ajax: 异步请求
作用：前后端通信，将后端数据异步渲染到页面上

   1.创建ajax请求对象
   2.打开操作
   3.绑定xmlhttprequest对象监听
   4.发送请求


