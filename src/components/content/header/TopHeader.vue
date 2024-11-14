<template>
  <div id="top-header">
    <div class="left-header">
      <div  v-if="this.$route.path!='/main/home'">
     <i class="el-icon-back details-back-btn" @click="back"></i> 详细信息  评论
     </div>
    </div>
    <div class="right-header">
      <!-- 搜索框 -->
      <div class="search">
        <img class="search-icon" src="~assets/img/index/search.svg" alt="" @click="search">
        <input class="search-input" v-model="searchStr" type="text" placeholder="搜索" @keypress.enter="search"/>
      </div>
      <!-- login -->
      <div class="login-img" @click="toLogin">
        <img v-if="this.$store.state.user_id === '' " src="~assets/img/index/default.png" alt="">
        <img v-else-if="this.$store.state.user_id !== '' " src="~assets/img/logo.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data(){
    return {
      searchStr: '',
    }
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    toLogin(){
      if(this.$route.path.indexOf('/login') !== -1) return;
      else if(this.$store.state.user_id !== ''){
        this.$router.push('/profile');
      }else{
        this.$router.push('/login');
      }
    },
    search(){
      this.$router.push('/main/search/'+this.searchStr);
    }
  }
}
</script>

<style scoped>
  #top-header{
    position: fixed;
    z-index: 1;
    background: #fff;
    top: 0;
    display: flex;
    flex: 1;
  }
  .left-header{
    display: flex;
    flex: 1;
    padding: 30px 30px 20px 30px;
    margin-left: 10px;
    width: 565px;
    /* background-color: var(--color-background); */
    box-sizing: border-box;
    top: 0;
    line-height: 26px;
    font-weight: 700;
    font-size: 22px;

  }
  .right-header{
    padding: 12px 14px 25px;
    line-height: 24px;
    margin-left: 20px;
    display: flex;
    align-items: center;
    width: auto;
    top: 0;
    /* background-color: var(--color-background); */
  }
  .search{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    display: flex;
    padding: 6px 13px;
    align-items: center;
    background-color: var(--color-background);
  }
  .search-icon{
    width: 24px;
    cursor: pointer;
  }
  .search-input{
    border: none;
    margin-left: 8px;
    width: 100%;
    background: none;
  }
  .login-img{
    margin-left: 10px;
    width: 40px;
    cursor: pointer;
  }
  .login-img img{
    width: 100%;
  }
</style>
