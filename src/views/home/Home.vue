<template>
  <div id="home">
    <home-content></home-content>
  </div>
</template>

<script>
  import HomeContent from "@/views/home/HomeContent";

  export default {
    name: "Home",
    components: {
      HomeContent,
    },
  }
</script>

<style scoped>
  #home{
    width: 800px;
    margin: 0 20px 0 20px;
  }
</style>
