<template>
  <div id="details-comment">
    <div class="comment-user">
      <div class="user-img">
        <img src="~assets/img/index/default.png" alt="">
      </div>
      <div class="user-details">
        <div class="user-name">{{ users[random(0, users.length)] }}</div>
        <div class="user-publish-days">{{ random(1, 10) }}天前</div>
      </div>
    </div>
    <div class="comment-rate">
      <el-rate :value="random(1, 5)" disabled :colors="['#1296db', '#1296db', '#1296db']" disabled-void-color="#868c92"/>
    </div>
    <div class="comment-content">
      <p>{{comments[random(0, comments.length)]}}</p>
    </div>
    <div class="comment-bottom">
      <div class="bottom-user-publish-platform">来自 {{platforms[random(0, platforms.length)]}}</div>
      <div class="bottom-btns">
        <span class="bottom-btn"><img src="~assets/img/label/share.svg"/>{{random(1, 10)}}</span>
        <span class="bottom-btn"><img src="~assets/img/label/comment.svg"/>{{random(1, 10)}}</span>
        <span class="bottom-btn"><img src="~assets/img/label/like.svg"/>{{random(1, 10)}}</span>
        <span class="bottom-btn"><img src="~assets/img/label/unlike.svg"/>{{random(1, 10)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsComment",
  data(){
    return {
      platforms: ['pc端', '小米Mi 11 Ultra', 'iPhone 12 Pro Max', '华为nova 7 5G', 'OPPO A53 5G', '一加手机9R', '华为P30 Pro'],
      users: ['美少女', '小伙', '怪力', '丧女'],
      comments: ['太好玩了这app！', '我是感觉不错的', '一点都不好用', '我感觉一般般吧']
    }
  },
  methods: {
    random(lower, upper){
      return Math.floor((Math.random() * (upper - lower)) + lower);
    }
  }
}
</script>

<style scoped>
  #details-comment{
    display: flex;
    flex-direction: column;
    background-color: #f5f7f8;
    font-size: 16px;
    margin: 20px;
    padding: 20px;
    border-radius: 6px;
  }
  .comment-user{
    display: flex;
    flex-direction: row;
  }
  .user-img{
    width: 40px;
    margin-right: 15px;
  }
  .user-img img{
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
  }
  .user-publish-days{
    color: #b9bec1;
    font-size: 14px;
    line-height: 22px;
  }
  .comment-rate{
    margin-top: 10px;
  }
  .comment-content{
    padding: 15px 3px 0 3px;
    font-size: 16px;
  }
  .comment-bottom{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
  }
  .bottom-user-publish-platform{
    width: 300px;
    color: #868c92;
    font-size: 12px;
    line-height: 18px;
  }
  .bottom-btn{
    text-align: center;
    vertical-align: center;
    justify-content: center;
    color: #1296db;
    cursor: pointer;
    margin-left: 20px;

  }
  .bottom-btn img{
    margin-right: 2px;
    width: 22px;
  }
</style>
