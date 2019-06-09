import Vue from 'vue'
import App from './App'
import router from './router'
import plugins from "./plugins"
import store from "./store";
import VueLazyload from "vue-lazyload";
import "swiper/dist/css/swiper.min.css"
Vue.config.productionTip = false

Vue.use(plugins)

Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:"../static/logo.png",
  attempt:1
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
