<template>
  <div id="right-content" v-if="this.$route.path!='/main/home'">
    <div class="right-details-content" :style="{'max-height': this.timeLineHeight + 'px'}">
      <right-details name="相关游戏" ></right-details>
    </div>
  </div>
</template>

<script>
  import RightDetails from "@/components/content/rightContent/RightDetails";

  export default {
    name: "RightContent",
    components: {RightDetails},
    mounted() {
      console.log(this.$route.path)
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
    position: fixed;
    right:300px;
    top: 75px;
    height: 100%;
  }
  .right-details-content{
    overflow-y:scroll;
  }
  .right-details-content::-webkit-scrollbar {
    display: none;
  }
</style>
