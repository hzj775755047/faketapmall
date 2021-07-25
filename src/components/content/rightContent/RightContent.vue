<template>
  <div id="rightContent">
    <right-header></right-header>
    <right-details name="热门游戏"></right-details>
    <right-details name="热门搜索"></right-details>
  </div>
</template>

<script>
  import RightHeader from "@/components/content/rightContent/RightHeader";
  import RightDetails from "@/components/content/rightContent/RightDetails";
  export default {
    name: "RightContent",
    components: {
      RightDetails, RightHeader
    },
  }
</script>

<style scoped>
  #rightContent{
  }
</style>
