<template>
    <div>
         <div class="show" v-for="item in proList" :key="item.id">
        <router-link  :to="{path:'/home/detail',query:{id:item.id}}">
        <div class="showPro" >
            <div class="showImg">
            <img :src="item.imgpic" alt="">
            </div>
            <div class="showInfo">
            <p class="title">【{{item.protitle}}】</p>
            <p class="from">发布人:{{item.username}}</p>
            <p class="prices">
                <span class="price">￥{{item.prosalary}}</span>
                <span class="click">12人点击</span>
                <br>
                <span class="tab">所属分类:{{item.protab}}</span>
            </p>
            </div>
        </div>
        <br><br><br>
        </router-link>
    </div>
    </div>
</template>


<script>
import pic from '@/assets/noPic.png'
import config from '@/config'
export default {
    data(){
        return{
            proList:[],
            imgSrc:pic,
            showMsg:true,
            showTab: true
        }
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


<style lang="less" scoped>
    .showPro{
      width: 100%;
      height: 2.8rem;
      padding: .1rem .2rem .1rem .2rem;
      border-bottom: .03rem dashed rgb(240, 237, 233);
      .showImg{
        width: 3rem;
        height: 2.5rem;
        float: left;
        background-image: url('../../assets/noPic.png');
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        img{
          width: 100%;
          height: 100%;
          border:.03 rem  solid #ECD8B2; 
          border-radius: .2rem;
        }
      }
      .showInfo{
        width: 3.9rem;
        height: 2.2rem;
        
        float: left;
        margin-left: .1rem;
        margin-top: .2rem;
        p.title{
          color: black;
          font-weight: bold;
          font-size: .4rem;
        }
        p.from{
          font-size: .3rem;
          color:black;
        }
        p.prices{
          span.price{
            color: red;
            font-size: .45rem;
          }
          span.click{
            font-size: .29rem;
            color: orange;
          }
          span.tab{
            font-size: .25rem;
            margin-left: .2rem;
          }
        }
      }
    }
</style>
