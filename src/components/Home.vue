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
    <router-link to="/home/detail"><div class="mui-card">
        <!-- 这是用户封面 上传图片 -->
				<div class="mui-card-header mui-card-media" style="height:80vw;background-image:url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3930318509,1734424700&fm=27&gp=0.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品标题</p>
						<p style="color: #333;">上传人:姓名</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">￥12</a>
					<a class="mui-card-link">点击数:70</a>
				</div>
		</div></router-link>
    <!-- 图片(最多四张图片) 商品详情 价格 微信号 qq号 手机号 交易地点 商品名称 -->
  </div>
</template>

<script>
import headers from '@/components/SubComponents/headers'
export default {
  data(){
    return {
      home:'专注校园二手',
      show:true,
      showTab:true
    }
  },
  components:{
    headers
  },
  mounted(){
    this.getRem(750,100);
  },
  created(){
    this.$store.state.showTabBar = true;
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
