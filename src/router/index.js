import Vue from 'vue'
import Router from 'vue-router'
import Bookcity from "@/views/bookcity"
import Bookshelf from "@/views/bookshelf"
import Search from "@/views/search"
import Detail from "@/views/detail"
import Login from "@/views/login"
import Read from "@/views/read"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/bookcity',
      name: 'bookcity',
      component: Bookcity
    },
    {
      path: '/',
      name: 'bookshelf',
      component: Bookshelf
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail,
      
    },
    {
      path:"/login",
      name:"login",
      component:Login,
      
    },
    {
      path:"/read",
      name:"read",
      component:Read,
      beforeEnter(to,from,next){
        if(window.localStorage.getItem("name")){
          next()
        }
        else{
          next("/login")
        }
      }
    }
  ]
})
