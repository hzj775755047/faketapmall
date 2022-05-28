<template>
  <div id="category-label" @click="toCategory">
    <div class="label-img">
      <img :src="require('../../assets/img/label/'+labelImg+'.svg')" alt=""/>
    </div>
    <div class="label-title">{{ labelName }}</div>
  </div>
</template>

<script>
export default {
  name: "CategoryLabel",
  props: {
    labelIndex: 0,
    labelImg: '',
    labelName: ''
  },
  methods: {
    toCategory(){
      this.$router.push("/main/category/"+this.labelIndex);
    }
  }

}
</script>

<style scoped>
  #category-label{
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    width: auto;
    min-width: 120px;
    height: 60px;
    border-radius: 30px;
    margin: 12px 0 12px 22px;
    background: #f5f7f8;
  }
  #category-label:hover{
    background: #dee2e3;
    transition: background .2s;
  }
  .label-img{
    margin-left: 15px;
    width: 26px;
    line-height: 16px;
    font-weight: var(--font-weight);
  }
  .label-img img{
    width: 100%;
  }
  .label-title{
    font-size: 16px;
    font-weight: var(--font-weight);
    width: 120px;
    line-height: 16px;
    margin-left: 12px;

  }
</style>
