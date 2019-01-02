<template>
  <div class="hello">
    <headers :data='wantbuy' :home='show' :tab='showTab'></headers>
    <div class="skillListDetail">
      <div class="mui-input-row mui-search">
				<input type="search" class="mui-input-clear inputLemon" placeholder="请输入你想搜索的内容">
		  </div>
    </div>
    <div class="asc">
        <span class="left" @click="randomShow">随机<span class="mui-icon mui-icon-pulldown"></span></span>
        <span class="right" @click="timeShow">时间<span class="mui-icon mui-icon-pulldown"></span></span>
    </div>
    <div class="mui-card" v-for="item in skillList" :key="item.id">
				<div class="mui-card-header mui-card-media">
          <!-- 这是头像 -->
					<img src="@/assets/me.png" />
					<div class="mui-media-body">
						{{item.username}}
						<p>发表于 {{item.time}}</p>
					</div>
				</div>
        <div class="mui-card-content-inner">
						<p>技能概述:</p>
						<p style="color: #333;">{{item.skillintro}}</p>
            <p>联系方式:</p>
						<p style="color: #333;">手机号:{{item.skillphonenumber?item.skillphonenumber:'暂无'}}</p>
            <p style="color: #333;">QQ号:{{item.skillqqnumber?item.skillqqnumber:'暂无'}}</p>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">喜欢</a>
					<a class="mui-card-link">￥{{item.skillsalary}}</a>
					<a class="mui-card-link">{{item.skilltab}}</a>
				</div>
		</div>
  </div>
  <!-- 技能概述 心仪佣金 微信号 手机号 qq号 技能种类 -->
</template>

<script>
import config from '@/config'
import headers from '@/components/SubComponents/headers'
export default {
  data () {
    return {
      wantbuy: '技能',
      show: false,
      showTab: true,
      skillList: []
    }
  },
  mounted () {
    this.getRem(750, 100)
    this.mui.init({
      swipe: back
    })
  },
  created () {
    this.$store.state.showTabBar = true
    this.getAllSkillList()
    // console.log(this.skillList);
  },
  components: {
    headers
  },
  methods: {
    getAllSkillList () {
      this.$http.get(`${config.host}/shops/Home/Skill/lst`, {params: {type: 'mobile'}})
        .then(result => {
          console.log(result.body)
          if (result.body.length == 0) {
            this.mui.toast('获取数据失败')
          } else {
            this.skillList = result.body
          }
        })
    },
    randomShow () {
      // console.log("随机排序");
    },
    timeShow () {
      // console.log("时间排序");
    }
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
