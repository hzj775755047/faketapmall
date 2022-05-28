<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<<<<<<< Updated upstream
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
=======
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
          })
          .catch(function (error) {
            alert("上传失败");
          });
      }
    }
  }
</script>
>>>>>>> Stashed changes

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
