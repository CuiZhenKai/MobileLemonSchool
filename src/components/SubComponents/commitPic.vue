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
                <button type="button"  class="mui-btn mui-btn-primary muiBtn-commit" @click="commitImg" >发布二货</button>
            </div>
        </div>
    
</template>
 
<script>
export default {
    name:'ComUpLoad',
    data () {
        return {
            imgData:'',
            imgArr:[],
            imgSrc:'',
            allowAddImg:true,
            pic:'选择图片'
        }
    },
    created(){
        this.$store.state.showTabBar = false;
    },
    methods: {
        commitImg(){
            // console.log(this.imgArr.length===0);
            let p = this.imgArr.length===0;
            if(p){
                this.mui.toast("请至少上传一张图片");
                return;
            }
            console.log(this.imgArr);
            let data = {
                imgArr:this.imgArr
            }
            // console.log(data);
        },
        changeImg: function(e) {
            var _this = this;
            var imgLimit = 1024;
            var files = e.target.files;
            var image = new Image();
            if(files.length>0){
                var dd = 0;
                var timer = setInterval(function(){
                    if(files.item(dd).type != 'image/png'&&files.item(dd).type != 'image/jpeg'&&files.item(dd).type != 'image/gif'){
                        return false;
                    }
    
                if(files.item(dd).size>imgLimit*102400){
                    //to do sth
                }else{
                    image.src = window.URL.createObjectURL(files.item(dd));
                    image.onload = function(){
                    // 默认按比例压缩
                    var w = image.width,
                    h = image.height,
                    scale = w / h;
                    w = 200;
                    h = w / scale;
                    // 默认图片质量为0.7，quality值越小，所绘制出的图像越模糊
                    var quality = 0.7;
                    //生成canvas
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    // 创建属性节点
                    var anw = document.createAttribute("width");
                    anw.nodeValue = w;
                    var anh = document.createAttribute("height");
                    anh.nodeValue = h;
                    canvas.setAttributeNode(anw);
                    canvas.setAttributeNode(anh);
                    ctx.drawImage(image, 0, 0, w, h);
                    var ext = image.src.substring(image.src.lastIndexOf(".")+1).toLowerCase();//图片格式
                    var base64 = canvas.toDataURL("image/"+ext, quality );
                    // 回调函数返回base64的值
                    if(_this.imgArr.length<=4){
                        _this.imgArr.unshift('');
                        _this.imgArr.splice(0, 1, base64);//替换数组数据的方法，此处不能使用：this.imgArr[index] = url;
                    if(_this.imgArr.length>=4){
                        _this.allowAddImg = false;
                    }
                }
            }
        }
        if(dd<files.length-1){
            dd++;
        }else{
            clearInterval(timer);
        }
        },1000)
        }
    },
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
        .muiBtn-commit{
            width: 12rem;
            height: 2.5rem;
            background:orange;
            border:none;
            margin-top: .3rem;
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
                border: 1px solid #eee;
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
        }
    }
</style>
