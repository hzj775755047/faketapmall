<template>
  <div class=register_container>
    <div class="register_box">
      <div class="avatar_box">
        <h2>上传应用</h2>
      </div>
      <!-- 表单 -->
      <el-form  :model="uploadForm" ref="uploadForm" class="upload_form" >
        <!-- 应用名称 -->
        <el-form-item prop="app_name" label="应用名称">
          <el-input type="text" v-model="uploadForm.app_name"  ></el-input>
        </el-form-item>
        <!-- 应用简介 -->
        <el-form-item prop="introduce" label="应用简介">
          <el-input type="text" v-model="uploadForm.introduce"  ></el-input>
        </el-form-item>
        <!-- 应用描述 -->
        <el-form-item prop="description" label="应用描述">
          <el-input type="textarea" v-model="uploadForm.description"  :autosize="{ minRows: 2, maxRows: 4}"></el-input>
        </el-form-item>
        <!--         应用类型（下拉框）-->
        <el-form-item prop="app_class_id" label="应用类型">
          <el-select
            v-model="uploadForm.app_class_id"  placeholder="请输入/请选择" class="h-m-select">
            <el-option
              v-for="item in leixin_options"
              :key="item.app_class_id"
              :label="item.app_class_name"
              :value="item.app_class_id">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- 开发者/发行商 -->
        <el-form-item prop="developer_name" label="开发者/发行商">
          <el-input type="text" v-model="uploadForm.developer_name"   class="develop_input"></el-input>
        </el-form-item>
        <!-- 官网 -->
        <el-form-item prop="website" label="官网">
          <el-input type="text" v-model="uploadForm.website" class="web_ves_input" ></el-input>
        </el-form-item>
        <!-- 版本 -->
        <el-form-item prop="version" label="版本">
          <el-input type="text" v-model="uploadForm.version" class="web_ves_input" ></el-input>
        </el-form-item>
        <!-- 大小 -->
        <el-form-item prop="app_size" label="大小" class="size_dangwei">

          <el-input type="text" v-model="uploadForm.app_size" class="size_input" ></el-input>
        </el-form-item>
        <el-form-item prop="size_unit" label="单位" class="size_dangwei">

          <el-select
            v-model="uploadForm.size_unit" filterable placeholder="请输入/请选择" class="h-m-select select_input">
            <el-option
              v-for="item in danwei_options"
              :key="item.value"
              :label="item.label"
              v-model="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- 图标 -->
        <el-form-item  label="图标">
          <input type="file" id="tubaio" @change="update_app_icon"/>
        </el-form-item>
        <!-- 应用展示图 -->
        <el-form-item label="应用展示图">
          <input type="file" id="showpicture" @change="update_app_big_img"/>
        </el-form-item>
        <!-- 安装包 -->
        <el-form-item  label="安装包">
          <input type="file" id="downpack" @change="update_download_url"/>
        </el-form-item>
        <!-- 应用截图 -->
        <el-form-item  label="应用截图1">
          <input type="file" id="cutpictureone" @change="update_screenshot1"/>
        </el-form-item>
        <!-- 应用截图 -->
        <el-form-item  label="应用截图2">
          <input type="file" id="cutpicturetwo" @change="update_screenshot2"/>
        </el-form-item>
        <!-- 应用截图 -->
        <el-form-item label="应用截图3">
          <input type="file"  id="cutpicturethree" @change="update_screenshot3"/>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" @click="selectFile">上传应用</el-button>
          <!--          <el-button type="primary" @click="test">测试</el-button>-->
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {upload} from "@/network/upload";
  import axios from "axios";
  import {getcookie} from "@/network/request";

  export default {
  name: "Login",

  data() {
    return {
      filelist:[
      ],
      app_icon: null,
      app_big_img: null,
      download_url: null,
      screenshot1: null,
      screenshot2: null,
      screenshot3: null,
      danwei_options:[
        {
          value: 1,
          label:'KB'
        },
        {
          value: 2,
          label:'MB'
        },
        {
          value: 3,
          label:'GB'
        },
      ],
      leixin_options:[
      ],
      uploadForm: {
        user_id: '12',
        app_name: null,
        introduce: null,
        description: null,
        app_class_id: null,
        developer_name: null,
        website: null,
        version: null,
        app_size: null,
        size_unit: null,

      },
      // 表单验证，需要在 el-form-item 元素中增加 prop 属性
      //即不能为空
      uploadFormRules: {
        app_name: [
          {required: true, message: '应用名称不可为空', trigger: 'blur'}
        ],
        introduce: [
          {required: true, message: '应用简介不可为空', trigger: 'blur'}
        ],
        description: [
          {required: true, message: '应用描述不可为空', trigger: 'blur'}
        ],
        app_class_id: [
          {required: true, message: '应用类型不可为空', trigger: 'blur'}
        ],

        website: [
          {required: true, message: '网站不可为空', trigger: 'blur'}
        ],
        version: [
          {required: true, message: '版本不可为空', trigger: 'blur'}
        ],
      }

    }
  },
  // mounted(){
  //   this.uploadForm.user_id=getcookie('user_id');
  // },
  created(){
    this.uploadForm.user_id=getcookie('user_id');
    var that=this;
    // withCredentials: true 使得后台可以接收表单数据 跨域请求
    const instance =axios.create({
      withCredentials: true
    })
    instance.post('http://120.77.215.233:8080/app/qryAppClass')
      .then(function (response) {//注意，要利用其返回值，需将this换成that，然后不用箭头函数
        that.leixin_options=response.data.data;

      }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
      .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
  },
  methods: {


    set(){
      // 注意这里想要获取formDate的数据格式,那么input必须加上name属性,且name值对应绑定的v-model数据名字


      this.app_icon= this.filelist[0];
      this.app_big_img= this.filelist[1];
      this.download_url= this.filelist[2];
      this.screenshot1= this.filelist[3];
      this.screenshot2= this.filelist[4];
      this.screenshot3= this.filelist[5];
      // console.log(this.screenshot1,this.screenshot2,this.screenshot3);
      // console.log(this.download_url);
    },
    update_app_icon (e) {
      let file = e.target.files[0];
      // let file = e.target.files[0]
      console.log(e);
      // console.log(number);
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name) // 通过append向form对象添加数据
      // param.append('id', this.$store.state.userId) // 添加form表单中其他数据
      let url='/upload/icon';
      this.send(param,url,0);

    },
    update_app_big_img (e) {
      let file = e.target.files[0];
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name) // 通过append向form对象添加数据
      let url='/upload/bigimg';
      this.send(param,url,1);

    },
    update_download_url (e) {
      let file = e.target.files[0];
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name) // 通过append向form对象添加数据
      let url='/upload/package';
      this.send(param,url,2);
    },
    update_screenshot1 (e) {
      let file = e.target.files[0];
      console.log(e);
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name) // 通过append向form对象添加数据
      let url='/upload/screenshot';
      this.send(param,url,3);

    },
    update_screenshot2 (e) {
      let file = e.target.files[0];
      // let file = e.target.files[0]
      console.log(e);
      // console.log(number);
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name) // 通过append向form对象添加数据
      // param.append('id', this.$store.state.userId) // 添加form表单中其他数据
      let url='/upload/screenshot';
      this.send(param,url,4);

    },
    update_screenshot3 (e) {
      let file = e.target.files[0];
      // let file = e.target.files[0]
      console.log(e);
      // console.log(number);
      let param = new FormData() // 创建form对象
      param.append('file', file, file.name) // 通过append向form对象添加数据
      // param.append('id', this.$store.state.userId) // 添加form表单中其他数据
      let url='/upload/screenshot';
      this.send(param,url,5);

    },

    async send(param,url,xuhao){
      var that=this;
      // withCredentials: true 使得后台可以接收表单数据 跨域请求
      const instance =await axios.create({
        withCredentials: true
      })
      // let m='';
      // url为后台接口
      let url1='http://120.77.215.233:8080';
      url1=url1+url;
      instance.post(url1, param)
        .then(function (response) {//注意，要利用其返回值，需将this换成that，然后不用箭头函数
          console.log(xuhao);
          that.filelist[xuhao]=response.data.data;

          // console.log(that.result);

        }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
        .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
    },
    selectFile() {
      this.set();
      let user_id = this.uploadForm.user_id;
      let app_name = this.uploadForm.app_name;
      let introduce = this.uploadForm.introduce;
      let description = this.uploadForm.description;
      let app_class_id = this.uploadForm.app_class_id;
      let developer_name = this.uploadForm.developer_name;
      let website = this.uploadForm.website;
      let version = this.uploadForm.version;
      let app_size = this.uploadForm.app_size;
      let size_unit = this.uploadForm.size_unit;
      let app_icon = this.app_icon;
      let app_big_img = this.app_big_img;
      let download_url = this.download_url;
      let screenshot1 = this.screenshot1;
      let screenshot2 = this.screenshot2;
      let screenshot3 = this.screenshot3;
      console.log(user_id);

      if(app_name.length === 0) return;
      if(introduce.length === 0) return;
      if(description.length === 0) return;
      if(app_class_id.length === 0) return;
      if(developer_name.length === 0) return;
      if(website.length === 0) return;
      if(version.length === 0) return;
      if(app_size.length === 0) return;
      if(size_unit.length === 0) return;
      if(app_icon.length === 0) return;
      if(app_icon.length === 0) return;
      if(app_big_img.length === 0) return;
      if(download_url.length === 0) return;
      if(screenshot1.length === 0) return;
      if(screenshot2.length === 0) return;
      if(screenshot3.length === 0) return;

      upload( user_id,
        app_name,
        introduce,
        description,
        app_class_id,
        developer_name,
        website,
        version,
        app_size,
        size_unit,
        app_icon,
        app_big_img,
        download_url,
        screenshot1,
        screenshot2,
        screenshot3).then(res =>{
        console.log(res);
        let {code,msg,data}=res;
        if (code==200) {
          alert(msg);
          // this.$router.replace('/index');
        }
        if (code==400) alert(msg);
        // this.$router.replace('/login');
      }).catch(err =>{
        alert('密码或账号错误')
      });

    },
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
