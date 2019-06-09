import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store";
import axios from "axios"
import VueLazyload from "vue-lazyload";
import plugins from "./plugins/index"
import "swiper/dist/css/swiper.min.css"

Vue.config.productionTip = false

Vue.use(plugins);
Vue.use(VueLazyload,{
  preLoad:1.3,
  loading:"../static/logo.png",
  attempt:1
});
Vue.prototype.$http = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
