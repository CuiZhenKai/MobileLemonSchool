<template>
    <div class="helloLogin">
        <form class="lemon-input-group">
            <div class="lemon-input-row">
                <input type="text" class="lemon-input-clear" v-model="lemonnumber" placeholder="请输入柠檬校园账号">
            </div>
            <div class="lemon-input-row">
                <input type="password" class="lemon-input-clear" v-model="lemonpass" placeholder="请输入柠檬校园密码">
            </div>
            <div class="lemon-input-row">
                <input type="password" class="lemon-input-clear" v-model="repeatlemonpass" placeholder="确认密码">
            </div>
            <div class="lemon-input-row">
                <input type="text" class="lemon-input-clear" v-model="phoneNumber" placeholder="请输入电话号码">
            </div>
            <div class="lemon-input-row">
                <input type="email" class="lemon-input-clear" v-model="email" placeholder="请输入邮箱(选填)">
            </div>
            <div class="lemon-button-row">
                <button type="button" class="mui-btn mui-btn-primary muiBtn-qq" @click="login">注册</button>
            </div>
        </form>
        <div class="agreePro" v-if="hideShow">
            注册即为同意《<router-link to="/protocol">服务协议</router-link>》
        </div>
    </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'loginInput',
  data () {
    return {
      docmHeight: document.documentElement.clientHeight, // 默认屏幕高度
      showHeight: document.documentElement.clientHeight, // 实时屏幕的高度
      hideShow: true,
      lemonnumber: '',
      lemonpass: '',
      repeatlemonpass: '',
      email: '',
      phoneNumber: ''
    }
  },
  mounted () {
    // window.Onresize 监听页面的变化
    window.onresize = () => {
      return (() => {
        this.showHeight = document.body.clientHeight
      })()
    }
    this.mui.init({
      swipe: back
    })
  },
  methods: {
    login () {
      if (!this.lemonnumber) {
        this.mui.toast('请输入用户名')
        return
      }
      if(this.lemonnumber.length>=5){
        this.mui.toast('用户名的长度不能超过4个')
        return
      }
      if (!this.lemonpass) {
        this.mui.toast('请输入密码')
        return
      }
      if (this.lemonpass != this.repeatlemonpass) {
        this.mui.toast('两次的密码不一致')
        return
      }
      if (!this.phoneNumber) {
        this.mui.toast('手机号为必填项')
        return
      } else {
        let regPhone = /^1(3|4|5|7|8)\d{9}$/
        let isRightPhone = regPhone.test(this.phoneNumber)
        if (!isRightPhone) {
          this.mui.toast('手机号码格式不正确')
          return
        }
      }
      if (this.email) {
        let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
        let isRight = reg.test(this.email)
        if (!isRight) {
          this.mui.toast('邮箱格式不正确')
          return
        }
      }
      let data = {
        username: this.lemonnumber,
        userpass: this.lemonpass,
        phonenum: this.phoneNumber,
        email: this.email
      }
      this.$http.post(`${config.host}/shops/Home/Login/register`, data)
        .then(result => {
          let code = result.body.status
          let message = result.body.message
          switch (code) {
            case 1:
              this.mui.toast(`${result.body.message},点击登录按钮,进行登录`)
              localStorage.setItem('registerName', this.lemonnumber)
              break
            case 0:
              this.mui.toast(result.body.message)
          }
        }, (error) => {
          this.mui.toast('注册失败,网络服务器未知错误')
        })
    }
  },
  watch: {
    showHeight: function () {
      if (this.docmHeight > this.showHeight) {
        this.hideShow = false
      } else {
        this.hideShow = true
      }
    }
  }
}
</script>

<style lang="less" scoped>
    .helloLogin{
        margin-top:.5rem;
        .lemon-input-group{
            .lemon-input-row{
                text-align: center;
                .lemon-input-clear{
                    border-bottom:.01rem solid #ccc;
                    border-left:none;
                    border-top:none;
                    border-right: none;
                    width:85%;
                    border-radius: 0;
                    font-size: .3rem;
                }
            }
            .lemon-button-row{
                text-align: center;
                margin-top:.4rem;
                .muiBtn-qq{
                    width:6rem;
                    background:orange;
                    color:white;
                    height: .9rem;
                    border:none;
                }
            }
        }
        .agreePro{
            width:100%;
            height: .5rem;
            position:fixed;
            bottom:.3rem;
            text-align: center;
            color:#666;
            font-size: .2rem;
        }
    }
</style>
