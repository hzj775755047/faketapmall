<template>
  <tab-bar id="main-tab-bar">
    <div @click="toHome" class="icon-i">
      <img src="~assets/img/taptap.png" alt="">
    </div>
    <tab-bar-item path="/main/home" activeColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/main/ranking" activeColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/ranking.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/ranking_active.svg" alt="">
      <div slot="item-text">排行榜</div>
    </tab-bar-item>
    <tab-bar-item path="/main/category" activeColor="#1296db">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
<!--    <tab-bar-item path="/upload" activeColor="#1296db">-->
<!--      <img slot="item-icon" src="~assets/img/tabbar/upload.svg" alt="">-->
<!--      <img slot="item-icon-active" src="~assets/img/tabbar/upload_active.svg" alt="">-->
<!--      <div slot="item-text">开发者</div>-->
<!--    </tab-bar-item>-->
  </tab-bar>
</template>

<script>
  import TabBar from "@/components/content/tabbar/TabBar";
  import TabBarItem from "@/components/content/tabbar/TabBarItem";
  import Icon from "@/components/content/icon/Icon";
  export default {
    name: "MainNavBar",
    components: {TabBarItem, TabBar, Icon},
    methods: {
      toHome(){
        this.$router.push('/main/home');
      }
    }
  }
</script>

<style scoped>
  #main-tab-bar{
    position: sticky;
    top: 0;
    width: 250px;
    height: 100%;
    margin-left: 5px;
  }
  .icon-i{
    width: 100px;
    margin: 0 auto;
    cursor: pointer;
  }
  .icon-i img{
    width: 100%;
    height: 100%;
  }
</style>
