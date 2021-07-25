<template>
  <div id="RightDetails">
    <div class="right-detail-header">
      <div class="right-detail-header-title">{{ this.name}}</div>
    </div>
    <div class="right-detail-content">
      <hot-application name="打飞机"></hot-application>
      <hot-application name="飞机打我"></hot-application>
      <hot-application name="91porn"></hot-application>
    </div>
    <div class="right-detail-footer">
      <div class="right-detail-footer-title">查看全部</div>
    </div>
  </div>
</template>

<script>
  import HotApplication from "@/components/content/rightContent/HotApplication";
  export default {
    name: "RightDetails",
    components: {
      HotApplication
    },
    props:{
      name: String,
    }
  }
</script>

<style scoped>
  #RightDetails{
    margin-top: 10px;
    margin-right: 15px;
  }
  .right-detail-header{
    width: 100%;
    height: 44px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-radius: var(--primary-border-radius) var(--primary-border-radius) 0 0;
    background-color: var(--primary-white);
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
    background-color: var(--primary-white);
  }
  .right-detail-footer{
    width: 100%;
    height: 44px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    border-radius: 0 0 var(--primary-border-radius) var(--primary-border-radius);
    background-color: var(--primary-white);
  }
  .right-detail-footer-title{
    color: var(--footer-font-color);
    font-size: 14px;
    cursor: pointer;
  }
</style>
