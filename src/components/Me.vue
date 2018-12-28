<template>
  <div class="hello">
    <headers :data='me' :tab='showTab'></headers>
    <div class="msg">
      <div class="avatarAndName">
        <div class="avatar">
          <router-link to="/login" v-if="logined"><img src="../assets/lemon.svg" alt="头像"></router-link>
          <img src="../assets/lemon.svg" alt="头像" v-if="!logined" >
        </div>
        <p>{{userNamesUnderAvatar}}</p>
        <p>{{userData.signname}}</p>
      </div>
    </div>
    <div class="grid-person">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		      <router-link to='/me/mymsg' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		              <span class="mui-icon mui-icon-compose"></span>
		              <div class="mui-media-body">编辑资料</div></a></router-link>
		      <router-link to='/me/commitSh' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		              <span class="mui-icon mui-icon-upload"></span>
		              <div class="mui-media-body">已发布二手</div></a></router-link>
		      <router-link to='/me/commitJn' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		              <span class="mui-icon mui-icon-navigate"></span>
		              <div class="mui-media-body">已发布技能</div></a></router-link>
          <router-link to='/me/mylove' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		              <span class="mui-icon mui-icon-star"></span>
		              <div class="mui-media-body">我的收藏</div></a></router-link>
		      <router-link to='/me/lemon' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		              <span class="mui-icon mui-icon-mic"></span>
		              <div class="mui-media-body">小柠檬</div></a></router-link>
          <router-link to='/me/adviseUs' class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		              <span class="mui-icon mui-icon-paperplane"></span>
		              <div class="mui-media-body">意见反馈</div></a></router-link>
		  </ul> 
    </div>
  </div>
</template>

<script>
import config from '@/config'
import headers from '@/components/SubComponents/headers'
export default {
  name:'me',
  data(){
    return {
      userNamesUnderAvatar:'',
      me:'个人中心',
      showTab:false,
      userid:'',
      userData:{},
      logined:false
    }
  },
  mounted(){
    this.getRem(750,100);
  },
  created(){
    this.$store.state.showTabBar = true;
    this.getLocalStorage();
  },
  methods:{
    getUserMsg(){
      this.$http.get(`${config.host}/shops/Home/User/edit?userid=${this.userid}`)
          .then(result=>{
              this.userData = result.body;
          })
    },
    getLocalStorage(){
      let username = localStorage.getItem('registerName');
      let id = localStorage.getItem('userid');
      this.userid = id;
      if(username){
        this.userNamesUnderAvatar = username;
        this.getUserMsg();
        this.logined = false;
      }else{
        this.userNamesUnderAvatar = '未登录';
        this.logined = true;
      }
    }
  },
  components:{
    headers
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .hello{
    .msg{
      width:100%;
      height: auto;
      background:#fff;
      margin-top: .8rem;
      padding: 0.3rem 0.5rem;
      text-align: center;
      .avatarAndName{
        margin:0 auto;
        height: auto;
        .avatar{
          width:2.4rem;
          height: 2.4rem;
          margin:.2rem auto;
          border-radius: 50%;
          padding: 0.25rem 0.25rem;
          box-shadow: 0 0 .2rem #ccc;
          img{
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .grid-person{
      .mui-table-view{
        background: #fff;
        margin-bottom:.8rem;
      }
    }
  }
</style>
