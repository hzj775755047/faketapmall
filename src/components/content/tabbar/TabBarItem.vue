<template>
  <div class="tab-bar-item" :class="{active:isActive, nonActive:!isActive}" style="cursor: pointer" @click="itemClick">
    <!-- 图片   -->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <!-- 文字  -->
    <div class="itemText" :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor: {
      type: String,
      default: "#1296db",
    }
  },
  data(){
    return{

    }
  },
  computed: {
    isActive(){
      // this.$route指处于活跃的路由的对象
      // a.indexOf(b): 在a中找b，若找到则返回b开头的位置，没有找到则返回-1
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor}: {};
    }
  },

  methods:{
    itemClick(){
      // 在按钮所对应的页面上，如果再次点击按钮，不跳转
      if(this.$route.path === this.path) return;
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
  .tab-bar-item{
    padding: 10px 10px 10px 30px;
    margin-top: 40px;
    margin-right: 40px;
    margin-left: 20px;
    border-radius: 38px;
    transition: background-color .2s;
  }
  .tab-bar-item img{
    width: 36px;
    height: 36px;
  }
  .tab-bar-item div{
    display: inline;
    vertical-align: middle;
  }
  .tab-bar-item .itemText{
    font-size: 20px;
    font-weight: 700;
    margin-left: 20px;
  }
  .active{
    background-color: white;
  }
  .nonActive:hover{
    background-color: #dee2e3;
    transition: background-color .2s;
  }
</style>
