<template>
  <div id="rightContent">
    <right-header></right-header>
    <div class="right-details-content">
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
        hotList: null
      }
    },
    created() {
      getHotList().then(res =>{
        this.hotList = res;
      })
    }
  }
</script>

<style scoped>
  #rightContent{
    /*position: sticky;*/
    /*top: 0;*/
    /*height: 100%;*/
  }
  .right-details-content{

    /*height: auto;*/
    /*overflow: scroll;*/
  }
  .right-details-content::-webkit-scrollbar {
    display: none;
  }
</style>
