<template>
  <div class="goods">
    <div><h2>详情页面</h2></div>
    <div >
      <img :src="item.app_big_img" alt="">
    </div>
    <hr/>

    <div class="base_xinxi">
      <div class="btn_base">
        <button type="primary" class="btn" @click="download()">下载打开</button>
        <button type="primary" class="guanzu_no"  @click="ifgaunzu" v-if="ifTtue==false">未关注</button>
        <!--        <button class="btn_anniu" @click="set" :class="{ newStyle:true===number}">评价</button>-->
        <button type="primary" class="guanzu_yes"  @click="ifgaunzu" v-else>已关注</button>
      </div>


      <div class="base_xinxi2">
        <div class="wenzi">
          <span>浏览量：</span>{{this.item.views}}
        </div>
        <div class="wenzi">
          <span class="guanzu">关注：</span>{{this.item.attention_count}}
        </div>
        <div class="wenzi">
          <span >描述：</span>{{this.item.description}}
        </div>
      </div>
      <hr/>
      <!--      轮播图片-->
      <!--      <div>-->
      <!--        <div v-for="item in this.item.screenShots" :key="item.index"  class="everyItem">-->
      <!--          &lt;!&ndash;      <span>{{item}}</span>&ndash;&gt;-->
      <!--          <img :src="item.app_scr_url" alt="未找到相应图片">-->
      <!--        </div>-->
      <!--      </div>-->

      <!--      详情和评价-->
      <div>
        <div>
          <button class="btn_anniu" @click="change(0)" :class="{ newStyle:0===number}">详情</button>
          <button class="btn_anniu" @click="change(1)" :class="{ newStyle:1===number}">评价</button>
        </div>
      </div>

      <!--      谁展示-->
      <div class="base_xinxi2" style="padding-top: 2%;">
        <div v-show="0===number">
          <div >
            <div class="wenzi">
              <span>开发者/发行商：</span>{{this.item.developer_name}}
            </div>
            <div class="wenzi">
              <span >官网：</span>{{this.item.website}}
            </div>
            <div class="wenzi">
              <span >语言：</span>{{this.item.description}}
            </div>
            <div class="wenzi">
              <span >版本：</span>{{this.item.version}}
            </div>
            <div class="wenzi">
              <span >大小：</span>{{this.item.app_size}}{{this.item.size_unit}}
            </div>
          </div>
        </div>
        <div v-show="1===number">
          <div class="wenzi">
            <span >评价：</span>
            <span class="span_else" v-if="this.average_score==''">暂无评分</span>
            <span class="span_else" v-else>{{this.average_score}}</span>
          </div >
          <div class="wenzi">请给出您的评分：
            <select v-model="score" style="padding: 1% 5%;">
              <option v-for="item in pinfen" :key="item.index">{{item}}</option>
            </select>
          </div>

          <div>
            <div class="text_area">
              <el-input type="textarea" placeholder="写评价" v-model="content" ></el-input>
            </div>
            <!--            <div style="padding-left: 70%;">-->
            <!--              <button type="primary" class="btn" @click="submit_comment" >提交评论</button>-->
            <!--            </div>-->
            <div>
              <button type="primary" class="btn" @click="submit_comment">提交评论</button>
            </div>
          </div>

          <div class="wenzi"><h3>评论区：</h3></div>
          <div class="pinlun_base">
            <div v-for="item2 in comment_data" :key="item2.index" class="pinlun_base2">
              <div class="wenzi">
                <span >用户</span>{{item2.username}}
                &nbsp;&nbsp;<span>评分：</span>{{item2.score}}
              </div>
              <div class="wenzi">
                <span class="span_else">他认为：</span>{{item2.content}}
              </div>


            </div>
          </div>

        </div>
      </div>




    </div>
  </div>
</template>

<script>
import axios from "axios";
import {upload_comment, ifguanzu_judge, buguanzu_do, guanzu_do} from "@/network/detail";
import {getcookie} from "@/network/request";

