<template>
    <div class="wrap">
        <myheader><span>购物车</span></myheader>
        <div class="main">
           <div class="carlist">
               <mycarlist v-for="(item,index) in getbuylist" :key="index" :item=item :index=index></mycarlist>
           </div>
           <h3><span :class="['check',{active:allflag}]" @click=allFn></span>全选</h3>
           <h3>总价:￥<span>{{gettotalPrice}}</span></h3>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import mycarlist from "../components/carlist"
export default {
    props:{

    },
    components:{
        mycarlist
    },
    
    computed:{
        ...mapGetters(['getbuylist','gettotalPrice','allflag'])
    },
    methods:{
        ...mapMutations(["allFn"])
    },
    created(){
    }
    
}
</script>
<style  lang="scss">
.main{
    flex:1
}
h3{
    width: 90%;
    height: 40px;
    margin-left:10%;
    line-height: 50px;;
}
.check{
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border:1px solid #ccc;
    margin-right:10px;
}
.active{
    background: #f90;
}
</style>