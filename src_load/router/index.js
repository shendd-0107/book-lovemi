import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import("../views/home.vue")
const Now = ()=>import("../views/now.vue")
const Load = ()=>import("../views/load.vue")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/now',
      name: 'now',
      component: Now
    },
    {
      path: '/load',
      name: 'load',
      component: Load
    }
  ]
})
