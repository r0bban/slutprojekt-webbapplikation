<template>
  <div class="cartContainer" @click.self="close">
    <div class="shoppingCart">
      <div class="productContainer" v-if="this.$store.state.cart.length>0">
        <OrderArticle v-for="product in cart" :key="product._id" :product="product" />
      </div>
      <p v-else>Your shoppingcart is empty</p>

      <button @click="checkout">To Checkout</button>
    </div>
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
    },
    close() {
      this.$store.commit("toggleCart");
    }
  }
};
</script>
<style lang='scss' scoped>
.cartContainer {
  position: absolute;
  background-color: rgba($color: #000000, $alpha: 0.6);
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
.shoppingCart {
  // position: absolute;
  // right: 12%;
  // top: 8%;
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: lightyellow;
  min-width: 40%;
  min-height: 40%;
  overflow: auto;

  // display: flex;
  // flex-direction: column;
}
</style>