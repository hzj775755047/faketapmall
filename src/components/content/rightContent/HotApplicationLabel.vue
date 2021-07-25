<template>
  <div id="hot-application-label">
    {{this.name}}
  </div>
</template>

<script>
  export default {
    name: "HotApplicationLabel",
    props: {
      name: {
        type: String,
        default: "你妈死了"
      }
    }
  }
</script>

<style scoped>
  #hot-application-label{
    height: 26px;
    border-radius: 4px;
    margin-right: 6px;
    padding: 0 8px;
    display: flex;
    align-items: center;
    width: fit-content;
    color: var(--hot-label-font-color);
    background-color: var(--hot-label-bg-color);
    line-height: var(--hot-label-line-height);
    font-size: var(--hot-label-font-size);
  }
</style>
