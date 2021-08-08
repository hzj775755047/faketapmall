<template>
  <div id="ranking-item" :class="{active: isActive}">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: "RankingItem",
    props: {
      title: String,
    },
    computed: {
      isActive(){
        return true;
      }
    }
  }
</script>

<style scoped>
  #ranking-item{
    margin-right: 20px;
    cursor: pointer;
  }
  .active{
    font-size: 22px;
    border-bottom: 3px solid var(--label-bg-color);
  }
</style>
