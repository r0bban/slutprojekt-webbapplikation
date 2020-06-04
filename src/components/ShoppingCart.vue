<template>
  <div class="shoppingCart">
    <OrderArticle v-for="product in cart" :key="product._id" :product="product" />

    <button @click="checkout">To Checkout</button>
    <!-- <router-link :to="{name: 'Checkout'}">To Checkout</router-link> -->
  </div>
</template>
<script>
import OrderArticle from "../components/OrderArticle";
export default {
  components: {
    OrderArticle
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    checkout() {
      this.$store.commit("toggleCart");
      this.$router.push({ name: "Checkout" });
    }
  }
};
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