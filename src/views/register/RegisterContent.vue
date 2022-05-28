<template>
  <div id="register-content">
    <div class="register-content-title">
      <img src="~assets/img/taptap.png" alt="">
    </div>
    <div class="register-content-main">
      <div class="input-content">
        <h2>注册帐号</h2>
        <input v-model="username" placeholder="请输入帐号"/>
      </div>
      <div class="input-content">
        <h2>注册密码</h2>
        <input type="password" v-model="password" placeholder="请输入密码"/>
      </div>
    </div>
    <div class="register-content-bottom">
      <div class="bottom-btns">
        <button class="details-main-content-btn" @click="reg">注册</button>
        <button class="details-main-content-btn" @click="reset">重置</button>
      </div>
    </div>
  </div>

</template>

<script>
import {register} from "../../network/api";

export default {
  name: "RegisterContent",
  data(){
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    reset(){
      this.username = '';
      this.password = '';
    },
    reg(){
      if(this.username === '' || this.password === '') {
        this.$message.warning('请输入注册帐号或密码');
        return;
      }
      register(this.username, this.password).then(res =>{
        let {status, msg, data} = res.data;
        if(status === 200){
          this.$message.success('注册成功');
          this.$router.push('/login');
        }else{
          this.$message.error(msg);
        }
      }).catch(err =>{
        this.$message.error(err);
      });
    }
  }

}
</script>

<style scoped>
#register-content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  padding: 20px 30px;
  box-shadow: 0 1px 3px 3px rgba(134,140,146,.2);
  background-color: var(--primary-white);
}
.register-content-title{
  margin-right: 70px;
  width: 120px;
}
.register-content-title img{
  width: 100%;
}
.register-content-main{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input-content{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
}
.input-content h2{
  margin-top: 5px;
  margin-right: 20px;
}
.input-content input{
  width: 200px;
  padding: 10px 0;
  font-size: 28px;
  margin-top: 10px;
  border-top: 0;
  border-right: 0;
  border-left: 0;
  border-bottom: 1px solid #868c92;
}
.input-content input::placeholder{
  font-size: 20px;
  color: #dee2e3;
}
.input-content input:focus{
  border-bottom: 1px solid #1296db;
  transition: border-bottom-color .2s;
}
.bottom-btns{
  display: flex;
  flex-direction: column;
  margin-left: 20px;
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
  margin-top: 20px;
  margin-right: 20px;
  padding: 0 24px;
  background-color: #1296db;
  color: var(--primary-white);
}
.details-main-content-btn:hover{
  background-color: #1285C2;
  transition-duration: .3s;
}

</style>
