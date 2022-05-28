<template>
  <div id="search">
    <search-content/>
  </div>
</template>

<script>
import SearchContent from "./SearchContent";
import {search} from "../../network/api";

export default {
  name: "Search",
  components: {SearchContent},

}
</script>

<style scoped>
  #search{
    width: 600px;
    margin: 0 20px 0 20px;
  }
</style>
