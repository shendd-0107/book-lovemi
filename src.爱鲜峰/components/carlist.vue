<template>
    <dl>
        <dt><span :class="['check',{active:item.flag}]" @click="flagFn(index)"></span></dt>
        <dd>
            <p><img :src="item.img" alt=""></p>
            <li>
                <p>{{item.title}}</p>
                <p>{{item.price}}</p>
            </li>
        </dd>
        <dt>
            <span @click="adddel({ind:index,n:item.count-1})">-</span>
            <span>{{item.count}}</span>
            <span @click="adddel({ind:index,n:item.count+1})">+</span>
        </dt>
    </dl>
</template>
<script>
import {mapMutations} from "vuex";
export default {
    props:['item',"index"],
    
    methods:{
        ...mapMutations(['flagFn','adddel'])   
    }
}
</script>
<style  lang="scss">
    dl{
        width: 100%;
        height: 120px;
        display: flex;
        border-bottom:1px solid #eee;
        >dt{
            width: 100px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .check{
                display: inline-block;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                border:1px solid #ccc;
                
            }
            >.active{
                background: #f90;
            }
        }
        >dd{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            >p{
                flex:1;
                >img{
                    width: 100%;;
                    height: 50%;
                }
            }>li{
                width: 120px;
                height: 100%;
                list-style: none;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                >p{
                    // align-items: center;
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }
</style>