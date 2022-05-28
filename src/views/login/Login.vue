<template>
  <div id="login">
    <login-content/>
  </div>
</template>

<script>
import LoginContent from "./LoginContent";
export default {
  name: "Login.vue",
  components: {LoginContent}
}
</script>

<style scoped>
  #login{
    width: 600px;
  }
</style>
