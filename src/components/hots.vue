<template>
    <div :class="classname">
        <h3><span>|</span><b>{{title}}</b></h3>
        <dl v-for="(item,index) in data" :key=index @click="detailFn(item.fiction_id,item.title)" >
            <dt>
                <img v-lazy="item.cover">
            </dt>
            <dd>
                <p>{{item.title}}</p>
                <p>{{item.authors}}</p>
                <div v-if="classname == 'lefts'">
                    <p>{{item.summary}}</p>
                    <p>{{item.latest}}</p>
                </div>
            </dd>
        </dl>
    </div>
</template>
<script>
export default {
    props:["title","data","classname"],
    data(){
        return {
            bools:this.bool
        }
    },
    methods:{
        detailFn(id,title){
            console.log(id,title);
            this.$router.push({name:'detail',params:{id},query:{title}})
        }
    }
}
</script>
<style  lang="scss">
.hots{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    >h3{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >span{
            width: 10px;
            height: 80%;
            font-weight: 1000;
            color:#f90;
            margin-left:10px;
        }
        >b{
            flex:1;
        }
    }
    >dl{
        width: 33.33%;
        padding:5px 10px;
        display: flex;
        flex-direction: column;
        >dt{
            width: 100%;
            height: 150px;
            >img{
                width: 100%;
                height:100%;
            }
        }
        >dd{
            flex:1
        }
    }
}
.lefts{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    >h3{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        >span{
            width: 10px;
            height: 80%;
            font-weight: 1000;
            color:#f90;
            margin-left:10px;
        }
        >b{
            flex:1;
        }
    }
    >dl{
        width: 94%;
        margin-left:3%;
        display: flex;
        margin-top:10px;
        >dt{
            width: 120px;
            height: 160px;
            >img{
                width: 100%;
                height:100%;
            }
        }
        >dd{
            flex:1
        }
    }
}
</style>