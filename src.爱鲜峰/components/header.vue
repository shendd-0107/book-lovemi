<template>
    <header>
        <span @click="$router.go(-1)">《</span>
        <slot></slot>
        <span>》</span>
    </header>
</template>
<script>
export default {
    
}
</script>
<style  lang="scss">
header{
    width: 100%;
    height: 44px;
    border-bottom:1px solid #ccc;
    display: flex;
    >span{
        flex:1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>