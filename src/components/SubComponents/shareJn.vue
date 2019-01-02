<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-arrowthinleft mui-pull-left back" @click="back"></span>
            <h1 class="mui-title content">柠檬校园-分享技能</h1>
        </header>
         <!-- 图片(最多四张图片) 商品详情 价格 微信号 qq号 手机号 交易地点 商品名称 -->
        <!-- 技能概述 心仪佣金 微信号 手机号 qq号 技能种类 -->
        <div class="helloLogin">
            <form class="lemon-input-group">
                <div class="lemon-input-row">
                    <!-- <input type="text" class="lemon-input-clear"  placeholder="请输入心仪的佣金"> -->
                    <textarea class="lemon-input-clear" cols="8" rows="4" v-model="skillIntro" placeholder="请输入技能概述"></textarea>
                </div>
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="skillSalary" placeholder="请输入心仪的佣金">
                </div>
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="skillPhoneNumber" placeholder="请输入你的手机号(和QQ任选其一)">
                </div>
                <div class="lemon-input-row">
                    <input type="text" class="lemon-input-clear" v-model="skillQQNumber" placeholder="请输入你的QQ号">
                </div>
                <div class="mui-card lemon-input-row">
                        <p>请选择二货标签</p>
                        <div class="mui-input-row mui-radio">
                            <label>软件编程</label>
                            <input name="radio1" type="radio" v-model="skillTab" value="软件编程">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>文娱体育</label>
                            <input name="radio1" type="radio" v-model="skillTab" value="文娱体育" >
                        </div>
                        <div class="mui-input-row mui-radio" >
                            <label>日常生活</label>
                            <input name="radio1" type="radio" v-model="skillTab" value="日常生活">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>计算机基础</label>
                            <input name="radio1" type="radio" v-model="skillTab" value="计算机基础">
                        </div>
                        <div class="mui-input-row mui-radio">
                            <label>其他</label>
                            <input name="radio1" type="radio" v-model="skillTab" value="其他">
                        </div>
                </div>
                <div class="lemon-button-row">
                    <button type="button" class="mui-btn mui-btn-primary muiBtn-qq" @click="shareSkill">分享</button>
                </div>

            </form>
        </div>
    </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'shareJn',
  data () {
    return {
      skillIntro: '',
      skillSalary: '',
      skillPhoneNumber: '',
      skillQQNumber: '',
      skillTab: '',
      userid: '',
      userNamesUnderAvatar: ''
    }
  },
  created () {
    this.$store.state.showTabBar = false
    this.getLocalStorage()
  },
  mounted () {
    this.getRem(750, 100)
    this.mui.init({
      swipe: back
    })
  },
  methods: {
    back () {
      // console.log("1");
      window.history.go(-1)
    },
    getLocalStorage () {
      let username = localStorage.getItem('registerName')
      let id = localStorage.getItem('userid')
      this.userid = id
      if (username) {
        this.userNamesUnderAvatar = username
      } else {
        this.userNamesUnderAvatar = '未登录'
      }
    },
    shareSkill () {
      if (!this.skillIntro) {
        this.mui.toast('请输入技能概述')
        return
      }
      if (!this.skillSalary) {
        this.mui.toast('请输入心仪的佣金')
        return
      }
      if (!this.skillPhoneNumber && !this.skillQQNumber) {
        this.mui.toast('请输入QQ或者手机号中的其中一个')
        return
      }
      if (this.skillPhoneNumber) {
        let regPhone = /^1(3|4|5|7|8)\d{9}$/
        let isRightPhone = regPhone.test(this.skillPhoneNumber)
        if (!isRightPhone) {
          this.mui.toast('手机号码格式不正确')
          return
        }
      }
      if (this.skillQQNumber) {
        let regPhone = /^[1-9][0-9]{4,9}$/gim
        let isRightPhone = regPhone.test(this.skillQQNumber)
        if (!isRightPhone) {
          this.mui.toast('QQ号码格式不正确')
          return
        }
      }
      if (!this.skillTab) {
        this.mui.toast('请选择技能种类的其中一个')
        return
      }
      // console.log("进行分享");
      let timeNow = this.getTime()
      let data = {
        userid: this.userid,
        username: this.userNamesUnderAvatar,
        time: timeNow,
        skillintro: this.skillIntro,
        skillphonenumber: this.skillPhoneNumber,
        skillqqnumber: this.skillQQNumber,
        skilltab: this.skillTab,
        skillsalary: this.skillSalary
      }
      // console.log(data);
      this.$http.post(`${config.host}/shops/Home/Skill/add`, data)
        .then(result => {
          // console.log(result);
          if (result.body.status === 1) {
            this.mui.toast(result.body.message)
            this.$router.push('/wantbuy')
          } else {
            this.mui.toast(result.body.message)
          }
        }, (error) => {

        })
    },
    getTime () {
      let date = new Date()
      let seperator1 = '-'
      let seperator2 = ':'
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
                    ' ' + date.getHours() + seperator2 + date.getMinutes() +
                    seperator2 + date.getSeconds()
      return currentdate
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
                margin-top:.4rem;
                margin-bottom: .2rem;
                .muiBtn-qq{
                    width:6rem;
                    background:orange;
                    color:white;
                    height: .9rem;
                    border:none;
                }
            }
        }
    }
}
</style>
