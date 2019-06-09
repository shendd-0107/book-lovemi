<template>
    <div>
        <myheader>
            <span>O</span>
            <span><router-link to="/">书架</router-link></span>
            <span><router-link to="/bookcity">书城</router-link></span>
            <span>O</span>
        </myheader>
        <div class="main">
            <Search :flag=flag @flagFn=flagFn></Search>
            <div v-if="!getbooklist.data">
                loading...
            </div>
            <myhots v-else 
            :title=getbooklist.ad_name 
            :data=getbooklist.data.data 
            :classname="classHots">
                
            </myhots>
        </div>
    </div>
</template>
<script>
import myhots from "../components/hots"
import {mapGetters} from "vuex";
export default {
    data(){
        return {
            flag:true,
            classHots:'hots'
        }
    },
    components:{
        myhots
    },
    computed:{
        ...mapGetters(["getbooklist"])
    },
    methods:{
        flagFn(){
            this.classHots = this.classHots == 'hots' ? 'lefts' : 'hots'
            console.log(this.classHots);
        }
    },
    created(){
        console.log(this.getbooklist);
    }
}
</script>
<style scoped lang="">

</style>