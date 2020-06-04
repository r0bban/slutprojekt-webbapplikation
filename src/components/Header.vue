<template>
  <div class="header">
    <router-link :to="{name: 'Products'}">
      <img :src="require('../../assets/sinus-logo.svg')" alt />
    </router-link>
    <ul class="menuItems">
      <li>
        <router-link :to="{name: 'Products'}">Products</router-link>
      </li>
      <li>
        <img @click="toggleCart" :src="require('../../assets/icon-bag-black.svg')" alt />
      </li>
      <li>
        <button @click="toggleUser">Växla Roll</button>
      </li>
    </ul>
    <div class="login">
      <router-link v-if="user=='Customer'" :to="{name: 'Account'}">My Account</router-link>
      <router-link v-else-if="user=='Admin'" :to="{name: 'Admin'}">Admin View</router-link>
      <div class="loginContainer" v-else>
        <span @click="toggleLogin">Sign In</span>
        <span>
          <router-link :to="{name: 'Registration'}">Sign Up</router-link>
        </span>
        <!-- <label for>Email</label>
        <input type="text" />
        <label for>Password</label>
        <input type="text" />-->
      </div>
    </div>
    <!-- <button @click="toggleLogin">Toggle Login</button> -->
    <!-- <button @click="toggleCart">Toggle ShoppingCart</button> -->
    <!-- <router-link :to="{name: 'Account'}">Go to Account</router-link> -->
    <!-- <router-link :to="{name: 'Admin'}">Go to Admin</router-link> -->
    <!-- <router-link :to="{name: 'Registration'}">Go to Registration</router-link> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: undefined
    };
  },
  methods: {
    toggleUser() {
      if (this.user == "Customer") {
        this.user = "Admin";
      } else if (this.user == "Admin") {
        this.user = undefined;
      } else {
        this.user = "Customer";
      }
    },
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
<style lang='scss' scoped>
.header {
  background-color: lightblue;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 0.5fr;
  grid-auto-rows: 100%;

  img {
    max-height: 100%;
  }
  ul {
    list-style: none;
  }
}
.menuItems {
  display: flex;
  align-items: center;
  justify-content: space-around;
  a {
    background-color: transparent;
    text-decoration: none;
    padding: 0.5rem;
  }
}
.loginContainer {
  display: flex;
  flex-flow: column wrap;
}
</style>