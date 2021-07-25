<template>
  <div id="app">
    <!-- 左部导航栏   -->
    <main-nav-bar id="main-tab-bar"/>
    <!-- 右边内容栏   -->
    <div class="content"><router-view></router-view></div>
  </div>
</template>

<script>
  import MainNavBar from "@/components/content/tabbar/MainNavBar";
  export default {
    name: 'App',
    components: {
      MainNavBar,
    },
  }
</script>

<style>
  @import "assets/css/base.css";
  #app{
    display: flex;
    justify-content: center;
    flex: 1;
    margin: 0 auto;
  }
  #main-tab-bar{
    margin-left: 20px;
  }
</style>
