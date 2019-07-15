function doLogin() {
    console.log($('#username').val())
    console.log($('#password').val())
    if ($('#username').val() == '' || $('#password').val() == '') {
        alert('用户名和密码不能为空！')
        return false
    }
    login($('#username').val(), $('#password').val())
    return false
}

function login(username, password) {
    $.ajax({
        url: '/api/user/login',
        type: 'post',
        dataType: 'json',
        cache: false,
        data: {
            username: username,
            password: password
        },
        success: function(data) {
            if (!data.loginStaus) {
                alert(data.message)
            } else {
                alert('恭喜您！登录成功！')
            }
        },
        error: function() {
            console.log('系统发生错误！')
        }
    })
}