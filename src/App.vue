<template>
  <div id="app">
	<transition :name="transitionName">
			<router-view v-if="isRouterAlive"/>
	</transition>
    <nav class="mui-bar mui-bar-tab" v-if="$store.state.showTabBar">
			<a class="mui-tab-item" @click="toHome">
				<span class="mui-icon mui-icon-image"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" @click="toWantbuy">
				<span class="mui-icon mui-icon-paperplane" ></span>
				<span class="mui-tab-label">技能</span>
			</a>
			<a class="mui-tab-item" @click="toCommit">
				<span class="mui-icon mui-icon-compose" ></span>
				<span class="mui-tab-label">发布</span>
			</a>
			<a class="mui-tab-item" @click="toMe">
				<span class="mui-icon mui-icon-person" ></span>
				<span class="mui-tab-label">我的</span>
			</a>
	</nav>
	
  </div>
</template>

<script>
export default {
  name: 'app',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      transitionName: '',
      isRouterAlive: true
    }
  },
  mounted () {
    this.mui.init({
      swipe: back
    })
    this.mui('body').on('click', 'a', function () { document.location.href = this.href })
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    },
    toWantbuy () {
      this.$router.push('/wantbuy')
    },
    toHome () {
      this.$router.push('/')
    },
    toCommit () {
      this.$router.push('/commit')
    },
    toMe () {
      this.$router.push('/me')
    }
  },
  watch: {// 使用watch 监听$router的变化
    $route (to, from) {
      // 如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        // 设置动画名称
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  }
}
</script>

<style>
	.mui-bar-tab{
		background: #fff;
		border:none;
	}
	.plus{
		font-size: .8rem;
		margin-top:.1rem;
	}
	#offCanvasBtn{
        color:orange;
    }
	#username{
		color:orange;
		margin-top: .28rem;
		font-size: .28rem;
	}
	.tabFontSize{
		font-size: .35rem;
	}
	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		will-change: transform;
		transition: all 500ms;
		position: absolute;
	}
	.slide-right-enter {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	.slide-right-leave-active {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	.slide-left-enter {
		opacity: 0;
		transform: translate3d(100%, 0, 0);
	}
	.slide-left-leave-active {
		opacity: 0;
		transform: translate3d(-100%, 0, 0);
	}
	.mui-backdrop{
		background: transparent;
		z-index: -1;
		position: relative;
	}
</style>
