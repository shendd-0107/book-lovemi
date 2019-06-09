<template>
    <div>
        <p>用户名：<input type="text" v-model="name"></p>
        <p>密码：<input type="password" v-model="pwd"></p>
        <p><button type="button" @click="subFn">提交</button></p>
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            name:"",
            pwd:''
        }
    },
    computed:{

    },
    methods:{
        subFn(){
            if(this.name=="qqq"&&this.pwd=="1234"){
                window.localStorage.setItem("name","YES");
                this.$router.push({name:'read'});
            }
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>