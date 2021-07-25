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
  #tab-bar{
    width: 20%;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
  }
</style>
