<template>
  <div id="app">
    <header>
      <button @click="toggleLogin()">Toggle Login</button>
      <button @click="toggleCart()">Toggle ShoppingCart</button>
      <router-link :to="{name: 'Account'}">Go to Account</router-link>
      <router-link :to="{name: 'Admin'}">Go to Admin</router-link>
      <router-link :to="{name: 'Registration'}">Go to Registration</router-link>
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
  },
  async beforeMount() {
    await this.$store.dispatch("initialProductLoad");
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
#app {
  display: grid;
  grid-template-rows: 5vh minmax(95vh, auto);
}
</style>
