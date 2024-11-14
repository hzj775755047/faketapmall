<template>
  <div>
  <tab-bar id="main-tab-bar">
    <div @click="toHome" class="icon-i">
      <img src="~assets/img/taptap.png" alt="" class="imgi">
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
  <!-- <div class="tap-footer layout-header__footer">
    <div class="tap-footer__link-group flex-center--y mt-12">開發者法律EULA隱私</div>
    <div class="tap-footer__text mt-12">© 2024 TapTap</div>
    <div>
      <span class="tap-footer__share-title">關注一下囉。</span>
      <div class="flex-center--y mt-12"></div>
    </div>
  </div> -->
  </div>
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
 @media only screen and (max-width: 600px) {
  #main-tab-bar{
    left:0px !important;
    height: 100px  !important ; 
    width: 100%  !important;
  }
  .icon-i{
    opacity:0 !important;
  }
  .imgi{
    
  }
       

        
  }
  #main-tab-bar{
    position: fixed;
    left:270px;
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
  .layout-header__footer{
    position: absolute;
    bottom: 20px;
  }
</style>
