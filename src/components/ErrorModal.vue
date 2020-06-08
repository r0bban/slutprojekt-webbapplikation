<template>
  <div class="errorModal">
    <div class="msgContainer">
      <span class="header">Error Occurred</span>
      <span class="label">Message:</span>
      <p class="message">{{error}}</p>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    error() {
      return this.$store.state.error;
    }
  }
};
</script>
<style lang='scss' scoped>
.errorModal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .msgContainer {
    box-shadow: 0 0 5px white;
    padding: 1rem;
    width: 30%;
    min-height: 40%;
    border-radius: 15px;
    background-color: white;

    .header {
      display: block;
      font-size: 2rem;
      font-weight: 500;
    }
    .label {
      display: block;
      font-weight: bold;
      margin-right: 0.5rem;
    }
    .message {
      color: red;
    }
  }
}
</style>