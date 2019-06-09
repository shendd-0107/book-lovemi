<template>
    <footer>
        <router-link to="/"><span>O</span><span>首页</span></router-link>
        <router-link to="/"><span>O</span><span>发现</span></router-link>
        <router-link to="/car"><span>O</span><span>购物车<b>{{gettotalCount}}</b> </span></router-link>
        <router-link to="/profile"><span>O</span><span>我的</span></router-link>
    </footer>
</template> 
<script>
import {mapGetters} from "vuex";
export default {
    computed:{
        ...mapGetters(['gettotalCount'])
    }
}
</script>
<style  lang="scss">
footer{
    width: 100%;
        height: 50px;
        background: #fff;
        display: flex;
        >a{
            flex:1;
            display: flex;
            flex-direction: column;
            >span{
                flex:1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
    }
</style>