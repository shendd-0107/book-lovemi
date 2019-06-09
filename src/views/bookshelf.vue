<template>
    <div class="wrap">
        <myheader >
            <span>O</span>
            <span><router-link to="/">书架</router-link></span>
            <span><router-link to="/bookcity">书城</router-link></span>
            <span>O</span>
        </myheader>
        <div class="main">
            <Search :flag=flag></Search>
            <div class="banner">
                <div class="swiper-container banners">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item,index) in gethomebanner" :key="index">
                            <img :src="item.ad_pic_url" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <mynav></mynav>
            <div v-if="!getbooklist.data">loading...</div>
            <div v-else>
                <myhots :title=getbooklist.ad_name :data=getbooklist.data.data classname="hots"></myhots>
                <myhots :title=getbooklist.ad_name :data=getbooklist.data.data classname="lefts"></myhots>
            </div>
            

        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
import mynav from "../components/nav"
import myhots from "../components/hots"
export default {
    data(){
        return {
            flag:false,
        }
    },
    components:{
        mynav,
        myhots
    },
    computed:{
        ...mapGetters(['gethomebanner',"getbooklist"])
    },
    methods:{
        ...mapActions(["homeFn"])
    },
    created(){
        this.homeFn(this.$nextTick);
        console.log(this.getbooklist,"---------------------->")
    }
}
</script>
<style lang="scss">
    
    .wrap{
        display: flex;
        flex-direction: column;
    }
    
    .main{
        flex:1;
        >.banner{
            width: 100%;
            height: 150px;
            margin-top:5px;
            >.banners{
                .swiper-wrapper{
                    width: 100%;
                    height: 150px;
                    >.swiper-slide{
                        width: 100%;
                        height: 150px;
                        >img{
                            width: 100%;
                            height: 150px;
                        }
                    }
                }
            }
            
        }
    }
</style>