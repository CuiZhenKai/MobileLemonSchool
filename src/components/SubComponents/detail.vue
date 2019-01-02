<template>
    <div class="hello">
        <header class="mui-bar mui-bar-nav">
            <span class="mui-icon mui-icon-arrowthinleft mui-pull-left back" @click="back"></span>
            <h1 class="mui-title content">商品详情</h1>
        </header>
        <swiper :options="swiperOption" class="swiperDeatail">
            <swiper-slide class="slideDatail" v-for="slide in swiperSlides" :key="slide.id">
                <img :src="slide" alt="">
            </swiper-slide>
            <p class="swiper-pagination" slot="pagination"></p>
        </swiper>
        <div class="mui-card">
				<div class="mui-card-header mui-card-media">
                    <!-- 这是头像 -->
					<img src="@/assets/me.png" />
					<div class="mui-media-body">
						上传人:上传人姓名
						<p>上传时间:2018-10-1 09:00:00</p>
					</div>
				</div>
                <div class="mui-card-content-inner">
						<p>商品概述:</p>
						<p style="color: #333;">我是商品概述概述概述我是技能概述概述概述我是技能概述概述概述</p>
                        <p>联系方式:</p>
						<p style="color: #333;">手机号:13245382620</p>
                        <p style="color: #333;">QQ号:526512587</p>
				</div>
				<div class="mui-card-footer">
					<a class="mui-card-link">喜欢</a>
					<a class="mui-card-link">￥12</a>
				</div>
		</div>
        <!-- <div class="imgCard">
            <p class="titleCenter">商品图片展示</p>
            <img class="imgPro" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2851444697,1735806542&fm=27&gp=0.jpg" alt="">
            <img class="imgPro" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2851444697,1735806542&fm=27&gp=0.jpg" alt="">
            <img class="imgPro" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2851444697,1735806542&fm=27&gp=0.jpg" alt="">
            <img class="imgPro" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2851444697,1735806542&fm=27&gp=0.jpg" alt="">
        </div> -->
    </div>
    <!-- 用户上传的轮播图 价格 商品标题 商品描述 时间  浏览量 头像 账户名 联系方式 -->
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'detail',
  data () {
    return {
      index: 0,
      swiperOption: {
        autoplay: true, // 自动切换
        pagination: {
          el: '.swiper-pagination'// 分页器
        }
      },
      swiperSlides: ['https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2851444697,1735806542&fm=27&gp=0.jpg', 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2368356775,1167441498&fm=85&s=F213A06667BA07804C4E9D880200A09B', 'https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=2368356775,1167441498&fm=85&s=F213A06667BA07804C4E9D880200A09B', 'https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1110157176,56958821&fm=85&s=5CA63D724B6A45201E7C94CA0000C0B3']
    }
  },
  created () {
    this.$store.state.showTabBar = false
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
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
.hello{
    .swiperDeatail{
        width: 95%;
        height: 5rem;
        margin-top:1.3rem;
        .slideDatail{
            overflow: hidden;
            text-align: center;
            img{
               width: 5.3rem;
               height: 3.5rem;
            }
        }
    }
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
    .mui-card {
        margin-top:.1rem;
    }
    .imgCard{
        margin-top: .5rem;
        width: 100%;
        height: .1rem;
        position: relative;
        p.titleCenter{
            text-align: center;
            color:orange;
        }
        img{
            max-width: 4rem;
            max-height: 4rem;
            margin-left: 1.5rem;
        }
    }
}
// .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
//     background-color: orange;
// }
</style>
