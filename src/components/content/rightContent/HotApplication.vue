<template>
  <div id="hot-application">
    <div class="hot-application-left">
      <img class="hot-application-img" :src="data.app_icon" alt="">
    </div>
    <div class="hot-application-middle">
      <div class="hot-title">{{ data.app_name }}</div>
      <div class="hot-label">
        <hot-application-label :name="data.app_class_name"></hot-application-label>
      </div>
    </div>
    <div class="hot-application-right">
      <img src="~assets/img/label/star.svg" alt="">
      <div class="score">8.2</div>
    </div>
  </div>
</template>

<script>
  import HotApplicationLabel from "@/components/content/rightContent/HotApplicationLabel";
  export default {
    name: "HotApplication",
    components: {
      HotApplicationLabel
    },
    props: {
      data: Object
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
