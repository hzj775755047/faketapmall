<template>
  <div id="app">
    <!-- 左部导航栏   -->
    <main-nav-bar/>
    <!-- 右边内容栏   -->
    <div id="middle-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import RightHeader from "@/components/content/rightContent/RightHeader";
  import MainNavBar from "@/components/content/tabbar/MainNavBar";
  export default {
    name: 'App',
    components: {
      MainNavBar, RightHeader
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

</style>
