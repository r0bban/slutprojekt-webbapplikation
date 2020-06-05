<template>
  <div class="header">
    <router-link class="logoType" :to="{name: 'Products'}">
      <img :src="require('@/assets/sinus-logo.svg')" alt />
    </router-link>
    <div class="menuItems">
      <div class="navigationButtons">
        <div class="customerButtons" v-if="(user.role == undefined) || (user.role == 'customer')">
          <button @click="goToAccount" class="defaultButton">
            <img :src="require('@/assets/userIcon.svg')" alt />
          </button>
          <button @click="goToFavorites" class="defaultButton">
            <img :src="require('@/assets/heartIcon.svg')" alt />
          </button>
          <button @click="toggleCart" class="defaultButton">
            <img :src="require('@/assets/bagIcon.svg')" alt />
          </button>
        </div>
        <div v-else class="customerButtons">
          <button v-if="this.$route.path != '/admin'" @click="goToAdmin" class="defaultButton">
            <img :src="require('@/assets/wrenchIcon.svg')" alt />
          </button>
          <button v-else class="defaultButton">
            <router-link :to="{name: 'Products'}">
              <img :src="require('@/assets/homeIcon.svg')" alt />
            </router-link>
          </button>
        </div>

        <button @click="toggleLogin" class="logInOut" v-if="!user">Sign In</button>
        <button @click="logOff" class="logInOut" v-else>Log Off</button>
      </div>
      <p v-if="user.role=='customer'">Signed In as {{user.name}}</p>
      <p v-else-if="user.role=='admin'">Signed In as Admin</p>
      <p v-else>Not Signed In</p>
      <!-- <li>
        <router-link :to="{name: 'Products'}">Products</router-link>
      </li>
      <li>
        <img @click="toggleCart" :src="require('@/assets/icon-bag-black.svg')" alt />
      </li>
      <li>
        <button @click="toggleUser">Växla Roll</button>
      </li>-->
    </div>
    <!-- <div class="login">
      <router-link v-if="user.role=='customer'" :to="{name: 'Account'}">My Account</router-link>
      <router-link v-else-if="user.role=='admin'" :to="{name: 'Admin'}">Admin View</router-link>
      <div class="loginContainer" v-else>
        <span @click="toggleLogin">Sign In</span>
        <span>
          <router-link :to="{name: 'Registration'}">Sign Up</router-link>
    </span>-->
    <!-- <label for>Email</label>
        <input type="text" />
        <label for>Password</label>
    <input type="text" />-->
    <!-- </div>
    </div>-->
    <!-- <button @click="toggleLogin">Toggle Login</button> -->
    <!-- <button @click="toggleCart">Toggle ShoppingCart</button> -->
    <!-- <router-link :to="{name: 'Account'}">Go to Account</router-link> -->
    <!-- <router-link :to="{name: 'Admin'}">Go to Admin</router-link> -->
    <!-- <router-link :to="{name: 'Registration'}">Go to Registration</router-link> -->
  </div>
</template>
<script>
// import ShoppingCart from "./ShoppingCart";
export default {
  components: {
    // ShoppingCart
  },
  data() {
    return {};
  },
  methods: {
    goToAccount() {
      this.$router.push({ name: "Account" });
    },
    goToAdmin() {
      this.$router.push({ name: "Admin" });
    },
    goToFavorites() {},
    logOff() {
      this.$store.commit("logout");
    },
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
  },
  computed: {
    user() {
      return this.$store.state.currentUser;
    }
  },
  created() {
    console.log(this.$route);
  }
};
</script>
<style lang='scss' scoped>
.header {
  background-color: lightblue;
  display: flex;

  // grid-template-columns: repeat(2, 1fr) 0.5fr;
  // grid-auto-rows: 100%;
  ul {
    list-style: none;
  }
}
.logoType {
  background-color: #fadbff;
  padding: 0.5rem;
  flex-grow: 5;
  display: flex;
  justify-content: flex-start;
  img {
    height: 100%;
  }
}
.menuItems {
  padding: 0.5rem;
  flex-grow: 1;
  // display: flex;
  // align-items: center;
  // justify-content: space-around;
  // a {
  //   background-color: transparent;
  //   text-decoration: none;
  //   padding: 0.5rem;
  // }
}
.navigationButtons {
  display: flex;
  justify-content: space-between;
}
.loginContainer {
  display: flex;
  flex-flow: column wrap;
}
.navigationButtons {
  display: flex;
}
.customerButtons {
  display: flex;
  flex-grow: 2;
}
.defaultButton {
  display: flex;

  background-color: white;
  border: none;
  height: 50px;
  width: 50px;
  border-radius: 100%;

  padding: 0px;
  // display: flex;
  justify-content: center;
  align-items: center;
}
.logInOut {
  flex-grow: 1;
  border-radius: 25px;
  background-color: white;
}
</style>