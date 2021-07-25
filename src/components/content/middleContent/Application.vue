<template>
  <div class="application">
    <img class="application-img" src="~assets/img/application/application.jpg" alt="">
    <div class="recommendation">
      <div class="recommendation-header">
        <div class="label">Tap 独家</div>
        <div class="score">
          <img src="~assets/img/label/star.svg" alt="">
          <div class="score-number">8.2</div>
        </div>
      </div>
      <div class="recommendation-content">
        <div class="recommendation-title">墨斗</div>
        <div class="recommendation-description">西游题材横板格斗，超酷连招3分钟KO对手</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Application"
}
</script>

<style scoped>
  .application{
    cursor: pointer;
    margin: 20px;
    border-radius: var(--primary-border-radius);
    background-color: var(--application-bg-color);
    box-shadow: 0px 7px 10px 5px rgba(134,140,146,.3);
  }
  .application-img{
    width: 100%;
    border-radius: 10px 10px 0 0;
  }
  .recommendation{
    padding: 20px;
  }
  .recommendation-header{
    text-align: center;
    flex-direction: row;
    width: 100%;
    display: flex;
  }
  .label{
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
  .score{
    display: flex;
    font-weight: var(--font-weight);
    font-size: var(--score-font-size);
    color: var(--score-font-color);
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
</style>
