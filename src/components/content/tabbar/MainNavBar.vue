<template>
  <tab-bar id="tab-bar">
      <div class="icon-i">
        <img src="~assets/img/taptap.png" alt="">
      </div>
      <tab-bar-item path="/home" activeColor="#1296db">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/ranking" activeColor="#1296db">
        <img slot="item-icon" src="~assets/img/tabbar/ranking.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/ranking_active.svg" alt="">
        <div slot="item-text">排行榜</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#1296db">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
  import TabBar from "@/components/content/tabbar/TabBar";
  import TabBarItem from "@/components/content/tabbar/TabBarItem";
  import Icon from "@/components/content/icon/Icon";
  export default {
    name: "MainNavBar",
    components: {
      TabBarItem,
      TabBar, Icon
    }
  }
</script>

<style scoped>
  #tab-bar{
    width: 250px;
    position: sticky;
    top: 0;
    height: 100%;
    margin-left: 5px;
  }
  .icon-i{
    width: 100px;
    margin: 0 auto;
  }
</style>
