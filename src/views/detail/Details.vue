<template>
  <div id="detail">
    <details-content/>
  </div>
</template>

<script>
import DetailsContent from "./DetailsContent";
export default {
  name: "Details",
  components: {DetailsContent},

}
</script>

<style scoped>
  #detail{
    width: 600px;
    margin: 0 20px 0 20px;
  }
</style>
