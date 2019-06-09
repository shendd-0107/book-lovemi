<template>
    <div class="wrap">
        <myheader><span>首页</span></myheader>
        <div class="main">
            <div class="banner">
                <div class="banner-top">
                   <span>西二旗附近</span>
                   <span>搜索</span>
                </div>
                <div class="banner-bottom">
                    <div class="swiper-container topbanner">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <img src="https://img03.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi02piccdn.sogoucdn.com%2Ffd01e35ad3e254a6&appid=122" alt="">
                            </div>
                            <div class="swiper-slide">
                                <img src="https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi02piccdn.sogoucdn.com%2F9656f0d31dd91a14&appid=122" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="week">-·-·- 本周特价 -·--·-</p>
            <div class="listbox">
                <div class="longbox">
                    <mylist v-for="(item,index) in list" :key="index" :item=item :index=index></mylist>
                </div>
            </div>
            <div class="img">
                <img src="https://img04.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi02piccdn.sogoucdn.com%2F9656f0d31dd91a14&appid=122" alt="">
            </div>
            <div class="img">
                <img src="https://img03.sogoucdn.com/net/a/04/link?url=https%3A%2F%2Fi02piccdn.sogoucdn.com%2Ffd01e35ad3e254a6&appid=122" alt="">
            </div>
        </div>
        <myfooter></myfooter>
    </div>
</template>
<script>
import mylist from "../components/list"
import Swiper from "swiper"
export default {
    data(){
        return {
            list:[]
        }
    },
    components:{
        mylist
    },
    created(){
        this.$http.get("/api/list").then(res=>{
            this.list = res.data;
        })
        this.$nextTick(()=>{
            new Swiper(".topbanner",{
                loop:true,
                autoplay:true
            })
        })
    }
}
</script>
<style  lang="scss">
.wrap{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    header,footer{
        width: 100%;
        height: 50px;
        background: #fff;
    }
    .main{
        flex:1;
        overflow: auto;
        >.banner{
            width: 100%;
            height: 230px;
            >.banner-top{
                width: 100%;
                height: 170px;
                background: #f90;
                // color:#fff;
                display: flex;
                justify-content: space-between;
                >span{
                    margin:5px 15px;
                }
            }
            >.banner-bottom{
                width: 90%;
                height: 50px;
                background: #fff;
                margin-left:5%;
                position: relative;
                >.topbanner{
                    width: 100%;
                    height: 180px;
                    position: absolute;
                    border-radius: 10px;
                    overflow: hidden;
                    bottom:0;
                    left:0;
                    >.swiper-wrapper{
                        width: 100%;
                        height: 100%;
                        >.swiper-slide{
                            width: 100%;
                            height: 100%;
                            >img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
        }
        >.week{
            width: 100%;
            height: 50px;
            text-align: center;
            line-height: 50px;;
            font-size: 20px;
        }
        >.listbox{
            width: 100%;
            height: 200px;
            overflow: auto;
            >.longbox{
                width: 250%;
                height: 100%;
                
            }
        }
        >.img{
            width: 90%;
            height: 150px;
            margin-top:10px;
            border-radius: 10px;
            margin-left:5%;
            >img{
                width: 100%;
                height: 100%;
            }
        }
    }
    
}
</style>