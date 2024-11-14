<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "TabBar"
}
</script>

<style scoped>
 @media only screen and (max-width: 600px) {
  #tab-bar{
    flex-direction: row !important;
    z-index: 99 !important;
    background:#fff;
  }
  
 }
     
  #tab-bar{
    width: auto;
    left: 0;
    display: flex;
    flex-direction: column;
  }
</style>
