<template>
  <div id="detail-content">
    <application-detail></application-detail>
    <right-content></right-content>
  </div>
</template>

<script>
  import RightContent from "@/components/content/rightContent/RightContent";
  import ApplicationDetail from "@/views/detail/ApplicationDetail";
  export default {
    name: "DetailContent",
    components: {
      RightContent, ApplicationDetail
    }
  }
</script>

<style scoped>
  #detail-content{
    margin: auto;
    display: flex;
    flex: 1;
  }
</style>
