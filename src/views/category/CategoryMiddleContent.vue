<template>
  <div id="category-middle-content">
    <!--上边分类栏-->
    <category-bar :categories="categories"></category-bar>
    <!--下边内容栏-->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import CategoryBar from "@/views/category/CategoryBar";
  import CategoryApplication from "@/views/category/CategoryApplication";
  import {getCategories} from "@/network/category";
  export default {
    name: "CategoryMiddleContent",
    components: {
      CategoryBar,CategoryApplication
    },
    data(){
      return {
        categories: null,
      }
    },
    created() {
      getCategories().then(res =>{
        this.categories = res.data;
      })
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
