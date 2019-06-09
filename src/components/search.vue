<template>
    <div class="search">
       
            <p @click="$router.push({name:'search'})">请输入作者，书名</p>
            <span v-show="flag" @click="$emit('flagFn')">点击</span>
       
    </div>
</template>
<script>
export default {
    props:["flag"],
    data(){
        return {
            
        }
    },
    methods:{
      
    },
    created(){
        
    }
}
</script>
<style  lang="scss">
    .search{
        width: 100%;;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom:1px solid #ccc;
        color:#999;
        background: #fff;
        justify-content: space-between;
        >p{
            flex:1;
            margin-left:5%;
        }
        >span{
            width: 70px;
            height: 60%;
            display: flex;
            justify-content: center;
            align-items: center;
            background:  tomato;
            color:#fff;
            border-radius: 10px;

            margin-right:5%;
        }
    }
</style>