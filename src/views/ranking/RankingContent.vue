<template>
  <div id="ranking-content">
    <!--中间内容-->
    <application-content :data="rankingList" :titles="titles"></application-content>
    <!--右边内容-->
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";
  import {getRankingMultidata} from "@/network/ranking";

  export default {
    name: "RankingContent",
    components: {
      ApplicationContent, RightContent,
    },
    data(){
      return{
        titles: ['排行榜'],
        rankingList: null,
      }
    },
    created() {
      getRankingMultidata().then(res =>{
        this.rankingList = res;
      })
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
