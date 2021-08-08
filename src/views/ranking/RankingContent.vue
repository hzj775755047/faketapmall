<template>
  <div id="ranking-content">
    <!--中间内容-->
    <ranking-middle-content></ranking-middle-content>
    <!--右边内容-->
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";
  import BetterScroll from "@/components/common/scroll/BetterScroll";
  import RankingMiddleContent from "@/views/ranking/RankingMiddleContent";
  export default {
    name: "RankingContent",
    components: {
      ApplicationContent, RightContent,BetterScroll,RankingMiddleContent
    },
    data(){
      return{
        titles: ['热门主播', '预约榜', '热卖榜', '云玩榜', '热玩榜', '里番榜', '美女脱衣'],
      }
    }
  }
</script>

<style scoped>
  #ranking-content{
    margin: auto;
    display: flex;
    flex: 1;
  }
  .content{
    height: 300px;
    overflow: hidden;
  }
</style>
