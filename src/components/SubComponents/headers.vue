<template>
    <div class="hello">
        <div id="popover" class="mui-popover">
            <ul class="mui-table-view tabFontSize" v-if="home" >
                <li class="mui-table-view-cell"><a href="#">手机</a></li>
                <li class="mui-table-view-cell"><a href="#">电脑</a></li>
                <li class="mui-table-view-cell"><a href="#">数码</a></li>
                <li class="mui-table-view-cell"><a href="#">电器</a></li>
                <li class="mui-table-view-cell"><a href="#">衣鞋帽伞</a></li>
                <li class="mui-table-view-cell"><a href="#">书籍教材</a></li>
                <li class="mui-table-view-cell"><a href="#">体育健身</a></li>
                <li class="mui-table-view-cell"><a href="#">乐器</a></li>
                <li class="mui-table-view-cell"><a href="#">其他</a></li>
            </ul>
            <ul class="mui-table-view" v-if="!home">
                <li class="mui-table-view-cell"><a href="#">软件编程</a></li>
                <li class="mui-table-view-cell"><a href="#">文娱体育</a></li>
                <li class="mui-table-view-cell"><a href="#">日常生活</a></li>
                <li class="mui-table-view-cell"><a href="#">计算机基础</a></li>
                <li class="mui-table-view-cell"><a href="#">其他</a></li>
            </ul>
        </div>
        <div id="loginAndOut" class="mui-popover" >
            <ul class="mui-table-view">
                <li class="mui-table-view-cell" @click="logout" v-if="showLogin"><a href="#">退出登录</a></li>
                <li class="mui-table-view-cell" @click="wantLogin" v-if="!showLogin"><a href="#">点击登录</a></li>
            </ul>
        </div>
        <header class="mui-bar mui-bar-nav">
            <h1 class="mui-title content">柠檬校园--{{data}}</h1>
            <!-- <a id="offCanvasBtn" href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" @click="of"></a> -->
            <a href="#popover" id="offCanvasBtn" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" v-if="tab"></a>
            <a href="#loginAndOut" id="username" class="mui-pull-right">{{usernames}}</a>
        </header>
    </div>

</template>

<script>
export default {
  inject: ['reload'],
  data () {
    return {
      usernames: '',
      showLogin: false
    }
  },
  props: ['data', 'home', 'tab'],
  mounted () {
    this.getRem(750, 100)
  },
  created () {
    this.getLocalStorage()
  },
  methods: {
    getLocalStorage () {
      let username = localStorage.getItem('registerName')
      if (username) {
        this.usernames = username
        this.showLogin = true
      } else {
        this.usernames = '未登录'
        this.showLogin = false
      }
    },
    wantLogin () {
      this.$router.push('/login')
      this.reload()
    },
    logout () {
      this.mui.confirm('确定退出柠檬校园吗', '柠檬校园', (e) => {
        // console.log(e);
        if (e.index == 1) {
          localStorage.removeItem('registerName')
          this.mui.toast(`<span class="mui-spinner"></span><br />正在注销`, {duraion: 2700})
          window.setTimeout(() => {
            this.mui.toast('已退出登录')
          }, 2700)
          this.reload()
        } else {
          this.mui.toast('取消退出登录')
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
    .hello{
        .mui-bar-nav{
            background: #fff;
            .content {
                font-size: 0.3rem;
                color: orange;
                font-weight: bold;
            }
        }
    }
    .mui-table-view{
        color:orange;
    }
</style>
