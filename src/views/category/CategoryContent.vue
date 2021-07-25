<template>
  <div id="category-content">
    <application-content title="分类"></application-content>
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";
  export default {
    name: "CategoryContent",
    components: {
      ApplicationContent, RightContent
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
