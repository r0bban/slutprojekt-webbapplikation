<template>
  <div class="accountView">
    <div v-if="getCurrentUser" class="details">
      <h3>Mitt konto</h3>
      <h4>{{getCurrentUser.name}}</h4>
      <h4>{{getCurrentUser.email}}</h4>
      <button @click="logout()">Logga ut</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    getCurrentUser() {
      return this.$store.state.currentUser;
    },
    getLocalStorageUser() {
      return localStorage.getItem("currentUser");
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
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