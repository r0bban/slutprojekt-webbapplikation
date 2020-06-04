<template>
  <div id="app">
    <Header />
    <Login v-if="this.$store.state.showLogin" />
    <ShoppingCart v-if="this.$store.state.showCart" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ShoppingCart from "./components/ShoppingCart";
export default {
  data() {
    return {};
  },
  components: {
    Login,
    ShoppingCart,
    Header,
    Footer
  },
  methods: {},
  async beforeMount() {
    await this.$store.dispatch("initialProductLoad");
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  border: 1px solid black;
}
#app {
  display: grid;
  grid-template-rows: 8vh minmax(77vh, auto) 15vh;
}
</style>
