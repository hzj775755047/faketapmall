<template>
  <div id="category-bar-item" :class="{active:isActive, nonActive:!isActive}" @click="itemClick">
    {{title}}
  </div>
</template>

<script>
  export default {
    name: "CategoryBarItem",
    computed:{
      isActive(){
        return this.$route.path === this.path;
      }
    },
    props: {
      title: String,
      path: String,
    },
    methods: {
      itemClick(){
        // 在按钮所对应的页面上，如果再次点击按钮，不跳转
        if(this.$route.path === this.path) return;
        this.$router.replace(this.path);
      }
    }
  }
</script>

<style scoped>
  #category-bar-item{
    flex: 1;
    cursor: pointer;
    min-width: 20%;
    max-width: 20%;
    text-align: center;
    margin: 10px;
  }
  .active{
    font-size: 22px;
    transition: font-size 0.5s;
  }
  .nonActive{
    color: var(--nonactive-color);
    font-size: 18px;
  }
</style>
