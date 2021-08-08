<template>
  <div id="ranking-bar">
    <ranking-item title="热门主播"></ranking-item>
    <ranking-item title="预约榜"></ranking-item>
    <ranking-item title="热卖榜"></ranking-item>
    <ranking-item title="云玩榜"></ranking-item>

  </div>
</template>

<script>
  import RankingItem from "@/views/ranking/RankingItem";
  export default {
    name: "RankingBar",
    components: {
      RankingItem
    }
  }
</script>

<style scoped>
  #ranking-bar{
    display: flex;
    flex: 1;
    padding: 30px 30px 20px 30px;
    background-color: var(--color-background);
    box-sizing: border-box;
    position: sticky;
    top: 0;
    line-height: 26px;
    font-weight: 700;
  }
</style>
