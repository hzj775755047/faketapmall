<template>
  <div id="app">
    <!-- 左部导航栏   -->
    <main-nav-bar/>
    <!-- 右边内容栏   -->
    <div id="middle-content">
<!--      <input type="file" @change="getFile($event)">-->
<!--      <button class="" @click="submit($event)">提交</button>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import RightHeader from "@/components/content/rightContent/RightHeader";
  import MainNavBar from "@/components/content/tabbar/MainNavBar";
  import axios from 'axios';
  export default {
    name: 'App',
    components: {
      MainNavBar, RightHeader
    },
    methods: {
      getFile: function (event) {
        this.file = event.target.files[0];
        console.log(this.file);
      },
      submit: function (event) {
        //阻止元素发生默认的行为
        event.preventDefault();
        let formData = new FormData();
        formData.append("file", this.file);
        axios.post('http://120.77.215.233:8080/upload/icon', formData)
          .then(function (response) {
            alert(response.data);
            console.log(response);
          })
          .catch(function (error) {
            alert("上传失败");
            console.log(error);
          });
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  #app{
    display: flex;
    justify-content: center;
    flex: 1;
    margin: 0 auto;
  }
  #middle-content{
  }
</style>
