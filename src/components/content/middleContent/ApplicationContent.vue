<template>
  <div id="applicationContent">
    <div class="middleHeader">
      <!--上边标题栏-->
      <content-top-bar :titles="titles"></content-top-bar>
      <!--下边显示内容-->
      <application title="91"></application>
      <application title="22"></application>
      <application title="33"></application>
      <application title="33"></application>
      <application title="33"></application>
      <application title="33"></application>
    </div>
  </div>
</template>

<script>
  import Application from "@/components/content/middleContent/Application";
  import ContentTopBar from "@/components/content/tabbar/ContentTopBar";
  export default {
    name: "ApplicationContent",
    components:{
      Application, ContentTopBar
    },
    props: {
      titles: Array,
    }
  }
</script>

<style scoped>
  #applicationContent{
    width: 600px;
    margin-left: 10px;
    top: 0;
    bottom: 0;
  }
  .header-content{

  }

</style>
