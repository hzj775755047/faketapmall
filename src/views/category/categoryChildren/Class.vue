<template>
  <div id="class">
    <categoryApplication v-for="(d,index) in data" :num="index" :data="d"></categoryApplication>
  </div>
</template>

<script>
  import {getCategoryDataById} from "@/network/category";
  import CategoryApplication from "@/views/category/CategoryApplication";
  export default {
    name: "Class",
    components: {
      CategoryApplication
    },
    data(){
      return{
        class_id: null,
        data: null,
      }
    },
    created() {
      this.class_id = this.$route.params.id;
      getCategoryDataById(this.class_id).then(res =>{
        this.data = res;
      })
    },
    watch: {
      '$route': function(to, from){
        getCategoryDataById(to.params.id).then(res =>{
          this.data = res;
        })
        document.body.scrollTop = 0;
      }
    }
  }
</script>

<style scoped>
  #class{
    background-color: #fff;
    border-radius: var(--primary-border-radius);
  }
</style>
