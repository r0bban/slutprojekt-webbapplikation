<template>
  <div class="checkout">
    <section>
      <OrderArticle v-for="product in cart" :key="product._id" :product="product" />
      <h2>Total Amount: {{amount}}</h2>
      <h2>Total Number of Articles: {{quantity}}</h2>
    </section>

    <button @click="createNewOrder">BUY STUFF</button>
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
    },
    amount() {
      return this.$store.state.totalOrderAmount;
    },
    quantity() {
      return this.$store.state.totalOrderQuantity;
    }
  },
  methods: {
    createNewOrder() {
      console.log("Send the API a new order based on the current CART");
      if (this.$store.state.currentUser) {
        //Make order
        this.$router.push({ name: "Products" });
        this.$store.commit("clearCart");
      } else {
        this.$store.commit("toggleLogin");
      }
      //RESET THE CURRENT CART AND RETURN TO PRODUCTS OR PURCHASE COMPLETE SCREEN
    }
  }
};
</script>
<style lang='scss' scoped>
</style>