<template>
  <div class="orderArticle">
    {{product.title}} + {{this.quantity}}
    <button
      @click="increaseQuantity(product)"
      style="width: 50px;"
    >+</button>
    <button @click="reduceQuantity(product)" style="width: 50px;">-</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: this.product.quantity
    };
  },
  props: {
    product: Object
  },
  methods: {
    increaseQuantity(product) {
      console.log("Increase");
      this.quantity += 1;
      this.$store.commit("increaseQuantOrderProd", product);
    },
    reduceQuantity(product) {
      this.quantity -= 1;
      console.log("Decrease");
      this.$store.commit("reduceQuantOrderProd", product);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>