<template>
  <div id="applicationContent">
    <div class="middleHeader">
      <div class="header-content">{{ this.title }}</div>
      <application/>
    </div>
  </div>
</template>

<script>
  import Application from "@/components/content/middleContent/Application";
  export default {
    name: "ApplicationContent",
    components:{
      Application
    },
    props: {
      title: String,
    }
  }
</script>

<style scoped>
  #applicationContent{
    width: 67%;
    margin-left: 10px;
    top: 0;
    bottom: 0;
  }
  .header-content{
    width: fit-content;
    display: flex;
    flex: 1;
    margin-top: 30px;
    margin-left: 30px;
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
    cursor: pointer;
  }
</style>
