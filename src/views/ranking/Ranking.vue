<template>
  <div id="ranking">
    <ranking-content/>
  </div>
</template>

<script>
import RankingContent from "./RankingContent";
export default {
  name: "Ranking",
  components: {RankingContent}
}
</script>

<style scoped>
  #ranking{
    width: 600px;
    margin: 0 20px 0 20px;
  }
</style>
