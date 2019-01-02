<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-arrowthinleft mui-pull-left back" @click="back"></span>
            <h1 class="mui-title content">柠檬校园-服务协议</h1>
        </header>
        <div class="contentProtocol">
            <div class="top-title">
                尊敬的用户，欢迎阅读柠檬校园服务协议。
            </div>
            <div class="main-content">
                <p class="line-text">协议</p>
                <ul class="item">
                    <li>
                        1.&nbsp;&nbsp;用户应当同意本协议的条款并按照页面上的提示完成全部的注册程序。用户在进行注册程序过程中点击"同意"按钮即表示用户与柠檬校园达成协议，完全接受本协议项下的全部条款。
                    </li>
                    <li>
                        2.&nbsp;&nbsp;用户注册成功后，柠檬校园将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；用户应当对以其用户帐号进行的所有活动和事件负法律责任。
                    </li>
                    <li>
                        3.&nbsp;&nbsp;用户需要承诺不能发布为反法律的二手物品信息，否则柠檬校园将有权利直接删除该商品，注销用户名或者上报公安局等相关部门。
                    </li>
                    <li>
                        4.&nbsp;&nbsp;用户应当为自身注册帐户下的一切行为负责因用户行为而导致的用户自身或其他任何第三方的任何损失或损害柠檬校园不承担责任。
                    </li>
                </ul>
                <p class="line-text">隐私保护</p>
                <ul>
                    <li>
                        1.&nbsp;&nbsp;本站不对外公开或向第三方提供单个用户的注册资料及用户在使用网络服务时存储在本站的非公开内容，但下列情况除外：
                        <br/>
                        (1)事先获得用户的明确授权；<br/>
                        (2)根据有关的法律法规要求；<br/>
                        (3)按照相关政府主管部门的要求；<br/>
                        (4)为维护社会公众的利益。<br/>
                    </li>
                    <li>
                        2.&nbsp;&nbsp;每当柠檬校园需要识别您的身份或与您联络时，会明确的询问所需的资料，即个人资料。一般而言，当您在网站上注册，要求提供特别服务，或是如参加奖金竞赛，便会被询问到这项资料。可能的话，柠檬校园会利用一些方法，确认您的个人资料的正确性与时效性。
                    </li>
                    <li>
                        3.&nbsp;&nbsp;柠檬校园站及其必要的服务伙伴使用您的个人资料来运作网站和服务，并且会通知您各项新的功能与服务，以及柠檬校园和其附属公司的各类产品。柠檬校园也会谨慎地挑选来自其他公司的产品或服务资料传送给您，通常是有关于站点本身的服务，但对作业并非必要（次要用途）
                    </li>
                    <li>
                        4.&nbsp;&nbsp;如果柠檬校园想要将个人资料用在次要用途上，柠檬校园会提供您如何拒绝这项服务的说明。您可以依照柠檬校园寄给您的资料或促销信件上的说明，终止这些信件的发送
                    </li>
                </ul>
                <p class="line-text">免责声明</p>
                <ul>
                    <li>
                        1.&nbsp;&nbsp;柠檬校园根据法律规定或相关政府的要求提供您的个人信息；
                    </li>
                    <li>
                        2.&nbsp;&nbsp;由于您将用户密码告知他人或与他人共享注册账户，由此导致的任何个人信息的泄漏，或其它非因柠檬校园原因导致的个人信息的泄漏；
                    </li>
                    <li>
                        3.&nbsp;&nbsp;任何第三方根据柠檬校园各服务条款及声明中所列明的情况使用您的个人信息，由此所产生的纠纷；
                    </li>
                    <li>
                        4.&nbsp;&nbsp;柠檬校园在各服务条款及声明中列明的使用方式或免责情形。柠檬校园会不定时更新本隐私权声明。
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'protocol',
  created () {
    this.$store.state.showTabBar = false
  },
  mounted () {
    this.getRem(750, 100)
  },
  methods: {
    back () {
      // console.log("1");
      window.history.go(-1)
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
    .contentProtocol{
        margin-top:1.2rem;
        // text-align: center;
        li{
            list-style: none;
            margin-left: -.8rem;
        }
        .top-title{
            text-align: center;
        }
        .main-content{
            margin:0 auto;
            .line-text{
                color:orange;
                font-size: .5rem;
                margin-top:.2rem;
            }
        }
    }
}
</style>
