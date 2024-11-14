<template>
  <div id="right-content" v-if="this.$route.path!='/main/home'">
  <el-card shadow="never" style="border:none;background:rgb(243, 244, 245);border-radius:20px" class="rigBG">
    <h4>公告</h4>
    <div class='fontInonce' style="margin-top:20px" >11月 14, 2024</div>
    <div class='fontInonce'>Android版本將於11月 14, 2024正式上線。</div>
    <div class='fontInonce' style="margin-top:20px">11月 14, 2024</div>
    <div class='fontInonce'>Android版本封測玩家招募將於11月 11, 2024開始。 Open-world pocket monster tamer by Tencent! CBT recruitment starts now!</div>
  </el-card>
    <div  class="right-details-content rigBG" :style="{'max-height': this.timeLineHeight + 'px'}" style="border:none;background:rgb(243, 244, 245);border-radius:20px;margin-top:20px">
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
  @media only screen and (max-width: 600px) {
    #right-content{
      position:unset !important;
      width: 600px !important;
      padding-left: 10PX !important;
      
    }
    .rigBG{
      background:#fff !important;
    }
  }


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
  .fontInonce{
    color:rgb(92, 92, 92);
    font-size:12px;
  }
</style>
