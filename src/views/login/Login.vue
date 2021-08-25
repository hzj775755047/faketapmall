<template>
  <div class=login_container>
    登陆组件
    <div class="login_box">
      <!-- 头像 -->
      <div class="avatar_box">
        <img src="~assets/img/logo.png" alt="">
      </div>
      <!-- 表单 -->
      <el-form :rules="loginFormRules" :model="loginForm" ref="loginForm" class="login_form">
        <!--  邮箱-->
        <el-form-item prop="email">
          <el-input type="email" v-model="loginForm.email" placeholder="请输入邮箱"  ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" show-password prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm">登陆</el-button>
          <el-button type="primary" @click="onregit">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {login} from "@/network/login";
  export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      //即不能为空
      loginFormRules: {
        email: [
          {required: true, message: '邮箱不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    onregit() {
      this.$router.replace("/register");
    },
    //登录之前进行账户检测，看看账户密码是否正确
    submitForm() {
      let password = this.loginForm.password;
      let email = this.loginForm.email;
      if(password.length === 0) return;
      if(email.length === 0) return;
      login( password, email).then(res =>{
        console.log(res.data.jwttoken);
        let {code,msg,data}=res;
        if (code==200) {
          alert(msg);
          // const tokenStr = res.data.user_id+res.data.jwttoken;
          document.cookie ="jwttoken=" + res.data.jwttoken;
          document.cookie ="user_id=" + res.data.user_id;
          document.cookie ="username=" + res.data.username;
          document.cookie ="email=" + res.data.email;
          document.cookie ="phone_no=" + res.data.phone_no;
          document.cookie ="isdeveloper=" + res.data.isdeveloper;
          document.cookie ="role_id=" + res.data.role_id;
          // window.sessionStorage.setItem('tokenStr',tokenStr);
          this.$router.replace('/home');
        }
        if (code==400){
          alert(msg);
        }
        // this.$router.replace('/login');
      }).catch(err =>{
        alert('其他错误')
      });

    },
    // eslint-disable-next-line no-undef



  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*.login_container{*/
/*  height: 100%;*/
/*  background-color: #2b4b6b;*/
/*}*/
/*.login_box{*/
/*  width: 450px;*/
/*  height: 300px;*/
/*  background-color: #fff;*/
/*  border-radius: 3px;*/
/*  position: absolute;*/
/*  left: 50%;*/
/*  top:50%;*/
/*  transform: translate(-50%,-50%);*/

/*}*/
/*!* 头像样式开始 *!*/
/*.avatar_box{*/
/*  height: 130px;*/
/*  width: 130px;*/
/*  border: 1px solid #eee;*/
/*  border-radius: 50%;*/
/*  padding: 10px;*/
/*  box-shadow: 0 0 10px #ddd;*/
/*  position: absolute;*/
/*  left:50%;*/
/*  transform: translate(-50%,-50%);*/
/*  background-color: #fff;*/
/*}*/
/*.avatar_box img{*/
/*  width: 100%;*/
/*  height: 100%;*/
/*  border-radius: 50%;*/
/*  background-color: #eee;*/
/*}*/
/*!* 头像样式结束 *!*/

/*.btns{*/
/*  !*     position: absolute;*/
/*      right: 0; *!*/
/*  display: flex;*/
/*  justify-content: flex-end;*/
/*}*/
/*.login_form{*/
/*  position: absolute;*/
/*  bottom: 0;*/
/*  !* 占满全屏 *!*/
/*  width: 100%;*/
/*  !* 边距会超出 用后面那句 box-sizing: border-box; *!*/
/*  padding: 0 20px;*/
/*  box-sizing: border-box;*/
/*}*/
</style>
