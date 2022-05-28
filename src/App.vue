<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import MainNavBar from "./components/content/tabbar/MainNavBar";
import TopHeader from "./components/content/header/TopHeader";
import RightContent from "./components/content/rightContent/RightContent";
export default {
  name: 'App',
  components: {RightContent, MainNavBar,TopHeader},

}
</script>

<style lang="less">
  @import "assets/css/base.css";
  #app{
    display: flex;
    justify-content: center;
    flex: 1;
    margin:0 auto;
  }
  .middle-content-main{
    display: flex;
    flex: 1;
    justify-content: flex-start;
  }
</style>
