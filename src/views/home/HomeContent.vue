<template>
  <div id="home-content">
    <application v-for="myapp in this.appList" :application="myapp"/>
    <div v-if="loading" class="home-content-loading" @click="loadingMore">> 点击加载更多 <</div>
    <div v-if="noMore" class="home-content-nomore">没有更多了..</div>
  </div>
</template>

<script>
import Application from "../../components/content/application/Application";
import {qryAppList, qryAppListbyNum} from "../../network/api";

export default {
  name: "HomeContent",
  components: {Application},
  data(){
    return {
      appList: [],
      gotDataLength: 0,
      loading: true,
      num1: 1,
      num2: 5,
    }
  },
  computed: {
    noMore(){
      return this.gotDataLength < 5;
    }
  },
  created(){
    this.getData();
  },
  methods: {
    getData(){
      qryAppListbyNum(this.num1, this.num2).then(res =>{
        let {status, msg, data} = res.data;
        if(status === 200){
          this.gotDataLength = data.length;
          this.appList.push(...data);
          this.num1 += 5;
          this.num2 += 5;
          if(this.noMore) this.loading = false;
        }else{
          this.$message.error(msg);
        }
      }).catch(err =>{
        this.$message.error(err);
      });
    },
    loadingMore(){
      if(this.noMore){
        this.loading = false;
        return;
      }else{
        this.getData();
      }
    }
  },

}
</script>

<style scoped>
  #home-content{
    margin: auto;
    display: flex;
    justify-content: center;
    flex: 1;
    flex-wrap: wrap;
  }
  .home-content-loading{
    cursor: pointer;
    margin-bottom: 10px;
    text-align: center;
    color: #868c92;
    font-size: 22px;
    font-weight: 500;
  }
  .home-content-loading:hover{
    color: #1296db;
    font-size: 22px;
    text-decoration: underline;
    font-weight: 500;
  }
  .home-content-nomore{
    margin-bottom: 10px;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }
</style>
