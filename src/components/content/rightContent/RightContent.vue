<template>
  <div id="rightContent">
    <right-header></right-header>
    <div class="right-details-content">
      <right-details name="热门应用"></right-details>
      <right-details name="热门搜索"></right-details>
    </div>

  </div>
</template>

<script>
  import RightDetails from "@/components/content/rightContent/RightDetails";
  import RightHeader from "@/components/content/rightContent/RightHeader";
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
  .right-details-content{
  }

</style>
