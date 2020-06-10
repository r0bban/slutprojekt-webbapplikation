<template>
  <div id="app">
    <Header />

    <!-- <ShoppingCart  /> -->
    <router-view class="mainContainer" />
    <Footer />
    <ModalComponent v-if="this.$store.state.showModal" />
    <ErrorModal v-if="this.$store.state.error != undefined" />
  </div>
</template>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import ModalComponent from "./components/ModalComponent";
import ErrorModal from "./components/ErrorModal";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    ModalComponent,
    ErrorModal
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
html,
body {
  margin: 0;
  height: 100%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  // font-size: 16px;
  line-height: 1.6;
}

p {
  font-size: 1rem;
}
h1 {
  font-size: 2.2rem;
}
h2 {
  font-size: 1.9rem;
}
h3 {
  font-size: 1.2rem;
}

#app {
  position: relative;
  background-color: beige;
  display: grid;
  min-height: 100%;
  grid-template-rows: 6rem auto 6rem;
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
