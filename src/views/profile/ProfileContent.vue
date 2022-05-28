<template>
  <div id="profile-content">
    <i class="el-icon-back details-back-btn" @click="back"></i>
    <div class="profile-content-title">
      <h2>用户信息</h2>
    </div>
    <div class="profile-content-main">
      <div class="profile-img">
        <el-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <div class="profile-data">
        <div class="data">帐号: <input type="text" :value="userData.username" :disabled="disabled"></input></div>
        <div class="data">密码: <input type="text" :value="userData.password" :disabled="disabled"></input></div>
        <div class="data">邮箱: <input type="text" :value="userData.email" :disabled="disabled"></input></div>
        <div class="data">电话: <input type="text" :value="userData.phone_no" :disabled="disabled"></input></div>
      </div>
    </div>
    <div class="bottom-btns">
      <button class="details-main-content-btn" @click="change">{{ updateName }}</button>
    </div>
  </div>
</template>

<script>
import {profile, updateProfile} from "../../network/api";

export default {
  name: "ProfileContent",
  data(){
    return {
      userData: {},
      disabled: true,
      updateName: '更新信息'
    }
  },
  created() {
    profile(this.$store.state.user_id).then(res =>{
      let {status, msg, data} = res.data;
      if(status === 200){
        this.userData = data[0];
      }else{
        this.$message.warning(msg);
      }
    }).catch(err =>{
      this.$message.warning('获取个人信息失败，请返回登录');
      this.$router.replace('/login');
    });
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    change(){
      this.disabled = !this.disabled;
      if(this.disabled){
        this.updateName = '更新信息';
      }else{
        this.updateName = '确认';
      }
    }
  }
}
</script>

<style scoped>
  #profile-content{
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    margin-top: 50px;
    padding: 20px 30px;
    box-shadow: 0 1px 3px 3px rgba(134,140,146,.2);
    background-color: var(--primary-white);
  }
  .details-back-btn{
    position: absolute;
    border-radius: 50%;
    left: 20px;
    top: 20px;
    padding: 7px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
    background-color: rgba(54, 54, 54, .7) ;
  }
  .profile-content-title{
    margin-left: 50px;
    width: 120px;
  }
  .profile-content-main{
    margin: 40px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .profile-data{
    margin-left: 50px;
  }
  .data{
    margin-top: 20px;
    font-size: 16px;
    font-weight: 600;
  }
  .data input{
    width: 200px;
    padding: 10px 0;
    margin-top: 10px;
    border-top: 0;
    border-right: 0;
    border-left: 0;
    border-bottom: 1px solid #868c92;
  }
  .data input:focus{
    border-bottom: 1px solid #1296db;
    transition: border-bottom-color .2s;
  }
  .data input:disabled{
    background: none;
  }
  .bottom-btns{
    display: flex;
    margin-left: 90px;
    padding: 24px 0;
  }
  .details-main-content-btn{
    cursor: pointer;
    width: 300px;
    height: 46px;
    border-radius: 23px;
    border: none;
    font-size: 15px;
    font-weight: 500;
    margin-right: 20px;
    padding: 0 24px;
    background-color: #1296db;
    color: var(--primary-white);
  }
</style>