export default {
  name: "ApplicationDetail",
  data(){
    return{
      ifTtue:'',
      number:0,
      average_score:'',
      content:'',
      score:'',
      app_id:'',
      user_id:'',
      item:{},
      pinfen:[1,2,3,4,5],
      comment_data:[],//所有用户对应用的评价
      guanzu_data:[],//用户所关注的所有应用
    }
  },
  created() {
    this.getdata();
    this.user_id=getcookie('user_id');
    this.ifguanzu_start();
    this.ifguanzu_start();
  },
  mounted(){

  },
  methods:{
    ifgaunzu() {
      if(this.ifTtue){
        this.buguanzu();
      }else{
        this.guanzu();
      }
    },
    guanzu(){
      var that = this;
      let app_id = this.app_id;
      let user_id = this.user_id;
      guanzu_do( app_id,user_id).then(res =>{
        let {code,msg,data}=res;
        if (code==200) {
          that.ifTtue=!that.ifTtue;
        }
      }).catch(err =>{
        alert('其他错误')
      });
    },
    buguanzu(){
      var that = this;
      let app_id = this.app_id;
      let user_id = this.user_id;
      buguanzu_do( app_id,user_id).then(res =>{
        let {code,msg,data}=res;
        if (code==200) {
          that.ifTtue=!that.ifTtue;
        }
      }).catch(err =>{
        alert('其他错误')
      });
    },
    ifguanzu_start(){
      var that = this;
      let app_id = this.app_id;
      let user_id = this.user_id;
      ifguanzu_judge( app_id,user_id).then(res =>{
        let {code,msg,data}=res;
        if (code==200) {
          that.ifTtue=data;
        }
      }).catch(err =>{
        alert('其他错误')
      });
    },
    getpinfen(){
      var result=0;
      var count=0;
      this.comment_data.filter( (item,i) =>{
        if (item.score!=''){
          result+=item.score;
          count++;
        }
        return
      } );
      this.average_score = result/count;
    },
    submit_comment(){
      console.log(this.content,this.score,this.app_id,this.user_id);
      let content = this.content;
      let score = this.score;
      let app_id = this.app_id;
      let user_id = this.user_id;
      upload_comment( content,score,app_id,user_id).then(res =>{
        let {code,msg,data}=res;
        if (code==200) {
          this.$router.replace('/detail');
        }
      }).catch(err =>{
        alert('其他错误')
      });
    },
    change(index) {
      this.getpinfen();
      this.number = index; //重要处
    },
    download () {
      window.location.href = this.item.download_url;
    },
    getdata(){
      this.app_id=this.$route.params.iid;
      var url1 = 'http://120.77.215.233:8080/app/qryAppDetail?app_id='+this.$route.params.iid;
      var url2 = 'http://120.77.215.233:8080/app/qryComment?app_id='+this.$route.params.iid;
      var that=this;
      const instance =axios.create({
        withCredentials: true
      })
      instance.post(url1)
        .then(function (response) {//注意，要利用其返回值，需将this换成that，然后不用箭头函数
          that.item=response.data.data;
        }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
        .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
      instance.post(url2)
        .then(function (response) {
          that.comment_data=response.data.data;
        }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
        .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
    },
  },
  watch: {
    '$route': function(to, from){
      if(this.$route.path.indexOf('detail') !== -1){
        this.app_id=this.$route.params.iid;
        var url1 = 'http://120.77.215.233:8080/app/qryAppDetail?app_id='+this.$route.params.iid;
        var url2 = 'http://120.77.215.233:8080/app/qryComment?app_id='+this.$route.params.iid;
        var that=this;
        const instance =axios.create({
          withCredentials: true
        })
        instance.post(url1)
          .then(function (response) {//注意，要利用其返回值，需将this换成that，然后不用箭头函数
            that.item=response.data.data;
          }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
          .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
        instance.post(url2)
          .then(function (response) {
            that.comment_data=response.data.data;
          }) // 成功返回信息 调用函数 函数需自己定义，此处后面省略
          .catch(this.serverError) ;// 服务器错误 调用对应函数 函数需自己定义，此处后面省略
        document.body.scrollTop = 0;
      }
    }
  },
}
</script>

<style scoped>
.text_area{
  padding-top: 3%;
  padding-bottom: 2%;
  margin: 0 100px;
}
.guanzu_no{
  height: 31px;
  background: #64b3d7;
  border-radius: 31px;
  padding-left: 0;
  padding-right: 0;
  width: 27%;
  font-size: 15px;
  font-weight: normal;
  border-color:#64b3d7 ;

}
.guanzu_yes{
  height: 31px;
  background: #f0892e;
  border-radius: 31px;
  padding-left: 0;
  padding-right: 0;
  width: 27%;
  font-size: 15px;
  font-weight: normal;
  border-color:#f0892e ;
}
h3{
  margin-bottom: 3px;
}
.pinlun_base2{
  padding-top: 2%;
}
.pinlun_base{
  background: white;
  border-radius: 5px;

}
.btn_anniu{

  width: 50%;
  padding: 5px 0;
  font-size: 20px;
  font-weight: bold;
  border: 0 solid #fff;
  color: #000;
  outline: none;
  background: #c1bfbf;
}
.newStyle{
  border-bottom: 2px solid #f0892e;
  color: #f0892e;
  /*font-size: 20px;*/
  font-weight: bold;
}

.wenzi{
  text-align: left;
}

.guanzu{
  text-align: left;
}
.span_else{
  font-weight: normal;
}
span{
  display: inline-block;
  font-weight: bold;
}
.btn_base{
  padding-top: 3%;
  padding-left: 5%;
  padding-right: 10%;
}
.btn{
  border-radius: 19px;
  height: 30px;
  padding-right: 5%;
  padding-left: 5%;
  background-color: #64b3d7;
  border: none;
  margin-left: 12%;
  margin-right: 12%;

}

#base_xinxi2 div{
  padding-top: 5%;
  display: inline-flex;
  padding-right: 5%;
  /*padding-left: 10%;*/
}
.base_xinxi{
  padding-left: 2%;
  padding-right: 2%;
}

.everyItem{
  width: 44px;
  height: 300px;
  display: inline-flex;
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
