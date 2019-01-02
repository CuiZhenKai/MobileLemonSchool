<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-arrowthinleft mui-pull-left back" @click="back"></span>
            <h1 class="mui-title content">个人中心--我的收藏</h1>
        </header>
    </div>
</template>

<script>
export default {
  name: 'mymsg',
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
}
</style>
