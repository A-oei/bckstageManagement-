import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//路由设计思路
//1.外层路由共有三个 登录、404、首页系统
//2.首页系统下放置子路由 侧边栏和顶部导航栏为子路由

//采用异步组件的写法
export default new Router({
  routes: [
    {
      path: '/Login',
      name: 'login',
      component: reolve=>require(['components/Login'],reolve),
    },
    {
      path: "/",
      name: "home",
      component: reolve=>require(['components/Home'],reolve),
      meta:{
        requireLogin:true,
      },
      children: [
        {
          path:'/chart',
          component:resolve=>require(['page/Chart'],resolve)
        },
        {
          path:'/baidiMap',
          component:resolve=>require(['page/BaiduMap'],resolve)
        },
        {
          path: '/user',
          component: reolve=>require(['page/HomeUser'],reolve),
        },
        {
          path:'/clipping',
          component:resolve=>require(['page/ImgClipping'],resolve)
        },
        {
          path:"/loginLog",
          component: reolve=>require(['page/LoginLog'],reolve),
        },
        {
          path:'/companyLists',
          component: reolve=>require(['page/CompanyNews'],reolve),
        },
        {
          path:'/editor/:id',
          component: reolve=>require(['page/Editor'],reolve),
        }
      ]
    },
    {
      path: '*',
      name: '404',
      component: reolve=>require(['components/404'],reolve),
    }
  ]
})
