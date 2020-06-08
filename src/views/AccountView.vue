<template>
  <div class="accountView">
    <div v-if="!getCurrentUser">
      <h3>Inte inloggad</h3>
      <button @click="toggleLogin()">Logga in då.</button>
    </div>
    <div v-if="getCurrentUser" class="details">
      <h3>Mitt konto</h3>
      <h4>{{getCurrentUser.name}}</h4>
      <h4>{{getCurrentUser.email}}</h4>
      <p>{{this.$store.state.userToken}}</p>
      <button @click="logout()">Logga ut</button>
    </div>
    <h3 class="showHistory" @click="toggleShowHistory()">Visa min orderhistorik</h3>
    <div class="orderWrapper" v-if="this.showingHistory">
    <OrderHistory v-for="order in myOrders" v-bind:key="order._id" :order="order" />
    </div>
  </div>
</template>
<script>
import OrderHistory from "@/components/OrderHistory.vue";

export default {
  components: {
    OrderHistory
  },
  data() {
    return { showingHistory: false };
  },
  computed: {
    getCurrentUser() {
      return this.$store.state.currentUser;
    },
    getLocalStorageUser() {
      return localStorage.getItem("currentUser");
    },
    myOrders() {
      return this.$store.state.account.myOrders;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    toggleLogin() {
      this.$store.commit("toggleLogin");
    },
    toggleShowHistory() {
      this.showingHistory = !this.showingHistory;
    }
  }
};
</script>
<style lang='scss' scoped>
* {
  padding: 0.4rem;
}

div {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;
}
</style>