import Vue from 'vue'
import VueRouter from 'vue-router'  //引入路由模块
import routes from './router.js' //导入路由配置文件
import ElementUI from 'element-ui'  //导入element-ui
import 'element-ui/lib/theme-default/index.css' //导入element-ui的css文件
import axios from 'axios'
import Vuex from 'vuex'
import store from './store.js' //引入vuex的配置文件
import App from './App.vue'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex)

// 修改原型链
Vue.prototype.$http = axios;

// 创建路由实例
const router = new VueRouter({
	routes
})

new Vue({
  el: '#app',
  router,
  store, //注入store
  render: h => h(App)
})
