<template>
  <div class="hello">
    <headers :data='commit' :tab='showTab'></headers>
    <div class="commit">
      <div class="mui-card">
				<div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3930318509,1734424700&fm=27&gp=0.jpg)"></div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>发布二货:</p>
						<p style="color: #333;">可以发布自己身边的二手物品在柠檬校园网站上,让物品的效用最大化.</p>
            <p>分享技能:</p>
						<p style="color: #333;">你是否有自己得心趁手的技能或者知识?分享出来吧,让它为你带来不一样的满足感.</p>
					</div>
				</div>
				<div class="mui-card-footer">
					<router-link class="mui-card-link" to="/commit/commitSh">发布二货</router-link>
					<router-link class="mui-card-link" to="/commit/shareJn">分享技能</router-link>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
import headers from '@/components/SubComponents/headers'
export default {
  data () {
    return {
      commit: '发布',
      showTab: false
    }
  },
  mounted () {
    this.getRem(750, 100)
  },
  created () {
    this.$store.state.showTabBar = true
  },
  components: {
    headers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{

    .commit{
      margin-top:1.2rem;
    }
  }
</style>
