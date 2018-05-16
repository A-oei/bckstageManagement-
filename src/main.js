// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//引入es6-promise 兼容ie等不支持promise语法的浏览器
import 'es6-promise'

//导入element-ui
//样式
import 'element-ui/lib/theme-chalk/index.css';
//表单、导航,菜单
// import From from 'element-ui'
// Vue.use(From)
// import NavMenu from 'element-ui'
// Vue.use(NavMenu)
// import Dropdown from 'element-ui'
// Vue.use(Dropdown)
import ElementUI from 'element-ui';

Vue.use(ElementUI)

//引入axios
import axios from 'axios'

Vue.prototype.$http = axios

//引入vuex
import store from './store'

//引入富文本
import VueQuillEditor from 'vue-quill-editor'
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor, /* { default global options } */)

//图片裁剪
//


/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>',
})

//全局判断是否需要登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(item => {
      console.log(item.meta.requireLogin, "meta字段");
      return item.meta.requireLogin
    }))
  //存在meta字段requireLogin,是需要登录的页面
  {
    //判断用户是否登录，vuex的方法
    console.log('需要登录的界面');
    if (vm.$store.state.user == "") {
      console.log("未登录，需要登录")
      next("/login");
    } else {
      console.log('已经登录,不需要登录');
      next();
    }
  } else {
    //是不需要登录的页面
    console.log("不需要的登录的界面")
    next();
  }
})

