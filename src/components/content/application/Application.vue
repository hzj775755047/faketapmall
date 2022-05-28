<template>
  <div class="application" @click="toDetail">
    <div class="app-i">
      <img class="application-img" :src=urlPre+application.app_big_img alt="">
    </div>
    <div class="recommendation">
      <div class="recommendation-header">
        <div class="hot-label">
          <div class="label">高软 独家</div>
          <hot-application-label v-for="label in labels" :name="label"/>
        </div>
        <div class="score">
          <img src="~assets/img/label/star.svg" alt="">
          <span class="score-number">{{random(1, 10)}}</span>
        </div>
      </div>
      <div class="recommendation-content">
        <div class="recommendation-title">{{application.app_name}}</div>
        <div class="recommendation-description">{{ application.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {urlPre} from "../../../network/request";
  import {getClassNamebyId} from "../../../network/api";
  import HotApplicationLabel from "../rightContent/HotApplicationLabel";
  export default {
    name: "Application",
    components: {HotApplicationLabel},
    created() {
      getClassNamebyId(this.application.app_class_id).then(res =>{
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
    props:{
      application: {
        type: Object,
        default: ()=>{
          return {
            app_big_img: '~assets/img/application/application.jpg',
            app_name: '牛头人大战马面怪',
            description: '非常好玩'
          }
        }
      }
    },
    data(){
      return {
        urlPre: urlPre,
        labels: []
      }
    },
    methods: {
      toDetail(){
        this.$router.push("/main/details/"+this.application.app_id);
      },
      random(lower, upper){
        return Math.floor(Math.random() * (upper - lower)) + lower;
      }
    }
  }
</script>

<style scoped>
  .application{
    cursor: pointer;
    width: 100%;
    margin: 0 20px 20px 20px;
    border-radius: var(--primary-border-radius);
    background-color: var(--application-bg-color);
    box-shadow: 0px 7px 10px 5px rgba(134,140,146,.3);
  }
  .application-img{
    width: 100%;
    height: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid #dee2e3;

  }
  .recommendation{
    padding: 20px;
  }
  .recommendation-header{
    text-align: center;
    flex-direction: row;
    width: 100%;
    display: flex;
    position: relative;
  }
  .label{
    width: fit-content;
    margin-right: 10px;
    padding: 4px 6px;
    border-radius: 4px;
    font-size: var(--label-font-size);
    font-weight: var(--font-weight);

    color: var(--label-font-color);
    background-color: var(--label-bg-color);
  }
  .score{
    display: flex;
    position: absolute;
    right: 1px;
    align-items: center;
    font-weight: var(--font-weight);
    font-size: var(--score-font-size);
    color: var(--score-font-color);
  }
  .score img{
    width: 26px;
  }
  .score-number{
    margin-left: 5px;
  }
  .recommendation-title{
    display: flex;
    margin-top: 15px;
    color: var(--title-font-color);
    font-size: var(--title-font-size);
    font-weight: var(--font-weight);
  }
  .recommendation-description{
    font-size: var(--description-font-size);
    color: var(--description-font-color);
    margin-top: 16px;
  }
  .hot-label{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
</style>
