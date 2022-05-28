<template>
  <div id="category-show">
    <category-label v-for="(label, index) in labelList" :key="index" :label-index="index + 1" :label-name="label.labelName" :label-img="label.labelImg" />
  </div>
</template>

<script>
import CategoryLabel from "./CategoryLabel";
export default {
  name: "CategoryShow",
  components: {CategoryLabel},
  data(){
    return {
      labelList: [
        {labelName: '影音娱乐', labelImg: 'yingyinyule'},
        {labelName: '实用工具', labelImg: 'shiyonggongju'},
        {labelName: '社交通讯', labelImg: 'shejiaotongxun'},
        {labelName: '新闻阅读', labelImg: 'xinwenyuedu'},
        {labelName: '拍摄美化', labelImg: 'paishemeihua'},
        {labelName: '美食', labelImg: 'meishi'},
        {labelName: '出行导航', labelImg: 'chuxingdaohang'},
        {labelName: '旅行住宿', labelImg: 'lvxingzhusu'},
        {labelName: '购物比价', labelImg: 'gouwubijia'},
        {labelName: '商务', labelImg: 'shangwu'},
        {labelName: '儿童', labelImg: 'ertong'},
        {labelName: '金融理财', labelImg: 'jinronglicai'},
        {labelName: '运动健康', labelImg: 'yundongjiankang'},
        {labelName: '小程序', labelImg: 'xiaochengxu'}
      ]
    }
  }
}
</script>

<style scoped>
  #category-show{
    width: 600px;
    height: fit-content;
    margin: 0 20px 20px 20px;
    background: var(--primary-white);
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .2);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
