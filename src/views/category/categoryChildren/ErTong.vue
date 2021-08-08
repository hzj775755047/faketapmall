<template>
  <div id="er-tong">
    <categoryApplication :rank-num="1"></categoryApplication>
    <categoryApplication :rank-num="1"></categoryApplication>
    <categoryApplication :rank-num="1"></categoryApplication>

  </div>
</template>

<script>
  import CategoryApplication from "@/views/category/CategoryApplication";
  export default {
    name: "ErTong",
    components: {
      CategoryApplication,
    }
  }
</script>

<style scoped>
  #er-tong{
    background-color: #fff;
    border-radius: var(--primary-border-radius);
  }
</style>
