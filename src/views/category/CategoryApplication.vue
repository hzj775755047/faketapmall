<template>
  <div id="category-application">
    <div class="rank-num">{{num+1}}</div>
    <div class="content">
      <div class="c-l-img">
        <img :src="data.app_icon" alt="">
      </div>
      <div class="c-mid">
        <div class="c-title">{{ data.app_name }}</div>
        <div class="c-rank-score">
          <img class="c-star" src="~assets/img/label/star.svg" alt="">
          <div class="c-score">6.4</div>
        </div>
        <div class="c-label">
          <div class="c-label-item">{{data.app_class_name}}</div>
        </div>
      </div>
      <div class="c-r-img">
        <img :src="data.app_big_img" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CategoryApplication",
    props: {
      data: Object,
      num: Number
    }
  }
</script>

<style scoped>
  #category-application{
    display: flex;
    align-items: center;
    padding-right: 20px;
    cursor: pointer;
  }
  .rank-num{
    width: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
  }
  .content{
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 20px 0;
    border-bottom: 1px solid rgba(29,33,39,0.12);
  }
  .c-title{
    display: inline;
    color: var(--color-text);
    font-size: 18px;
    line-height: 22px;
    padding: 10px 0;
  }
  .c-l-img{
    width: 96px;
    margin-right: 15px;
  }
  .c-rank-score{
    margin-right: 12px;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: var(--score-font-color);
  }
  .c-star{
    width: 100%;
    margin-right: 5px;
  }
  .c-score{
    font-weight: 700;
  }
  .c-mid{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    min-height: 64px;
    flex: 1;
  }
  .c-label{
    margin-top: 10px;
    display: flex;
    width: 100%;
    overflow: hidden;
    color: var(--nonactive-color);
    white-space: nowrap;
    font-size: 14px;
  }
  .c-label-item{
    margin-right: 12px;
  }
  .c-r-img{
    object-fit: cover;
    width: 150px;
    border-radius: 6px;
    overflow: hidden;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    min-width: 70px;
    margin-left: 16px;
  }
</style>
