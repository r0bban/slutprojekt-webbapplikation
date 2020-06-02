<template>
  <div class="login">
    <label for="username">Username</label>
    <input type="text" id="username" />
    <label for="password">Password</label>
    <input type="text" id="password" />
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.login {
  position: absolute;
  left: 50%;
  top: 60%;
  background-color: seagreen;
  width: 300px;
  height: 300px;
}
</style>