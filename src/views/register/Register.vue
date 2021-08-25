<template>
  <div class=register_container>
    <div class="register_box">
      <div class="avatar_box">
        <h2>注册页面</h2>
      </div>
      <!-- 表单 -->
      <el-form :rules="registerFormRules" :model="registerForm" ref="registerForm" class="login_form">
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input type="text" v-model="registerForm.username" placeholder="请输入用户名" prefix-icon="iconfont icon-user"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input type="password" v-model="registerForm.password" placeholder="请输入密码" show-password prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!-- 确认密码 -->
        <el-form-item prop="repassword">
          <el-input type="password" v-model="registerForm.repassword" placeholder="请确认输入密码" show-password prefix-icon="iconfont icon-3702mima"></el-input>
        </el-form-item>
        <!--        邮箱-->
        <el-form-item prop="email">
          <el-input type="email" v-model="registerForm.email" placeholder="请输入邮箱" @blur="checkEmail" ></el-input>
        </el-form-item>
        <!--        手机号-->
        <el-form-item prop="phone_no">
          <el-input type="text" v-model="registerForm.phone_no" placeholder="请输入手机号"  ></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="submitForm">立即注册</el-button>
          <el-button type="primary" @click="onlogin">已有账户</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {register, checkEmailFormat} from "@/network/register";
  export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
        repassword: '',
        email:'',
        phone_no:''
      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      //即不能为空
      registerFormRules: {
        username: [
          {required: true, message: '账号不可为空', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '密码不可为空', trigger: 'blur'}
        ],
        repassword: [
          {required: true, message: '确认密码不可为空', trigger: 'blur'}
        ],
        email: [
          {required: true, message: '邮箱不可为空', trigger: 'blur'}
        ],
        phone_no: [
          {required: true, message: '手机号不可为空', trigger: 'blur'}
        ]
      }
    }
  },

  methods: {
    onlogin() {
      this.$router.replace("/login");
    },
    checkEmail(){
      let email = this.registerForm.email;
      checkEmailFormat(email).then(res =>{
        if(res.code === 204){
          alert(res.msg);
        }
      })
    },
    submitForm() {
      let username = this.registerForm.username;
      let password = this.registerForm.password;
      let email = this.registerForm.email;
      let phone = this.registerForm.phone_no;
      if(username.length === 0) return;
      if(password.length === 0) return;
      if(email.length === 0) return;
      if(phone.length === 0) return;
      register(username, password, email, phone).then(res =>{
        alert('注册成功');
        this.$router.replace('/login');
      }).catch(err =>{
        alert('注册失败')
      });
    },
    // eslint-disable-next-line no-undef



  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h2{*/
/*  margin-top: 40px;*/
/*}*/
/*.register_container{*/
/*  height: 100%;*/
/*  background-color: #2b4b6b;*/
/*}*/
/*.register_box{*/
/*  width: 450px;*/
/*  height: 400px;*/
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
