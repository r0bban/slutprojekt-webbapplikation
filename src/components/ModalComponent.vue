<template>
  <div class="modalComponent" @click.self="close">
    <Login v-if="this.$store.state.showLogin" />
    <ShoppingCart v-if="this.$store.state.showCart" />
    <ErrorModal v-if="this.$store.state.error != undefined" />
  </div>
</template>
<script>
import Login from "./Login";
import ShoppingCart from "./ShoppingCart";
import ErrorModal from "./ErrorModal";
export default {
  components: {
    Login,
    ShoppingCart,
    ErrorModal
  },
  methods: {
    close() {
      this.$store.commit("closeModal");
    }
  }
};
</script>
<style lang='scss' scoped>
.modalComponent {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>