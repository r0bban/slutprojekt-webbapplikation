<template>
  <div class="shoppingCart">
    <ul>
      <li>Champinjon 1st</li>
      <li>Räkor 5st</li>
      <li>Krabba 6st</li>
      <li>Kräfta 10st</li>
      <li>Ostron 15st</li>
      <li>Musslor 1st</li>
    </ul>
    <router-link :to="{name: 'Checkout'}">To Checkout</router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
.shoppingCart {
  margin: auto;
  position: absolute;
  top: 20%;
  left: 20%;
  background-color: aquamarine;
  width: 300px;
  height: 300px;
}
</style>