<template>
  <div id="search-content">
    <application v-for="item in appList" :application="item" />
    <el-empty v-if="appList.length == 0" description="暂无数据"></el-empty>
  </div>
</template>

<script>
import Application from "../../components/content/application/Application";
import {search} from "../../network/api";

export default {
  name: "SearchContent",
  components: {Application},
  data(){
    return {
      appList: []
    }
  },
  created() {
    search(this.$route.params.searchStr).then(res =>{
      let {status, msg ,data} = res.data;
      if(status === 200){
        if(data.length === 0){
          this.$message.warning('找不到该应用');
          return;
        }
        this.appList = data;
      }else{
        this.$message.error(msg);
      }
    }).catch(err =>{
      this.$message.error(err);
    });
    this.$watch(() => this.$route.params, (toParams, previousParams) =>{
      search(this.$route.params.searchStr).then(res =>{
        let {status, msg ,data} = res.data;
        if(status === 200){
          this.appList = data;
        }else{
          this.$message.error(msg);
        }
      }).catch(err =>{
        this.$message.error(err);
      });
    });
  },

}
</script>

<style scoped>
#search-content{
  margin: auto;
  display: flex;
  justify-content: center;
  flex: 1;
  flex-wrap: wrap;
}
</style>
