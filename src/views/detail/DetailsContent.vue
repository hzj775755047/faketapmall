<template>
  <div id="details-content">
    
    <!-- 顶部 -->
    <div class="details-top">
       <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="(item, index) in srcList" :key="index">
              <el-image fit="cover" :src="item" :preview-src-list="[item]"></el-image>
            </el-carousel-item>
          </el-carousel>
      <div class="details-top-img">
       
      </div>
      
     
      <div class="details-top-description">
        <div class="details-top-description-icon">
          <img :src="urlPre + app.app_icon" alt="">
        </div>
        <div class="details-top-description-introduction">
          <div class="details-application-name">{{ app.app_name }}</div>
          <div class="details-application-introduction">{{ app.introduce }}</div>
        </div>
      </div>
    </div>
    <!-- 中间内容 -->
    <div class="details-middle-content">
      
      <div class="details-main-content-label">{{ className }}</div>
      <div class="details-main-content-score">
        <img src="~assets/img/taptap.png" alt="">
        <div>{{random(1, 10)}}</div>
      </div>
      <div class="details-main-content-company">
        <div class="description-title">厂商<span class="description">{{ app.developer_name }}</span></div>
        <div class="description-title">浏览<span class="description">{{ strInsert(app.views == undefined ? 114514 : app.views, 3, ',') }}</span></div>
        <div class="description-title">官网<span class="description">{{ app.website }}</span></div>
        <div class="description-title">版本<span class="description">{{ app.version }}</span></div>
        <div class="description-title">大小<span class="description">{{ app.app_size+" "+app.size_unit }}</span></div>
      </div>
      <div class="details-main-content-btns">
        <button class="details-main-content-btn" @click="goDownload">下载</button>
      </div>
    </div>
    <!-- 下边详情内容 -->
    <div class="details-bottom-content">
      <el-tabs v-model="activeName" :stretch="true">
        <el-tab-pane label="详情" name="details">
          <!-- 轮播图 -->
          
          <!-- 介绍信息 -->
          <div class="details-bottom-introduction">
            <section style="margin-bottom: 15px">
              <header>
                <h2>简介</h2>
              </header>
              <main style="margin-top: 16px;line-height: 25px;font-size: 14px;color: #1d2127">
                <p>{{ app.description }}</p>
              </main>
            </section>
          </div>
        </el-tab-pane>
        <el-tab-pane label="评论" name="comments">
          <details-comment v-for="item in 4" :key="item"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import {getApplicationbyId, getScreenShotbyId, getClassNamebyId} from "../../network/api";
import {urlPre} from "../../network/request";
import DetailsComment from "./DetailsComment";

export default {
  name: "DetailsContent",
  components: {DetailsComment},
  data(){
    return {
      activeName: 'details',
      app: {},
      app_class_id: 1,
      urlPre: urlPre,
      srcList: [],
      className: '',
    }
  },
  created() {
    // 获取应用信息
    getApplicationbyId(this.$route.params.appId).then(res =>{
      let {status, msg, data} = res.data;
      if(status === 200){
        this.app = data[0];
        // 根据应用类别id获取类别名称
        getClassNamebyId(this.app.app_class_id).then(res =>{
          let {status, msg, data} = res.data;
          if(status === 200){
            this.className = data[0].app_class_name;
          }else{
            this.$message.error(msg);
          }
        }).catch(err =>{
          this.$message.error(err);
        });
      }else{
        this.$message.error(msg);
      }
    }).catch(err =>{
      this.$message.error(err);
    });
    // 根据应用id获取应用展示图片
    getScreenShotbyId(this.$route.params.appId).then(res =>{
      let {status, msg, data} = res.data;
      if(status === 200){
        for(let item in data){
          this.srcList.push(this.urlPre + data[item].app_scr_url);
        }
      }else{
        this.$message.error(msg);
      }
    }).catch(err =>{
      this.$message.error(err);
    });
  },
  methods: {
    back(){
      this.$router.go(-1);
    },
    strInsert(str, length, insert) {
      str = str.toString();
      if(str.length <= 3) return str;
      let reg = new RegExp("\\d{1," + length + "}", "g");
      let ma = str.match(reg);
      return ma.join(insert);
    },
    goDownload(){
      window.open(this.app.website);
    },
    random(lower, upper){
      return ((Math.random() * (upper - lower)) + lower).toFixed(1);
    }
  }
}
</script>

<style scoped>
  #details-content{
    margin-bottom: 50px;
    margin-top:80px;
  }
  .details-top{
    position: relative;
  }
  .details-top-img{
    display: flex;
    justify-content: center;
    height: 100px;
    border-radius: 6px;
    background: var(--primary-white);
    overflow: hidden;
  }
  .details-top-img img{
    width: 150%;
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
  .details-top-description{
    display: flex;
    position: absolute;
    width: 600px;
    bottom: 0;
    padding: 8px 12px 8px 16px;
    background: linear-gradient(0deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),rgba(114,102,104,.1);
    backdrop-filter: blur(15px);
  }
  .details-top-description-icon{
    width: 64px;
    overflow: hidden;
  }
  .details-top-description-icon img{
    object-fit: cover;
    width: 100%;
  }
  .details-top-description-introduction{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 16px;
    color: #fff;
  }
  .details-application-name{
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  }
  .details-application-introduction{
    font-size: 14px;
  }
  .details-middle-content{
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: var(--primary-white);
  }
  .details-main-content-label{
    width: fit-content;
    color: #1296db;
    font-size: 12px;
    font-weight: 700;
    text-align: center;
    margin-left: 20px;
    margin-top: 15px;
    padding: 1px 6px;
    border: 1px solid #1296db;
    border-radius: 4px;
  }
  .details-main-content-score{
    display: flex;
    flex-direction: column;
    text-align: center;
    position: absolute;
    font-weight: 700;
    font-size: 34px;
    color: #1296db;
    top: 0;
    right: 40px;
    width: 55px;
  }

  .details-main-content-company{
    font-size: 14px;
    margin-left: 25px;
    margin-top: 7px;
    color: #b9bec1;
  }
  .description-title{
    margin-top: 5px;
    margin-right: 5px;
  }
  .description{
    color: #868c92;
    margin-left: 8px;
  }
  .details-main-content-btns{
    display: flex;
    justify-content: center;
    padding: 24px 0;
  }
  .details-main-content-btn{
    cursor: pointer;
    width: 60%;
    height: 46px;
    border-radius: 23px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    padding: 0 24px;
    background-color: #1296db;
    color: var(--primary-white);
  }
  .details-main-content-btn:hover{
    background-color: #1285C2;
    transition-duration: .3s;
  }
  .details-bottom-content{
    background-color: var(--primary-white);
    color: black;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .details-bottom-introduction{
    font-size: 14px;
    margin-left: 25px;
    margin-top: 7px;
    padding: 16px 5px;

  }
</style>
