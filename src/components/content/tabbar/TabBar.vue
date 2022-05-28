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
    width: auto;
    left: 0;
    display: flex;
    flex-direction: column;
  }
</style>
