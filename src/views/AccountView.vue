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
    <div>
      <h3>Orderhistorik:</h3>
      <!-- <p>{{this.$store.state.account.myOrders}}</p> -->
      <p>{{this.localUser}}</p>
      <p></p>
    </div>
  </div>
</template>
<script>
// import OrderHistory from '@/components/OrderHistory.vue'

export default {
  data() {
    return {
      localUser: Object
    };
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
    setLocalUser() {
      this.localUser = this.getLocalStorageUser();
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