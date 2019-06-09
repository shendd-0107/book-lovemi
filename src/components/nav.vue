<template>
  <div class="navbox">
    <div class="nav-every" v-for="(item,index) in 5" :key="index">
      <span>O</span>
      <span>{{item}}++</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  lang="scss">
.navbox {
  width: 100%;
  height: 70px;
  display: flex;
  background: #fff;
  margin-bottom:10px;
  > .nav-every {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > span:first-child {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    > span:last-child {
      width: 100%;
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>