import Vue from 'vue'
import Router from 'vue-router'
const Home = ()=>import("../views/home.vue")
const Car = ()=>import("../views/car.vue")
const Profile = ()=>import("../views/profile.vue")
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
})
