<template>
  <div id="right-header">
    <!-- 搜索框    -->
    <div class="search">
      <img class="search-icon" src="~assets/img/index/search.svg" alt="">
      <input class="search-input" type="text" placeholder="搜索">
    </div>
    <!-- login图像   -->
    <img class="login-img" src="~assets/img/index/login.png" alt="">
  </div>
</template>

<script>

  export default {
    name: "RightHeader"
  }
</script>

<style scoped>
  #right-header{
    padding: 12px 14px 25px 0;
    line-height: 24px;
    display: flex;
    align-items: center;
    width: auto;
    position: sticky;
    top: 0;
    background-color: var(--color-background);
  }
  .search{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    display: flex;
    padding: 6px 13px;
    align-items: center;
    background-color: var(--primary-white);
  }
  .search-icon{
    width: 24px;
    cursor: pointer;
  }
  .search-input{
    border: none;
    margin-left: 8px;
    width: 100%;
    background: none;
  }
  .login-img{
    margin-left: 10px;
    width: 40px;
    cursor: pointer;
  }
</style>
