<template>
  <div id="ranking-content">
    <application-content title="排行榜"></application-content>
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";

  export default {
    name: "RankingContent",
    components: {
      ApplicationContent, RightContent
    }
  }
</script>

<style scoped>
  #ranking-content{
    margin: auto;
    display: flex;
    flex: 1;
  }
</style>
