<template>
  <div class="wrapper" ref="wrapper">
    <div class="wrapper-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    mounted(){
      this.scroll = new BScroll((this.$refs.wrapper), {

      })
    },
    data(){
      return {
        scroll: null
      }
    }
  }
</script>

<style scoped>

</style>
