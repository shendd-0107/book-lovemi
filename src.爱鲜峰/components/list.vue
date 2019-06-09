<template>
    <div class="list">
        <dt><img :src="item.img" alt=""></dt>
        <dd>
            <p>{{item.title}}</p>
            <p>{{item.cont}}</p>
            <p class="go"><span>{{item.price}}</span><span @click="addFn(item,index,item.id)"><button>go</button></span></p>
        </dd>
    </div>
</template>
<script>
import {mapMutations,mapGetters} from "vuex";
export default {
    props:["item","index"],
    computed:{
        ...mapGetters(["getbuylist"])  
    },
    methods:{
        ...mapMutations(['addCar']),
        addFn(item,indexs){
            let count = 0;
            let ind = this.getbuylist.findIndex(item1=>item1.id == item.id)
            if(ind == -1){
                this.$set(item,'count',1);
                this.$set(item,'flag',false);
            }
            else{
                this.getbuylist[ind].count++;
            }
            this.addCar({item,index:indexs});
            console.log(this.getbuylist)
        }
    }
}
</script>
<style  lang="scss">
    .list{
        width: 120px;
        height: 180px;
        display: flex;
        float: left;
        flex-direction: column;
        margin:5px;
        >dt{
            width: 100%;
            height: 100px;
            >img{
                width: 100%;
                height: 100%;
            }
        }
        >dd{
            flex:1;
            display: flex;
            flex-direction: column;
            margin-top:10px;
            >p{
                flex:1;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            >.go{
                display: flex;
                >span{
                    flex:1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    button{
                        width: 50px;
                        height: 25px;
                        color:#fff;
                        border:0;
                        background: #f90;
                    }
                }
                
            }
        }
    }
</style>