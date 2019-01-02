<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-arrowthinleft mui-pull-left back" @click="back"></span>
            <h1 class="mui-title content">个人中心--已发布技能</h1>
        </header>
        <div class="mui-card">
				<div class="mui-card-header mui-card-media">
                    <!-- 这是头像 -->
					<img src="@/assets/me.png" />
					<div class="mui-media-body">
						姓名
						<p>发表于 </p>
					</div>
				</div>
                <div class="mui-card-content-inner">
						<p>技能概述:</p>
						<p style="color: #333;"></p>
                        <p>联系方式:</p>
						<p style="color: #333;">手机号:</p>
                        <p style="color: #333;">QQ号:</p>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">￥</a>
					<a class="mui-card-link">标签</a>
				</div>
		</div>
    </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'mycommitjn',
  data () {
    return {
      userid: ''
    }
  },
  created () {
    this.$store.state.showTabBar = false
    this.getLocalStorage()
    this.getAllSkillList()
  },
  mounted () {
    this.getRem(750, 100)
  },
  methods: {
    back () {
      // console.log("1");
      window.history.go(-1)
    },
    getLocalStorage () {
      let id = localStorage.getItem('userid')
      this.userid = id
    },
    getAllSkillList () {
      console.log('userid' + this.userid)
      this.$http.get(`${config.host}/shops/Home/Skill/lst?userid=${this.userid}`)
        .then(result => {
          console.log(result.body)
        })
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
    .mui-card{
        margin-top: 1.2rem;
    }
}
</style>
