import Vue from "vue"
export default {
    install(Vue){
        Vue.component('myheader',()=>import("../components/header.vue")),
        Vue.component('myfooter',()=>import("../components/footer.vue"))
    }
}