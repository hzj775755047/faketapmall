<template>
  <div id="ranking-middle-content">
    <!--上面标题栏-->
    <ranking-bar></ranking-bar>
    <!--下面应用内容-->
    <router-view></router-view>
  </div>
</template>

<script>
  import RankingBar from "@/views/ranking/RankingBar";
  export default {
    name: "RankingMiddleContent",
    components: {
      RankingBar
    }
  }
</script>

<style scoped>

</style>
