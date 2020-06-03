<template>
  <div class="login">
    <form onsubmit="return false">
      <label for="username">E-mail</label>
      <input v-model="creds.email" type="text" id="username" placeholder="epost@snabelapunkt.com" />
      <label for="password">Password</label>
      <input v-model="creds.password" type="password" id="password" />
      <button @click="submit()">Skicka</button>
      <button @click="reobert()">Robert</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      creds: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submit() {
      this.$store.dispatch("loginUser", this.creds);
    },
    reobert(){
      this.$store.dispatch("registerNewProduct", this.$store.state.newProduct)
    }
  }
};
</script>
<style lang='scss' scoped>
div {
  background-color: lightcoral;
  position: absolute;
  left: 50%;
  top: 20%;
  width: 200px;
  height: 200px;
  form {
    display: flex;
    flex-direction: column;
    form > * {
      margin: 1.2rem;
    }
  }
}
</style>