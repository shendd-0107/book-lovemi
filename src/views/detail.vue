<template>
    <div>
        <myheader>
            <span @click=$router.go(-1)>《</span>
            <span>{{$route.query.title}}</span>
            <span>首页</span>
        </myheader>
        <div class="main">
            <div>{{$store.state.msg}}</div>
            <ul v-show="!$store.state.msg" class="detail">
                <dl>
                    <dt>
                        <img :src="$store.state.detail.cover" alt="">
                    </dt>
                    <dd>
                        <p>{{$store.state.detail.title}}</p>
                        <p>{{$store.state.detail.authors}}</p>
                        <p>{{$store.state.detail.rights}}</p>
                    </dd>
                </dl>
                <div class="read" >
                    <button type="button" class="click" @click="loginFn">点击阅读</button>
                    <button type="button">下载本书</button>
                </div>
            </ul>
            
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from "vuex";
export default {
    methods:{
        ...mapActions(['detailFn']),
        loginFn(){
            console.log(111);
            this.$router.push({name:"read"})
        }
    },
    computed:{
        ...mapGetters(["getdetail","getmsg"])
    },
    created(){
        this.detailFn(this.$route.params.id)
    }
}
</script>
<style  lang="scss">
    .detail{
        width: 100%;
        height: 150px;
        background: #fff;
        
        >dl{
            width: 94%;
            height: 100%;
            display: flex;
            margin-left:3%;
            >dt{
                width: 120px;
                height: 150px;
                >img{
                    width: 100%;
                    height: 100%;
                }
            }
            >dd{
                flex:1;
                display: flex;
                flex-direction: column;
                margin-left:10px;
                >p{
                    flex:1;
                }
            }
        }
        .read{
            width: 100%;
            height: 40px;
            display: flex;
            margin-top:10px;
            >button{
                flex:1;
                margin:0 5px;
                border:0;
                background: #fff;
            }
            >.click{
                background: #f90;
                color:#fff;
            }
        }
    }
</style>