<template>
  <div id="app">
    <header>
      <button @click="toggleLogin()">Toggle Login</button>
      <button @click="toggleCart()">Toggle ShoppingCart</button>
    </header>
    <Login v-if="this.$store.state.showLogin" />
    <ShoppingCart v-if="this.$store.state.showCart" />
    <router-view />
  </div>
</template>
<script>
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
export default {
  data() {
    return {};
  },
  components: {
    Login,
    ShoppingCart
  },
  methods: {
    toggleLogin() {
      console.log("Pressed Login");
      this.$store.commit("toggleLogin");
    },
    toggleCart() {
      console.log("Pressed Cart");
      this.$store.commit("toggleCart");
    }
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
