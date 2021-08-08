<template>
  <div id="category-bar">
    <category-bar-item path="/category" title="出行导航"></category-bar-item>
    <category-bar-item path="/category/ertong" title="儿童"></category-bar-item>
    <category-bar-item path="/category/gouwubijia" title="购物比价"></category-bar-item>
    <category-bar-item path="/category/jinronglicai" title="金融理财"></category-bar-item>
    <category-bar-item path="/category/lvxingzhusu" title="旅行住宿"></category-bar-item>
    <category-bar-item path="/category/meishi" title="美食"></category-bar-item>
    <category-bar-item path="/category/paishemeihua" title="拍摄美化"></category-bar-item>
    <category-bar-item path="/category/shangwu" title="商务"></category-bar-item>
    <category-bar-item path="/category/shejiaotongxun" title="社交通讯"></category-bar-item>
    <category-bar-item path="/category/shiyonggongju" title="实用工具"></category-bar-item>
    <category-bar-item path="/category/xiaochengxu" title="小程序"></category-bar-item>
    <category-bar-item path="/category/xinwenyuedu" title="新闻阅读"></category-bar-item>
    <category-bar-item path="/category/yingyingyule" title="影音通讯"></category-bar-item>
    <category-bar-item path="/category/yundongjiankang" title="运动健康"></category-bar-item>
  </div>

</template>

<script>
  import CategoryBarItem from "@/views/category/CategoryBarItem";
  export default {
    name: "CategoryBar",
    components: {
      CategoryBarItem
    }
  }
</script>

<style scoped>
  #category-bar{
    display: flex;
    flex-wrap: wrap;
    padding: 30px 30px 20px 30px;
    background-color: var(--color-background);
    box-sizing: border-box;
    position: sticky;
    top: 0;
    line-height: 26px;
    font-weight: 700;
  }
</style>
