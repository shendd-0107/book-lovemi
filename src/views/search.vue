<template>
    <div>
        <myheader>
            <span @click="$router.go(-1)">《</span>
            <input type="text" placeholder="请输入与您要查询的书籍名称">
            <span><button type="button">点击搜索</button> </span>
        </myheader>
    </div>
</template>
<script>

export default {
    
}
</script>
<style  lang="">
input{
    width: 60%;
    height: 50px;
    display: flex;
    align-items:center;
    outline: none;
    border:0;
}
</style>