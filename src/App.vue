<template>
  <div id="app">
    <Header />

    <!-- <ShoppingCart  /> -->
    <router-view class="mainContainer" />
    <Footer />
    <ModalComponent v-if="this.$store.state.showModal" />
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalComponent from "./components/ModalComponent";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    ModalComponent
  },
  methods: {},
  async beforeCreate() {
    await this.$store.dispatch("initialProductLoad");
  },
  created() {
    if (localStorage.getItem("currentUser")) {
      this.$store.commit(
        "setCurrentUser",
        JSON.parse(localStorage.getItem("currentUser"))
      );
      this.$store.commit(
        "setToken",
        JSON.parse(localStorage.getItem("userToken"))
      );
    }
  }
};
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-size: 16px;
  line-height: 1.6;
  // border: 1px solid black;
}
#app {
  position: relative;
  // width: 100vw;
  background-color: beige;
  display: grid;
  grid-template-rows: 8vh minmax(82vh, auto) 10vh;//8vh 82vh 10vh;
}
.mainContainer {
  margin: 0 auto;
  width: 80%;
  max-width: 1440px;
}

.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
