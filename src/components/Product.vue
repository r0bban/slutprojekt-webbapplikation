<template>
  <div class="product">BIG {{this.$store.state.tmpData[this.$route.params.id-1]}}</div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.product {
  position: absolute;
  left: 20%;
  background-color: saddlebrown;
  width: 300px;
  height: 300px;
}
</style>