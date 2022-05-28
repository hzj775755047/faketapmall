<template>
  <div id="content-top-bar-title" :class="{active:isActive, nonActive:!isActive}">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: "ContentTopBarTitle",
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
  #content-top-bar-title{
    margin-right: 20px;
    cursor: pointer;
  }
  .active{
    font-size: 22px;
  }
  .nonActive{

  }
</style>
