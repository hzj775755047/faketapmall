<template>
  <div id="right-content" >
    <div class="right-details-content" :style="{'max-height': this.timeLineHeight + 'px'}">
      <right-details name="热门应用" ></right-details>
    </div>
  </div>
</template>

<script>
  import RightDetails from "@/components/content/rightContent/RightDetails";

  export default {
    name: "RightContent",
    components: {RightDetails},
    mounted() {
      this.timeLineHeight = document.documentElement.clientHeight;
      window.onresize = () =>{
        this.timeLineHeight = document.documentElement.clientHeight;
      };
    },
    data(){
      return {
        timeLineHeight: ''
      }
    }
  }
</script>

<style scoped>
  #right-content{
    width: 320px;
    position: sticky;
    top: 0;
    height: 100%;
  }
  .right-details-content{
    overflow-y:scroll;
  }
  .right-details-content::-webkit-scrollbar {
    display: none;
  }
</style>
