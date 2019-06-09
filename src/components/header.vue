<template>
    <header>
        
            <slot></slot>
        
    </header>
</template>
<script>
export default {
}
</script>
<style  lang="scss">
    header{
        width: 100%;
        height: 50px;
        border-bottom:1px solid #ccc;
        display: flex;
        background: #fff;
        >span{
            flex:1;
            display: flex;
            justify-content: center;
            align-items: center;
            >a.router-link-exact-active{
                color:#f90;
            }
        }
    }

</style>