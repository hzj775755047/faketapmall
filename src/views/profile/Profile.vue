<template>
  <div id="profile">
    <profile-content/>
  </div>
</template>

<script>
import ProfileContent from "./ProfileContent";
export default {
  name: "Profile",
  components: {ProfileContent}
}
</script>

<style scoped>
  #profile{
    width: 600px;
    margin: 0 20px 0 20px;
  }
</style>
