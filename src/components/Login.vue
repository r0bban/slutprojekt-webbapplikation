<template>
  <div class="login">
    <form class="form" onsubmit="return false" v-if="!createAccount">
      <label for>User Credentials</label>
      <hr />
      <div class="formRow">
        <label for="username">E-mail</label>
        <input v-model="creds.email" type="text" id="username" placeholder="epost@snabelapunkt.com" />
      </div>
      <div class="formRow">
        <label for="password">Password</label>
        <input v-model="creds.password" type="password" id="password" />
      </div>
      <div class="navigationButtons">
        <button @click="loginIn">Sign In</button>
        <button @click="toggleAccountCreation">Create New Account</button>
      </div>
    </form>
    <div v-else class="form">
      <label for>New Account</label>
      <hr />
      <div class="formRow">
        <label for>Name</label>
        <input type="text" v-model="newAccount.name" />
      </div>
      <div class="formRow">
        <label for>Email</label>
        <input type="text" v-model="newAccount.email" />
      </div>
      <div class="formRow">
        <label for>Password</label>
        <input type="password" v-model="newAccount.password" />
      </div>
      <div class="formRow">
        <label for>Repeat Password</label>
        <input type="password" v-model="newAccount.repeatPassword" />
      </div>
      <div class="formRow">
        <label for>Street</label>
        <input type="text" v-model="newAccount.adress.street" />
      </div>
      <div class="formRow">
        <label for>Zip</label>
        <input type="number" v-model="newAccount.adress.zip" />
      </div>
      <div class="formRow">
        <label for>City</label>
        <input type="text" v-model="newAccount.adress.city" />
      </div>
      <div class="formRow">
        <label for>Cardowner</label>
        <input type="text" v-model="newAccount.cardOwner" />
      </div>
      <div class="formRow">
        <label for>CardNumber</label>
        <input type="number" v-model="newAccount.cardNumber" />
      </div>
      <div class="formRow">
        <label for>Valid Unitl</label>
        <input type="date" v-model="newAccount.validUntil" />
      </div>
      <div class="navigationButtons">
        <button @click="createNewAccount">Create New Account</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      createAccount: false,
      newAccount: {
        name: "",
        email: "",
        password: "",
        repeatPassword: "",
        adress: {
          street: "",
          city: "",
          zip: 0
        },
        cardOwner: "",
        cardNumber: 0,
        validUntil: new Date(),
        role: "customer",
        orderHistory: []
      },
      creds: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    close() {
      this.$store.commit("toggleLogin");
    },
    loginIn() {
      this.$store.dispatch("loginUser", this.creds);
    },
    toggleAccountCreation() {
      console.log("Display New Account");
      this.createAccount = !this.createAccount;
      // this.$store.dispatch("registerNewProduct", this.$store.state.newProduct)
    },
    createNewAccount() {
      console.log("Create new account");
      if (this.newAccount.password == this.newAccount.repeatPassword)
        this.$store.dispatch("createNewUser", this.newAccount);
      else alert("Password does not match");
      // this.$store.dispatch("registerNewProduct", this.$store.state.newProduct)
    }
  }
};
</script>
<style lang='scss' scoped>
.login {
  border-radius: 10px;
  padding: 1rem;
  background-color: lightyellow;
  min-width: 40%;
  min-height: 40%;
  overflow: auto;
}
.form {
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: lightyellow;
  // width: 30%;
  // min-height: 40%;
  display: flex;
  flex-direction: column;
  transition: width 1s;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  input {
    width: 50%;
    font-size: 1.5rem;
    height: 2rem;
  }
  .form > * {
    margin: 1.2rem;
  }
  button {
    border: none;
    background-color: none;
    width: 25%;
    min-height: 50px;
    border-radius: 10px;
  }
  .formRow {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .navigationButtons {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
  }
}
</style>