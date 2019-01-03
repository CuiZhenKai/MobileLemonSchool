<template>
        <div class="com-upload-img">
            <p class="center">点击选择图片</p>
            <div class="img_group">
                <div class="img_box" v-if="allowAddImg">
                    <div class="logo"></div>
                    <input type="file" class="input" accept="image/*" multiple="multiple" @change="changeImg($event)">
                    <!-- <div class="filter"></div> -->
                </div>
                <div class="imgCon">
                    <div class="img_box2" v-for="(item,index) in imgArr" :key="index">
                        <img :src="item" alt="">
                        <!-- <i class="img_delete" @click="deleteImg(index)"></i> -->
                        <!-- <i class="img_delete" @click="imgArr.splice(index,1)"></i> -->
                    </div>
                </div>
                <button type="button"  class="muiBtn-commits" @click="commitImg" >发布二货</button>
            </div>
        </div>
</template>

<script>
import config from '@/config'
export default {
  name: 'ComUpLoad',
  data () {
    return {
      imgData: '',
      imgArr: [],
      imgSrc: '',
      allowAddImg: true,
      pic: '选择图片',
      commitShData:'',
      proTitle: '',
      proIntro: '',
      proSalary: '',
      proPhoneNumber: '',
      proQQNumber: '',
      proPlace: '',
      proTab: '',
      userid: '',
      username:''
    }
  },
  created () {
    this.$store.state.showTabBar = false;
    let timeNow = this.getTime();
    let {userid,username,protab,protitle,prointro,prosalary,prophonenum,proqqnum,proplace} = this.$route.params;
    this.userid = userid;
    this.username = username;
    this.proTab = protab;
    this.proTitle  = protitle;
    this.proSalary  = prosalary;
    this.proPhoneNumber = prophonenum;
    this.proQQNumber = proqqnum;
    this.proPlace = proplace;
    this.proIntro = prointro;
  },
  methods: {
    commitImg () {
      let p = this.imgArr.length === 0;
      if (p) {
        this.mui.toast('请至少上传一张图片')
        return;
      }
      let timeNow = this.getTime();
      let data = {
        userid: this.userid,
        username: this.username,
        protab: this.proTab,
        protitle: this.proTitle,
        prointro: this.proIntro,
        prosalary: this.proSalary,
        prophonenum: this.proPhoneNumber,
        proqqnum: this.proQQNumber,
        proplace: this.proPlace,
        imgArr: this.imgArr,
        time:timeNow
      }
      console.log(data);
      this.$http.post(`${config.host}/shops/Home/index/add`,data)
        .then(result=>{
          if(result.body.status===1){
              this.mui.toast(result.body.message);
              this.$router.push({name:'Home'});
          }else{
              this.mui.toast('发布失败');
          }
        })
    },
    changeImg: function (e) {
      var _this = this
      var imgLimit = 1024
      var files = e.target.files
      var image = new Image()
      if (files.length > 0) {
        var dd = 0
        var timer = setInterval(function () {
          if (files.item(dd).type != 'image/png' && files.item(dd).type != 'image/jpeg' && files.item(dd).type != 'image/gif') {
            return false
          }

          if (files.item(dd).size > imgLimit * 102400) {
            // to do sth
          } else {
            image.src = window.URL.createObjectURL(files.item(dd))
            image.onload = function () {
              // 默认按比例压缩
              var w = image.width,
                h = image.height,
                scale = w / h
              w = 200
              h = w / scale
              // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
              var quality = 0.7
              // 生成canvas
              var canvas = document.createElement('canvas')
              var ctx = canvas.getContext('2d')
              // 创建属性节点
              var anw = document.createAttribute('width')
              anw.nodeValue = w
              var anh = document.createAttribute('height')
              anh.nodeValue = h
              canvas.setAttributeNode(anw)
              canvas.setAttributeNode(anh)
              ctx.drawImage(image, 0, 0, w, h)
              var ext = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase()// 图片格式
              var base64 = canvas.toDataURL('image/' + ext, quality)
              // 回调函数返回base64的值
              if (_this.imgArr.length <= 4) {
                _this.imgArr.unshift('')
                _this.imgArr.splice(0, 1, base64)// 替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                if (_this.imgArr.length >= 4) {
                  _this.allowAddImg = false
                }
              }
            }
          }
          if (dd < files.length - 1) {
            dd++
          } else {
            clearInterval(timer)
          }
        }, 1000)
      }
    },
    getTime () {
      let date = new Date()
      let seperator1 = '-'
      let seperator2 = ':'
      let month = date.getMonth() + 1
      let strDate = date.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = '0' + strDate
      }
      let currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
                    ' ' + date.getHours() + seperator2 + date.getMinutes() +
                    seperator2 + date.getSeconds()
      return currentdate
    }
  }
}
</script>

<style lang="less" scoped>
.com-upload-img{
    text-align: center;
    p.center{
        width: 100%;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
    }
    .img_group{
        width: 100%;
        height: auto;
        padding: .1rem .1rem;
        .img_box{
            .logo{
                width: 100%;
                height: 5.5rem;
                background:url('../../assets/upload.svg');
                background-position: center center;
                background-size: contain;
                background-repeat: no-repeat;
                position: absolute;
                top: 2rem;
                left: 0;
            }
            .input{
                width: 100%;
                height: 5.5rem;
                border: 1px solid red;
                opacity: 0;
                position: absolute;
                top: 2rem;
                left: 0;
            }
        }
        .imgCon{
            width: 100%;
            height: 15rem;
            border: .01rem dashed orange;
            margin-top: 6rem;
            padding: .2rem .2rem;
            .img_box2:nth-child(odd){
                width: 45%;
                height: 7rem;
                float: left;
                margin-top: .2rem;
                margin-left: .2rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .img_box2:nth-child(even){
                width: 45%;
                height: 7rem;
                float: right;
                margin-top: .2rem;
                margin-right: .2rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .muiBtn-commits{
            width: 12rem;
            height: 2.5rem;
            background:orange;
            border:none;
            margin-top: .3rem;
            color: white;
        }
    }
}
</style>
