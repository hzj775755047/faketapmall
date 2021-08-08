<template>
  <div id="home-content">
    <application-content :titles="titles"></application-content>
    <right-content></right-content>
  </div>
</template>

<script>
  import ApplicationContent from "@/components/content/middleContent/ApplicationContent";
  import RightContent from "@/components/content/rightContent/RightContent";
  export default {
    name: "HomeContent",
    components: {
      ApplicationContent, RightContent,
    },
    data(){
      return {
        titles: ['推荐']
      }
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
