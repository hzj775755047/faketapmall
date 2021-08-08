<template>
  <div id="category-middle-content">
    <!--上边分类栏-->
    <category-bar></category-bar>
    <!--下边内容栏-->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import CategoryBar from "@/views/category/CategoryBar";
  import CategoryApplication from "@/views/category/CategoryApplication";
  export default {
    name: "CategoryMiddleContent",
    components: {
      CategoryBar,CategoryApplication
    }
  }
</script>

<style scoped>
  #category-middle-content{
    width: 600px;
    margin-right: 10px;
  }
  .content{
    margin-right: 15px;
  }
</style>
