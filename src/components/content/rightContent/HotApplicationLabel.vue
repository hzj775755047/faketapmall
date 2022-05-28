<template>
  <div id="hot-application-label">
    {{name.app_class_name}}
  </div>
</template>

<script>
  export default {
    name: "HotApplicationLabel",
    props: {
      name: {}
    }
  }
</script>

<style scoped>
  #hot-application-label{
    height: 26px;
    border-radius: 4px;

    padding: 0 8px;
    display: flex;
    align-items: center;
    width: fit-content;
    white-space: nowrap;
    color: var(--hot-label-font-color);
    background-color: var(--hot-label-bg-color);
    line-height: var(--hot-label-line-height);
    font-size: var(--hot-label-font-size);
  }
</style>
