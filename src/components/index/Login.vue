<template>
    <div class="full_bg">
        <div class="login_box clear_fix">
            <div class="login_l_img"><img src="../../assets/images/login-img.png"></div>
            <div class="login">
                <div class="login_logo"><a href="javascript:;"><img src="../../assets/images/login_logo.png"></a></div>
                <div class="login_name">
                    <p>有个系统</p>
                </div>
                <form>
                    <input name="username" type="text" value="用户名" placeholder="用户名" v-model="data.user">
                    <input name="password" type="password" id="password" placeholder="密码" v-model="data.password">
                    <input value="登录" style="width:100%;" type="button" @click="login">
                </form>
            </div>
            <div class="copyright">CopyRight 三分文化</div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "login",
        data : function(){
            return {
                data : {
                    user : '',
                    password : ''
                }
            }
        },
        methods : {
            login : function(){
                let _this = this;
                this.$http.post('/users',this.data).then(function(response){
                    if (response.data){
                        sessionStorage.setItem('auth',response.data);
                        _this.$router.push('/index/index');
                    }

                }).catch(function(error){
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .full_bg{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: #93defe;
    }
    a {
        color: #27A9E3;
        text-decoration: none;
        cursor: pointer;
    }

    img {
        border: none;
    }

    .login_box {
        width: 1100px;
        margin: 120px auto 0;
    }
    form{
        box-sizing: border-box;
    }
    .login_box .login_l_img {
        float: left;
        width: 432px;
        height: 440px;
        margin-left: 50px;
    }

    .login_box .login_l_img img {
        width: 500px;
        height: 440px;
    }

    .login {
        height: 360px;
        width: 400px;
        padding: 50px;
        background-color: #ffffff;
        border-radius: 6px;
        box-sizing: border-box;
        float: right;
        margin-right: 50px;
        position: relative;
        margin-top: 50px;
    }

    .login_logo {
        width: 120px;
        height: 120px;
        border: 5px solid #93defe;
        border-radius: 100px;
        background: #fff;
        text-align: center;
        line-height: 110px;
        position: absolute;
        top: -60px;
        right: 140px;
    }

    .login_name {
        width: 100%;
        float: left;
        text-align: center;
        margin-top: 20px;
    }

    .login_name p {
        width: 100%;
        text-align: center;
        font-size: 18px;
        color: #444;
        padding: 10px 0 20px;
    }

    .login_logo img {
        width: 60px;
        height: 60px;
        display: inline-block;
        vertical-align: middle;
    }

    input[type=text], input[type=file], input[type=password], input[type=email], select {
        box-sizing: border-box;
        border: 1px solid #DCDEE0;
        vertical-align: middle;
        border-radius: 3px;
        height: 50px;
        padding: 0px 16px;
        font-size: 14px;
        color: #555555;
        outline: none;
        width: 100%;
        margin-bottom: 15px;
        line-height: 50px;
        color: #888;
    }

    input[type=text]:focus, input[type=file]:focus, input[type=password]:focus, input[type=email]:focus, select:focus {
        border: 1px solid #27A9E3;
    }

    input[type=button], input[type=button] {
        display: inline-block;
        vertical-align: middle;
        padding: 12px 24px;
        margin: 0px;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        color: #ffffff;
        background-color: #27A9E3;
        border-radius: 3px;
        border: none;
        -webkit-appearance: none;
        outline: none;
        width: 100%;
    }

    .copyright {
        font-size: 14px;
        color: #fff;
        display: block;
        width: 100%;
        float: left;
        text-align: center;
        margin-top: 60px;
    }

    #password_text {
        border: 1px solid #DCDEE0;
        vertical-align: middle;
        border-radius: 3px;
        height: 50px;
        padding: 0px 16px;
        font-size: 14px;
        color: #888;
        outline: none;
        width: 100%;
        margin-bottom: 15px;
        display: block;
        line-height: 50px;
    }
</style>