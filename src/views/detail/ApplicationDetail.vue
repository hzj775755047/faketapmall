<template>
  <div class="goods">
    <div><h2>详情页面</h2></div>
    <div v-for="item in this.item.screenShots" :key="item.index"  class="everyItem">
      <img :src="item.app_scr_url" alt="未找到相应图片">
    </div>
    <div class="base_xinxi">
      <div class="base_xinxi2">
        <div>
          <span>名称：</span>{{this.item.app_name}}
        </div>
        <div>
          <span class="mingcheng2">版本：</span>{{this.item.version}}
        </div>
      </div>
      <div class="base_xinxi2">
        <div>
          <span class="mingcheng2">大小：</span>{{this.item.app_size}}&nbsp;&nbsp;{{this.item.size_unit}}
        </div>
        <div>
          <span>评分：</span>{{this.item.attention_count}}
        </div>
      </div>
      <div class="base_xinxi2">
        <div>
          <span>类别：</span>{{this.item.app_class_name}}
        </div>
        <div>
          <span class="mingcheng2">开发者：</span>{{this.item.developer_name}}
        </div>
      </div>
      <div>
        <span >简介：</span>{{this.item.introduce}}
      </div>
      <div>
        <span >描述：</span>{{this.item.description}}
      </div>
      <div class="btn_base">
        <button type="primary" class="btn" @click="download()">应用下载</button>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "ApplicationDetail",
  data(){
    return{
      item: {}
    }
  },
  created() {
    this.getdata();
  },
  watch: {
    '$route': function(to, from){
      if(this.$route.path.indexOf('detail') !== -1){
        var url = 'http://120.77.215.233:8080/app/qryAppDetail?app_id='+to.params.iid;
        var that=this;
        const instance =axios.create({
          withCredentials: true
        })
        instance.post(url)
          .then(function (response) {//注意，要利用其返回值，需将this换成that，然后不用箭头函数
            that.item=response.data.data;
          }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
          .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
        document.body.scrollTop = 0;
      }
    }
  },
  methods:{
    download(website) {
      window.location.href = this.item.download_url;
    },
    getdata(){
      var url = 'http://120.77.215.233:8080/app/qryAppDetail?app_id='+this.$route.params.iid;
      var that=this;
      const instance =axios.create({
        withCredentials: true
      })
      instance.post(url)
        .then(function (response) {//注意，要利用其返回值，需将this换成that，然后不用箭头函数
          that.item=response.data.data;
        }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
        .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
    },
  }
}
</script>

<style scoped>
  .goods{
    margin: 0 50px;
    width: 600px;
  }
span{
  font-weight: bold;
}
.btn_base{
  padding-top: 3%;
}
.btn{
  height: 30px;
  padding-right: 5%;
  padding-left: 5%;
  background-color: #64b3d7;
  border: none;
  margin-left: 2%;

}

#base_xinxi2 div{

  display: inline-flex;
  padding-right: 5%;
  /*padding-left: 10%;*/
}
.base_xinxi{
  padding-left: 2%;
  padding-right: 2%;
}

.everyItem{
  padding-bottom: 25px;
  border: #adacac solid 2px;
}
img{
  width: 440px;
}
.goods{
  width: 450px;
  background-color: #c1bfbf;
  border-radius: 3px;
}
</style>
