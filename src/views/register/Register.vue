<template>
  <div id="register">
    <register-content/>
  </div>
</template>

<script>
import RegisterContent from "./RegisterContent";
export default {
  name: "Register",
  components: {RegisterContent}
}
</script>

<style scoped>
  #register{
    width: 600px;
    margin: 0 20px 0 20px;
  }
</style>
