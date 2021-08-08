<template>
  <div id="category-content">
    <!--中间内容-->
    <category-middle-content></category-middle-content>
    <!--右边部分-->
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";
  import CategoryMiddleContent from "@/views/category/CategoryMiddleContent";
  export default {
    name: "CategoryContent",
    components: {
      ApplicationContent, RightContent,CategoryMiddleContent
    },
    data(){
      return{
        titles: ['分类']
      }
    }

  }
</script>

<style scoped>
  #category-content{
    margin: auto;
    display: flex;
    flex: 1;
  }
</style>
