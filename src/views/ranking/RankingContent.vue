<template>
  <div id="ranking-content">
    <ranking-item v-for="(item, index) in hotTopList" :index="index + 1" :item="item"/>
  </div>
</template>

<script>
import Application from "../../components/content/application/Application";
import RankingItem from "./RankingItem";
import {getTopAttentionApp} from "../../network/api";

export default {
  name: "RankingContent",
  components: {RankingItem, Application},
  data(){
    return {
      hotTopList: []
    }
  },
  created(){
    getTopAttentionApp().then(res =>{
      let {status, msg, data} = res.data;
      if(status === 200){
        this.hotTopList = data;
      }else{
        this.$message.error(msg);
      }
    }).catch(err =>{
      this.$message.error(err);
    });
  }
}
</script>

<style scoped>
  #ranking-content{
    margin: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
