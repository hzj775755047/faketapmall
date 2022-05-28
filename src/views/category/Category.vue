<template>
  <div id="category">
    <category-content/>
  </div>
</template>

<script>
import CategoryContent from "./CategoryContent";
export default {
  name: "Category",
  components: {CategoryContent}
}
</script>

<style scoped>
  #category{
    width: 600px;
    margin: 0 20px 0 20px;
  }
</style>
