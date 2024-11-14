<template>
  <div id="hot-application" @click="toDetail">
    <div class="hot-application-left">
      <img class="hot-application-img" :src="iconUrl" alt="">
    </div>
    <div class="hot-application-middle">
      <div class="hot-title">{{ data.app_name }}</div>
      <div class="hot-label">
        <hot-application-label v-for="label in labels" :name="label" :key='label'/>
      </div>
    </div>
    <div class="hot-application-right">
      <img src="~assets/img/label/star.svg" alt="">
      <div class="score">{{ random(1, 10) }}</div>
    </div>
    
  </div>
</template>

<script>
  import HotApplicationLabel from "@/components/content/rightContent/HotApplicationLabel";
  import {getClassNamebyId} from "../../../network/api";
  import {urlPre} from "../../../network/request";

  export default {
    name: "HotApplication",
    components: {
      HotApplicationLabel
    },
    data(){
      return {
        labels: [],
        iconUrl: urlPre + this.data.app_icon
      }
    },
    props: {
      data: {}
    },
    created() {
      getClassNamebyId(this.data.app_class_id).then(res =>{
        let {status, msg, data} = res.data;
        if(status === 200){
          this.labels = data;
        }else{
          this.$message.error(msg);
        }
      }).catch(err =>{
        this.$message.error(err);
      });
    },
    methods: {
      toDetail(){
        this.$router.push('/main/details/' + this.data.app_id);
      },
      random(lower, upper){
        return Math.floor(Math.random() * (upper - lower)) + lower;
      }
    }
  }
</script>

<style scoped>
  #hot-application{
    padding: 8px 16px;
    cursor: pointer;
    display: flex;
    margin: 10px 0;
  }
  .hot-application-left{
    width: 56px;
    height: 56px;
  }
  .hot-application-img{
    width: 100%;
    height: 100%;
  }
  .hot-application-middle{
    display: flex;
    flex-direction: column;
    margin: 0 12px;
    flex: 1;
    width: 0;
  }
  .hot-title{
    flex: auto;
    color: var(--color-text);
    font-size: var(--font-size);
    line-height: var(--line-height);
    font-weight: var(--font-weight);
  }
  .hot-label{
    display: flex;
    flex: 1;
    flex-wrap: wrap;
  }
  .hot-application-right{
    padding-top: 2px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: var(--score-font-color);
    font-weight: var(--font-weight);
  }
  .hot-application-right >img{
    width: 13px;
    height: 13px;
    margin-right: 3px;
  }
</style>
