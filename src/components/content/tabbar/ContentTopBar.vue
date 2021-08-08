<template>
  <div id="content-top-bar">
    <content-top-bar-title v-for="title in titles" :key="title.id" :title="title"></content-top-bar-title>
  </div>
</template>

<script>
  import ContentTopBarTitle from "@/components/content/tabbar/ContentTopBarTitle";
  export default {
    name: "ContentTopBar",
    components: {
      ContentTopBarTitle
    },
    props: {
      titles: Array
    }
  }
</script>

<style scoped>
  #content-top-bar{
    display: flex;
    flex: 1;
    padding: 30px 30px 20px 30px;
    background-color: var(--color-background);
    box-sizing: border-box;
    position: sticky;
    top: 0;
    line-height: 26px;
    font-weight: 700;
  }
</style>
