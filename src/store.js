import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
import Swiper from "swiper"
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        home:[],
        recommend1:[],
        homebanner:[],
        booklist:[],
        detail:{},
        msg:""
    },
    getters:{
        gethomebanner(state){
            return state.homebanner;
        },
        getbooklist(state){
            // console.log(state.booklist)
            return state.booklist;
        },
        getdetail(state){
            return state.detail;
        },
        
    },
    mutations:{
        sethome(state,obj){
            state.home = obj,
            state.booklist = state.home[1]
            state.homebanner = state.home[0].data.data;
        },
        setdetail(state,obj){
            state.detail = obj;
        },
        msg(state,str){
            state.msg = str;
        }
    },
    actions:{
        homeFn({commit},obj){
            axios.get("/api/home").then(res=>{
                commit("sethome",res.data.items);
                obj(()=>{
                    new Swiper(".banners",{
                        loop:true,
                        autoplay:true
                    })
                })
            })
        },
        detailFn({commit},id){
            axios.get("/api/detail?id="+id).then(res=>{
                commit("msg","");
                if(res.data.code==1){
                    commit('setdetail',res.data.datas.item);
                }
                else{
                    
                    commit("msg",res.data.msg);
                }
            })
        }
    }
})