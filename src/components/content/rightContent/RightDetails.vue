<template>
  <div id="RightDetails">
    <div class="right-detail-header">
      <div class="right-detail-header-title"> 相关游戏 </div>
    </div>
    <div class="right-detail-content">
      <hot-application v-for="item in hotList" :data="item" :key='item'/>
      <el-divider></el-divider>
    </div>
    <div class="right-detail-footer">
      <div class="right-detail-footer-title" @click="toRanking">查看全部</div>
    </div>
  </div>
</template>

<script>
  import HotApplication from "@/components/content/rightContent/HotApplication";
  import {getTopViewsAPP} from "../../../network/api";

  export default {
    name: "RightDetails",
    components: {
      HotApplication
    },
    data(){
      return {
        hotList: []
      }
    },
    created() {
      getTopViewsAPP().then(res =>{
        let {status, msg ,data} = res.data;
        if(status === 200){
          this.hotList = data;
        }else{
          this.$message.error(msg);
        }
      }).catch(err =>{
        this.$message.error(err);
      });
    },
    methods:{
      toRanking(){
        this.$router.replace('/ranking');
      },

    }
  }
</script>

<style scoped>
  #RightDetails{
    margin-right: 15px;
    margin-bottom: 20px;
  }
  .right-detail-header{
    width: 100%;
    height: 44px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-radius: var(--primary-border-radius) var(--primary-border-radius) 0 0;
    /* background-color: var(--primary-white); */
  }
  .right-detail-header-title{
    color: var(--title-font-color);
    font-size: var(--title-font-size);
    font-weight: var(--font-weight);
  }
  .right-detail-content{
    display: flex;
    flex-direction: column;
    margin: 2px 0px;
    width: 100%;
    padding: 16px 0;
    /* background-color: var(--primary-white); */
  }
  .right-detail-footer{
    width: 100%;
    height: 44px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-radius: 0 0 var(--primary-border-radius) var(--primary-border-radius);
    /* background-color: var(--primary-white); */
  }
  .right-detail-footer-title{
    color: var(--footer-font-color);
    font-size: 14px;
    cursor: pointer;
  }
</style>
