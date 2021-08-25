<template>
  <div id="home-content">
    <application-content :data="applicationList" :titles="titles"></application-content>
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";
  import {getHomeMultidata} from "@/network/home";
  export default {
    name: "HomeContent",
    components: {
      ApplicationContent, RightContent,
    },
    data(){
      return {
        titles: ['推荐'],
        applicationList: null,
      }
    },
    created() {
      // 获取应用列表数据
      getHomeMultidata().then(res =>{
        this.applicationList = res.data;
      })
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
