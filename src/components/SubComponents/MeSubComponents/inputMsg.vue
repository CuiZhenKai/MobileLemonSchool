<template>
    <div class="helloLogin">
        <form class="lemon-input-group">
            <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-right" src="@/assets/lemon.svg">
						<div class="mui-media-body">
							&nbsp;
							<p class='mui-ellipsis'>{{userData.username}}</p>
						</div>
					</a>
				</li>
            </ul>
            <div class="lemon-input-row">
                <p class="titleLable">个性签名</p>
                <input type="text" class="lemon-input-clear" v-model="Mysignname" :placeholder="userData.signname">
            </div>
            <div class="lemon-input-row">
                <p class="titleLable">手机号码</p>
                <input type="text" class="lemon-input-clear" v-model="Mynumber"  :placeholder="userData.phonenum">
            </div>
            <div class="lemon-input-row">
                <p class="titleLable">输入邮箱</p>
                <input type="email" class="lemon-input-clear" v-model="Myemail" :placeholder="userData.email">
            </div>
            <div class="lemon-button-row">
                <button type="button" class="mui-btn mui-btn-primary muiBtn-qq" @click="change">点击保存</button>
            </div>
        </form>
    </div>
    <!-- 头像 用户名 个性签名 邮箱 手机号 -->
</template>


<script>
import config from '@/config'
export default {
    name:'inputMsg',
    data(){
        return {
            docmHeight:document.documentElement.clientHeight, //默认屏幕高度
            showHeight:document.documentElement.clientHeight, //实时屏幕的高度
            hideShow:true,
            Mysignname:'',
            Mynumber:'',
            Myemail:'',
            userid:'',
            userData:{}
        }
    },
    created(){
        this.getLocalStorage();
        this.getUserMsg();
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
        getUserMsg(){
            this.$http.get(`${config.host}/shops/Home/User/edit?userid=${this.userid}`)
                .then(result=>{
                    // console.log(result);
                    this.userData = result.body;
                })
        },
        getLocalStorage(){
            // console.log("1");
            let id = localStorage.getItem('userid');
            this.userid = id;
        },
        change(){
            if(!this.Mysignname&&!this.Mynumber&&!this.Myemail){
                this.mui.toast('未修改任何数据');
                return;
            }
            if(!this.Mysignname){
                this.Mysignname = this.userData.signname;
            }
            if(!this.Mynumber){
                this.Mynumber = this.userData.phonenum;
            }else{
                let regPhone = /^1(3|4|5|7|8)\d{9}$/;
                let isRightPhone = regPhone.test(this.Mynumber);
                if(!isRightPhone){
                    this.mui.toast('手机号码格式不正确');
                    return;
                }
            }
            if(!this.Myemail){
                this.Myemail = this.userData.email;
            }else{
                let reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
                let isRight = reg.test(this.Myemail);
                // console.log(isRight);
                if(!isRight){
                    this.mui.toast('邮箱格式不正确');
                    return;
                }
            }
            let data = {
                userid:this.userid,
                signname:this.Mysignname,
                phonenum:this.Mynumber,
                email:this.Myemail
            };
            // console.log(data);
            this.$http.post(`${config.host}/shops/Home/User/edit`,data)
                .then(result=>{
                    // console.log(result);
                    if(result.body.status===1){
                        this.mui.toast(result.body.message);
                        this.Mysignname = '';
                        this.Mynumber = '';
                        this.Myemail = '';
                        this.getUserMsg();
                    }else{
                       this.mui.toast(result.body.message); 
                    }
                },(error)=>{
                    console.log(error);
                })
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
        margin-top:.8rem;
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
                .titleLable{
                    color:orange;
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
            .mui-table-view{
                border:none;
                .mui-table-view-cell p {
                    margin-top: -.2rem;
                }
            }
        }
    }
</style>
