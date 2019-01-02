<template>
    <div class="hello">
        <div class="logo">
            <div class="logoImage">
                <img src="../../assets/lemon.svg" alt="" />
            </div>
            <p>让校园变得更快捷</p>
        </div>
        <div class="loginButton">
            <router-link to="/login/lemonLAndR"><button type="button" class="mui-btn mui-btn-warning mui-btn-outlined muiBtn-lemon">
                柠檬账密登录/注册
            </button></router-link>
            <button type="button" class="mui-btn mui-btn-warning mui-btn-outlined muiBtn-qq">
                QQ登录
            </button>
        </div>
        <div class="otherLogin">
            <p>-- 其他登录方式 --</p>
            <div class="weAndWei">
                <span class="mui-icon mui-icon-weixin"></span>
                <span class="mui-icon mui-icon-weibo"></span>
            </div>
        </div>
        <div class="anyway" @click="anyway">
            随便看看 >
        </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  created () {
    this.$store.state.showTabBar = false
  },
  mounted () {
    this.getRem(750, 100)
  },
  methods: {
    anyway () {
      // console.log("1");
      window.location.href = '#/'
    }
  }
}
</script>

<style lang="less" scoped>
    .hello{
        .mui-bar-nav{
            background: #fff;
            position: fixed;
            top:0;
            .content {
                font-size: 0.3rem;
                color: orange;
                font-weight: bold;
            }
        }
        .logo{
            width:100%;
            height: auto;
            margin:1.5rem auto;
            text-align:center;
            .logoImage{
                width:2rem;
                height: 2rem;
                margin:0 auto;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            p{
                font-size: 0.3rem;
                color: #eaca44;
                font-weight: bold;
                letter-spacing: .01rem;
            }
        }
        .loginButton{
            widows: 100%;
            height: auto;
            text-align: center;
            margin-top:2.5rem;
            .muiBtn-lemon{
                width:6rem;
                background:#eaca44;
                color:white;
                margin-bottom: .2rem;
                border:none;
                height: .9rem;
            }
            .muiBtn-qq{
                width:6rem;
                background:white;
                color:#eaca44;
                border-color: #eaca44;
                height: .9rem;
            }
        }
        .otherLogin{
            width:100%;
            height: auto;
            text-align: center;
            padding: .3rem .1rem .1rem .3rem;
            p{
                font-size: .2rem;
            }
            .mui-icon-weixin{
                color:#eaca44;
                background:white;
                border:1px solid #ccc;
                border-radius: 50%;
                width:.8rem;
                height: .8rem;
                padding: .1rem;
                margin-right:.5rem;
            }
            .mui-icon-weibo{
                color:#eaca44;
                background:white;
                border:1px solid #ccc;
                border-radius: 50%;
                width:.8rem;
                height: .8rem;
                padding: .1rem;
                margin-left:.5rem;
            }
        }
        .anyway{
            color:#eaca44;
            font-size: 0.3rem;
            font-weight: bold;
            width:100%;
            height: auto;
            position:absolute;
            bottom: .1rem;
            text-align: center;
        }
    }
</style>
