<template>
  <div id="rightContent">
    <right-header></right-header>
    <div ref="rightContent" class="right-details-content">
      <right-details name="热门应用" :list="this.hotList"></right-details>
    </div>
  </div>
</template>

<script>
  import RightDetails from "@/components/content/rightContent/RightDetails";
  import RightHeader from "@/components/content/rightContent/RightHeader";
  import {getHotList} from "@/network/home";

  export default {
    name: "RightContent",
    components: {
      RightDetails, RightHeader
    },
    data(){
      return {
        hotList: null,
        rightTop: 0,
      }
    },
    created() {
      getHotList().then(res =>{
        this.hotList = res.data;
      })
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style scoped>
  #rightContent{
  }
  .right-details-content{

  }
  .right-details-content::-webkit-scrollbar {
    display: none;
  }
</style>
