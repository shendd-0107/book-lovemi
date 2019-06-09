
export default{
    install(Vue){
        Vue.component("myheader",() => import("../components/header.vue"));
        Vue.component("Search",() => import("../components/search.vue"));
    }
}