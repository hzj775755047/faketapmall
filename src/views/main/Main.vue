<template>
  <div id="main">
    <!-- 左侧导航栏 -->
    <main-nav-bar/>
    <!-- 右侧主内容栏 -->
    <div id="middle-content">
      <top-header/>
      <div class="middle-content-main">
        <router-view></router-view>
        <right-content/>
      </div>
    </div>
  </div>
</template>

<script>

import MainNavBar from "../../components/content/tabbar/MainNavBar";
import TopHeader from "../../components/content/header/TopHeader";
import RightContent from "../../components/content/rightContent/RightContent";
export default {
  name: "Main",
  components: {RightContent, TopHeader, MainNavBar},
}
</script>

<style scoped>
  #main{
    height: 100%;
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
