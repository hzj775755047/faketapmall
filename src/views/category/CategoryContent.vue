<template>
  <div id="category-content">
    <category-item v-for="(item, index) in categoryList" :item="item" :index="index + 1"/>
    <el-empty v-if="categoryList.length == 0" description="暂无数据"></el-empty>
  </div>
</template>

<script>
import CategoryItem from "./CategoryItem";
import {qryByClassId} from "../../network/api";

export default {
  name: "CategoryContent",
  components: {CategoryItem},
  data(){
    return {
      categoryList: []
    }
  },
  created(){
    qryByClassId(this.$route.params.classId).then(res =>{
      let {status, msg, data} = res.data;
      if(status === 200){
        this.categoryList = data;
      }else {
        this.$message.error(msg);
      }
    }).catch(err =>{
      this.$message.error(err);
    });
  }

}
</script>

<style scoped>
  #category-content{
    margin: auto;
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
