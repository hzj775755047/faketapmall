<template>
  <div id="home-content">
    <application-content title="推荐"></application-content>
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";
  export default {
    name: "HomeContent",
    components: {
      ApplicationContent, RightContent
    }
  }
</script>

<style scoped>
  #home-content{
    margin: auto;
    display: flex;
    flex: 1;
  }
</style>
