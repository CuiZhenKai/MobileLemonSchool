<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-arrowthinleft mui-pull-left back" @click="back"></span>
            <h1 class="mui-title content">柠檬校园-发布二货-基本信息</h1>
        </header>
         <!-- 图片(最多四张图片) 商品详情 价格 微信号 qq号 手机号 交易地点 商品名称 -->
        <!-- 技能概述 心仪佣金 微信号 手机号 qq号 技能种类 -->
        <div class="helloLogin">
            <form class="lemon-input-group" enctype="mutlipart/form-data">
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="proTitle" placeholder="请输入商品名称">
                </div>
                <div class="lemon-input-row">
                    <!-- <input type="text" class="lemon-input-clear"  placeholder="请输入心仪的佣金"> -->
                    <textarea class="lemon-input-clear" cols="5" rows="3" v-model="proIntro" placeholder="请输入商品概述"></textarea>
                </div>
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="proSalary" placeholder="请输入心仪的价钱">
                </div>
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="proPhoneNumber" placeholder="请输入你的手机号(和QQ任选其一)">
                </div>
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="proQQNumber" placeholder="请输入你的QQ号">
                </div>
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="proPlace"  placeholder="请输入交易地点">
                </div>
                <div class="mui-card lemon-input-row">
                        <p>请选择二货标签</p>
                        <div class="mui-input-row mui-radio">
                            <label>手机</label>
                            <input name="radio1" type="radio" v-model="proTab" value="手机">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>电脑</label>
                            <input name="radio1" type="radio" v-model="proTab" value="手机" >
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>数码</label>
                            <input name="radio1" type="radio" v-model="proTab" value="数码">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>电器</label>
                            <input name="radio1" type="radio" v-model="proTab" value="电器">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>衣鞋帽伞</label>
                            <input name="radio1" type="radio" v-model="proTab" value="衣鞋帽伞">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>书籍教材</label>
                            <input name="radio1" type="radio" v-model="proTab" value="书籍教材">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>体育健身</label>
                            <input name="radio1" type="radio" v-model="proTab" value="体育健身">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>乐器</label>
                            <input name="radio1" type="radio" v-model="proTab" value="乐器">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>其他</label>
                            <input name="radio1" type="radio" v-model="proTab" value="其他">
                        </div>
                </div>
                <div class="lemon-button-row">
                    <button type="button" class="mui-btn mui-btn-primary muiBtn-qq" @click="shareSkill">下一步</button>
                </div>
                
            </form>
        </div>
    </div>
</template>

<script>
import config from '@/config';
export default {
    name:'commitSh',
    data(){
        return {
            proTitle:'',
            proIntro:'',
            proSalary:'',
            proPhoneNumber:'',
            proQQNumber:'',
            proPlace:'',
            proTab:'',
            userNamesUnderAvatar:'',
            userid:''
        }
    },
    created(){
        this.$store.state.showTabBar = false;
        this.getLocalStorage();
    },
    mounted(){
        this.getRem(750,100);
        this.mui.init({
            swipe:back
        })
    },
    methods:{
        back(){
            // console.log("1");
            window.history.go(-1);
        },
        getLocalStorage(){
            let username = localStorage.getItem('registerName');
            let id = localStorage.getItem('userid');
            this.userid = id;
            this.userNamesUnderAvatar = username;
        },
        shareSkill(){
            if(!this.proTitle){
                this.mui.toast('请输入二货名称');
                return;
            }
            if(!this.proIntro){
                this.mui.toast('请输入二货详情');
                return;
            }
            if(!this.proSalary){
                this.mui.toast('请输入心仪的价格');
                return;
            }
            if(!this.proPhoneNumber&&!this.proQQNumber){
                this.mui.toast('请输入QQ或者手机号中的其中一个');
                return;
            }
            if(this.proPhoneNumber){
                let regPhone = /^1(3|4|5|7|8)\d{9}$/;
                let isRightPhone = regPhone.test(this.proPhoneNumber);
                if(!isRightPhone){
                    this.mui.toast('手机号码格式不正确');
                    return;
                }
            }
            if(this.proQQNumber){
                let regQQ = /^[1-9][0-9]{4,9}$/gim;
                let isRightPhone = regQQ.test(this.proQQNumber);
                if(!isRightPhone){
                    this.mui.toast('QQ号码格式不正确');
                    return;
                }
            }
            if(!this.proPlace){
                this.mui.toast('请输入交易地点');
                return;
            }
            if(!this.proTab){
                this.mui.toast('请选择商品的其中一个');
                return;
            }
            // console.log("进行发布二货");
            let timeNow = this.getTime();
            let data = {
                userid:this.userid,
                username:this.userNamesUnderAvatar,
                time:timeNow,
                protab:this.proTab,
                protitle:this.proTitle,
                prointro:this.proIntro,
                prosalary:this.proSalary,
                prophonenum:this.proPhoneNumber,
                proqqnum:this.proQQNumber,
                proplace:this.proPlace
            }
            console.log(data);
            if(data){
                this.$router.push('/commit/commitSh/commitPic');
            }
            // this.$http.post(`${config.host}/shops/Home/Test/upload`,data)
            //     .then(result=>{
            //         console.log(result);
            //     })
        },
        getTime(){
            let date = new Date();
            let seperator1 = "-";
            let seperator2 = ":";
            let month = date.getMonth() + 1;
            let strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                    + " " + date.getHours() + seperator2 + date.getMinutes()
                    + seperator2 + date.getSeconds();
            return currentdate;
        }
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
    .helloLogin{
        margin-top:1.2rem;
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
                margin-top:.3rem;
                margin-bottom: .2rem;
                .muiBtn-qq{
                    width:6rem;
                    background:orange;
                    color:white;
                    height: .9rem;
                    border:none;
                }
            }
            .umi-table-view-cell{
                margin-left: .8rem;
                border-color:white;
            }
            .imgUpload{
                border: 1px solid #000;
                width: 85%;
                height: 8rem;
                margin:0 auto;
                
                #preview{
                    width:100%;
                    height: 4.3rem;
                    border:1px solid red;
                    padding: .1rem .1rem;
                    img{
                        width:45%;
                        height: 2rem;
                        float: left;
                        margin-bottom: .1rem;
                    }
                    img:nth-child(even){
                        float: right;
                    }
                }
            }
        }
    }
}
</style>
