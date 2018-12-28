<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-arrowthinleft mui-pull-left back" @click="back"></span>
            <h1 class="mui-title content">柠檬登录-注册</h1>
        </header>
        <div class="tab fix">
            <span class="login" :class="{'showlogin':showLogin}" @click="showLoginInput">
                柠檬登录
                <p>--</p>
            </span>
            <span class="register" :class="{'showlogin':!showLogin}" @click="showRegisterInput">
                柠檬注册
                <p>--</p>
            </span>
        </div>
        <!-- <router-view /> -->
        <login-input v-if="showLogin"></login-input>
        <register-input v-if="showRegister"></register-input>
    </div>
</template>

<script>
import loginInput from '@/components/SubComponents/loginInput.vue';
import registerInput from '@/components/SubComponents/registerInput.vue';
export default {
    name:'lemonLAndR',
    data(){
        return {
            showLogin:true,
            showRegister:false
        }
    },
    created(){
        this.$store.state.showTabBar = false;
    },
    mounted(){
        this.getRem(750,100);
    },
    methods:{
        back(){
            // console.log("1");
            window.history.go(-1);
        },
        showLoginInput(){
            // console.log("登录")
            this.showLogin = true;
            this.showRegister = false;
        },
        showRegisterInput(){
            // console.log("注册");
            this.showRegister = true;
            this.showLogin  = false;
        }
    },
    components:{
        loginInput,
        registerInput
    }
}
</script>


<style lang="less" scoped>
.hello{
    .mui-bar-nav{
      background: #fff;
      .back{
          color:orange;
      }
      .content {
        font-size: 0.3rem;
        color: orange;
        font-weight: bold;
      }
    }
    .fix{
        zoom: 1;
      }
      .fix::after{
        display: block;
        content: 'clear';
        height: 0;
        clear: both;
        overflow: hidden;
        visibility: hidden;
      }
    .tab{
        margin-top:2rem;
        width:100%;
        height: auto;
        color:black;
        font-size: .3rem;
        .login{
            float: left;
            text-align: center;
            margin-left: 1rem;
            letter-spacing: .05rem;
            p{
                margin-top:-0.2rem;
                font-weight: bold;
            }
        }
        .showlogin{
            color:orange;
            p{
                color:orange;
            }
        }
        .register{
            float: right;
            text-align: center;
            margin-right: 1rem;
            letter-spacing: .05rem;
            p{
                margin-top:-0.2rem;
                font-weight: bold;
            }
        }
    }
}
</style>
