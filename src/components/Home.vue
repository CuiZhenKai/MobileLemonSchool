<template>
  <div class="hello">
    <headers :data='home' :home='show' :tab='showTab'></headers>
    <div class="skillListDetail">
      <div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear inputLemon" placeholder="请输入你想搜索的内容">
		  </div>
    </div>
    <div class="asc">
        <span class="left">随机<span class="mui-icon mui-icon-pulldown"></span></span>
        <span class="left">时间<span class="mui-icon mui-icon-pulldown"></span></span>
        <span class="right">价格<span class="mui-icon mui-icon-pulldown"></span></span>
        <span class="right">热度<span class="mui-icon mui-icon-pulldown"></span></span>
    </div>
    <keep-alive>
      <pro-list></pro-list>
    </keep-alive>
    
    <!-- 图片(最多四张图片) 商品详情 价格 微信号 qq号 手机号 交易地点 商品名称 -->
  </div>
</template>

<script>
import proList from '@/components/SubComponents/proList'
import headers from '@/components/SubComponents/headers'
export default {
  data () {
    return {
      home: '专注校园二手',
      show: true,
      showTab: true,
    }
  },
  components: {
    headers,
    proList
  },
  mounted () {
    this.getRem(750, 100);
    this.showMsg = false;
  },
  created () {
    this.$store.state.showTabBar = true;
    if(this.showMsg){
      this.mui.toast(`<span class="mui-spinner"></span><br />正在获取数据,请稍后`);
    }
    this.getAllProductList();
  },
  methods:{
    getAllProductList () {
      this.$http.get(`${config.host}/shops/Home/index/lst`)
        .then(result => {
          if (result.body.length == 0) {
            this.mui.toast('获取数据失败')
          } else {
            this.proList = result.body;
          }
        })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    .skillListDetail{
      margin-top:1.3rem;
      .mui-input-row{
        width: 95%;
        margin:0 auto;
      }
      .inputLemon{
        background-color: white;
        border: 1px solid orange;
        color: orange;
        font-weight: bold;
        font-size: 0.3rem;
      }
    }
    
    .asc{
      width: 100%;
      height: 1rem;
      background:orange;
      line-height: 1rem;
      color:white;
      .left{
        float: left;
        margin-left: .5rem;
        font-size: .3rem;
      }
      .right{
        float: right;
        margin-right: .5rem;
        font-size: .3rem;
      }
    }
    .mui-card:last-child{
      margin-top:.2rem;
      margin-bottom:1.4rem;
    }
  }

</style>
