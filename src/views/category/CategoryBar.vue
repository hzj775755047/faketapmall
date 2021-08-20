<template>
  <div id="category-bar">
    <category-bar-item :path="'/category/c'+(index+1)" v-for="(c,index) in categories" :data="c"></category-bar-item>
  </div>

</template>

<script>
  import CategoryBarItem from "@/views/category/CategoryBarItem";

  export default {
    name: "CategoryBar",
    components: {
      CategoryBarItem
    },
    props: {
      categories: Array,
    }
  }
</script>

<style scoped>
  #category-bar{
    display: flex;
    width: 600px;
    flex-wrap: nowrap;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 30px 30px 20px 30px;
    background-color: var(--color-background);
    box-sizing: border-box;
    position: sticky;
    top: 0;
    line-height: 26px;
    font-weight: 700;
    margin: auto;
  }
</style>
