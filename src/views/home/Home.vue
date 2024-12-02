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
    width: 60%;
    margin-left:30%;
  }
</style>
