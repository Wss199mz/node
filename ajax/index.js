function ajax(url) {
    // 1.创建ajax请求对象
    var XMLHttpRequest = null
    if (window.XMLHttpRequest) {
        console.log(window.XMLHttpRequest)
        XMLHttpRequest = new XMLHttpRequest()
    } else if (window.ActiveXObject) // ie5 ie6
    {
        XMLHttpRequest = new ActiveXObject('Microsoft.XMLHTTP')
    } else {
        alert('您的浏览器版本太低，不支持xlhttprequest')
    }

    // 2. 打开操作
    XMLHttpRequest.open('get', url, true) // true 异步  false 同步

    // 3.绑定监听
    XMLHttpRequest.onreadystatechange = function() {}

    // 4.发送请求
    XMLHttpRequest.send(true)
}
ajax()