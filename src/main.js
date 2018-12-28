// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './assets/css/mui.min.css'
import mui from './assets/js/mui.min.js'
import './app.css'
import {getRem} from './rem.js';


//导入请求数据所需要的插件
import VueResource from 'vue-resource';
//安装
Vue.use(VueResource);




Vue.prototype.getRem = getRem
Vue.prototype.mui = mui
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
