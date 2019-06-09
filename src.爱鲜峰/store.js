import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        buylist:[],
        allflag:false
    },
    getters:{
        getbuylist(state){
            return state.buylist
        },
        gettotalCount(state){
            return state.buylist.reduce((p,n)=>p+n.count,0);
        },
        gettotalPrice(state){
            return state.buylist.filter(item=>item.flag).reduce((p,n)=>p+n.count*n.price,0);
        },
        allflag(state){
            return state.allflag;
        }
    },
    mutations:{
        addCar(state,{item}){
            let ind = state.buylist.findIndex(items=>items.id == item.id);
            if(ind == -1){
                state.buylist.push(item);
            } 
        },
        flagFn(state,index){
            state.buylist[index].flag = !state.buylist[index].flag
            state.allflag = state.buylist.every(item=>item.flag);
        },
        allFn(state){
            state.allflag = !state.allflag;
            state.buylist.forEach(item=>item.flag=state.allflag);
        },
        adddel(state,{ind,n}){
            state.buylist[ind].count = n;
        }
    },
    actions:{
        
    }
})