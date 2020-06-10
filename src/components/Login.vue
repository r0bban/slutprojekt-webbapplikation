<template>
  <div class="login">
    <form class="form" onsubmit="return false" v-if="!createAccount">
      <label for>User Credentials</label>
      <hr />
      <div class="formRow">
        <label class="label" for="username">E-mail</label>
        <input
          class="input"
          v-model="creds.email"
          type="text"
          id="username"
          placeholder="epost@snabelapunkt.com"
        />
      </div>
      <div class="formRow">
        <label class="label" for="password">Password</label>
        <input class="input" v-model="creds.password" type="password" id="password" />
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
        <label class="label" for>Name</label>
        <input class="input" type="text" v-model="newAccount.name" />
      </div>
      <div class="formRow">
        <label class="label" for>Email</label>
        <input class="input" type="text" v-model="newAccount.email" />
      </div>
      <div class="formRow">
        <label class="label" for>Password</label>
        <input type="password" v-model="newAccount.password" />
      </div>
      <div class="formRow">
        <label class="label" for>Repeat Password</label>
        <input class="input" type="password" v-model="newAccount.repeatPassword" />
      </div>
      <div class="formRow">
        <label class="label" for>Street</label>
        <input class="input" type="text" v-model="newAccount.adress.street" />
      </div>
      <div class="formRow">
        <label class="label" for>Zip</label>
        <input class="input" type="number" v-model="newAccount.adress.zip" />
      </div>
      <div class="formRow">
        <label class="label" for>City</label>
        <input class="input" type="text" v-model="newAccount.adress.city" />
      </div>
      <div class="formRow">
        <label class="label" for>Cardowner</label>
        <input class="input" type="text" v-model="newAccount.cardOwner" />
      </div>
      <div class="formRow">
        <label class="label" for>CardNumber</label>
        <input class="input" type="number" v-model="newAccount.cardNumber" />
      </div>
      <div class="formRow">
        <label class="label" for>Valid Unitl</label>
        <input class="input" type="date" v-model="newAccount.validUntil" />
      </div>
      <div class="navigationButtons">
        <button @click="createAccount =false">Back to login</button>
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
      this.$store.commit("closeModal");
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
      if (
        this.newAccount.password == this.newAccount.repeatPassword &&
        this.newAccount.email.length > 0 &&
        this.newAccount.name.length > 0 &&
        this.newAccount.password > 0
      )
        this.$store.dispatch("createNewUser", this.newAccount);
      else {
        this.$store.commit("setError", "Name, Email and Password is required!");
      }
      // this.$store.dispatch("registerNewProduct", this.$store.state.newProduct)
    }
  }
};
</script>
<style lang='scss' scoped>
.login {
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  min-width: 40%;
  min-height: 40%;
  overflow: auto;
}
.form {
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  background-color: white;
  // width: 30%;
  // min-height: 40%;
  display: flex;
  flex-direction: column;
  transition: width 1s;

  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  .input {
    padding: 0.5rem;
    border-radius: 5px;
    border: 1px solid black;
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
.label:nth-child(2) {
  background-color: red;
}
</style>