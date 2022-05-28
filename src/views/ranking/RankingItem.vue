<template>
  <div id="ranking-item">
    <div class="item-index">{{index}}</div>
    <div class="item-main">
      <div class="item-icon" @click="toDetails">
        <img :src="iconUrl" alt="">
      </div>
      <div class="item-introduction" @click="toDetails">
        <div class="item-title">{{item.app_name}}</div>
        <div class="item-label">高软 独家</div>
        <div class="item-score">
          <img src="~assets/img/label/star.svg" alt="">
          <span class="item-score-number">{{random(1, 10)}}</span>
        </div>
      </div>
      <div class="item-big-img">
        <el-image style="width: 100%" fit="cover" :src="imgUrl" :preview-src-list="[imgUrl]" alt=""/>
      </div>
    </div>
  </div>

</template>

<script>
import {urlPre} from "../../network/request";

export default {
  name: "RankingItem",
  data(){
    return {
      iconUrl: urlPre + this.item.app_icon,
      imgUrl: urlPre + this.item.app_big_img,
      srcList: [urlPre + this.item.app_big_img]
    }
  },
  props: {
    index: 0,
    item: {}
  },
  methods: {
    random(lower, upper){
      return Math.floor(Math.random() * (upper - lower)) + lower;
    },
    toDetails(){
      this.$router.push('/main/details/' + this.item.app_id);
    }
  }
}
</script>

<style scoped>
#ranking-item{
  display: flex;
  flex: 1;
  flex-direction: row;
  background: var(--primary-white);
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .2);
  border-radius: 10px;
}
.item-index{

  font-size: 20px;
  font-weight: var(--font-weight);
  margin: auto;
}
.item-main{
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  position: relative;
}
.item-icon{
  display: flex;
  justify-content: center;
  width: 96px;
  height: 96px;
  overflow: hidden;
}
.item-icon img{
  object-fit: cover;
  width: 100%;
  border: #dee2e3 1px solid;
  border-radius: 23%;
}
.item-introduction{
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 220px;
  margin: 10px 20px;
  padding-left: 10px;
}
.item-title{
  font-size: 19px;
}
.item-title:hover{
  text-decoration: underline;
}
.item-score{
  display: flex;
  font-weight: var(--font-weight);
  text-align: center;
  vertical-align: center;
  color: var(--score-font-color);
  margin-top: 10px;
}
.item-score img{
  width: 15px;
}
.item-score-number{
  font-size: 15px;
  padding-top: 2px;
  margin-left: 5px;
}
.item-label{
  margin-top: 5px;
  margin-bottom: 0;
  margin-right: auto;
  width: fit-content;
  padding: 4px 6px;
  border-radius: 4px;
  font-size: var(--label-font-size);
  font-weight: var(--font-weight);
  color: var(--label-font-color);
  background-color: var(--label-bg-color);
}
.item-big-img{
  display: flex;
  justify-content: center;
  margin-right: 20px;
  width: 170px;
  height: 96px;
  border: #dee2e3 1px solid;
  border-radius: 6px;
  overflow: hidden;
}
.item-big-img img{
  object-fit: cover;
  width: 150%;
  border-radius: 6px;
}
</style>
