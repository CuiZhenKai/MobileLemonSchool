<template>
    <div class="helloLogin">
        <form class="lemon-input-group">
            <div class="lemon-input-row">
                <input type="text" class="lemon-input-clear" v-model="lemonnumber" placeholder="请输入柠檬校园账号">
            </div>
            <div class="lemon-input-row">
                <input type="password" class="lemon-input-clear" v-model="lemonpass" placeholder="请输入柠檬校园密码">
            </div>
            <div class="lemon-button-row">
                <button type="button" class="mui-btn mui-btn-primary muiBtn-qq" @click="login">登录</button>
            </div>
        </form>
        <div class="agreePro" v-if="hideShow">
            登录即为同意《<router-link to="/protocol">服务协议</router-link>》
        </div>
    </div>
</template>


<script>
import config from '@/config'
export default {
    name:'loginInput',
    data(){
        return {
            docmHeight:document.documentElement.clientHeight, //默认屏幕高度
            showHeight:document.documentElement.clientHeight, //实时屏幕的高度
            hideShow:true,
            lemonnumber:'',
            lemonpass:''
        }
    },
    created(){
        this.getLocalStorage();
    },
    mounted(){
        // window.Onresize 监听页面的变化
        window.onresize = ()=>{
            return (()=>{
                this.showHeight = document.body.clientHeight;
            })();
        }
        this.mui.init({
            swipe:back
        })
    },
    methods:{
        login(){
            // console.log("1");
            // alert("1");
            // this.mui.alert('欢迎使用Hello MUI', 'Hello MUI');
            if(!this.lemonnumber){
               this.mui.toast('请输入用户名');
                return;
            }
            if(!this.lemonpass){
                this.mui.toast('请输入密码');
                return;
            }
            let data = {
                username:this.lemonnumber,
                userpass:this.lemonpass
            }
            this.$http.post(`${config.host}/shops/Home/Login/index`,data)
                .then(result=>{
                    let code = result.body.status;
                    let message = result.body.message;
                    let userid = result.body.userid;
                    switch (code) {
                        case 1:
                            this.mui.toast(`${result.body.message},正在跳转到首页面`);
                            localStorage.setItem('registerName',this.lemonnumber);
                            localStorage.setItem('userid',userid);
                            this.$router.push('/')
                            break;
                        case 0:
                            this.mui.toast(result.body.message);
                    }
                },(error)=>{
                    console.log(error);
                })

        },
        getLocalStorage(){
            let username = localStorage.getItem('registerName');
            this.lemonnumber = username;
        }
    },
    watch:{
        showHeight:function() {
            if(this.docmHeight > this.showHeight){
                this.hideShow=false
            }else{
                this.hideShow=true
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
