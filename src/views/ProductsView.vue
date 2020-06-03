<template>
  <div class="products">
    <button v-on:click="initialProductLoad">hämta produkter</button>
    <button v-on:click="addProduct">lägg till produkter</button>
    <div
    v-for="(product, index) in this.$store.state.products"
    :key="index"
    ></div>
    <!-- <ul>
      <li v-for="(product,index) in this.$store.state.tmpData" :key="index">
        <router-link :to="{name: 'Product', params: {id: index+1}}">Show {{product}} Big</router-link>
      </li>
    </ul>
    <hr />
    <router-link :to="{name: 'Products'}">Go Back to All</router-link>
    <router-view /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showProduct: false
    };
  },
  methods: {
    initialProductLoad() {
      this.$store.dispatch("initialProductLoad");
    },
    addProduct() {
      this.$store.dispatch("registerNewProduct", this.$store.state.newProduct);
    },
  }
};
</script>
<style lang='scss' scoped>
</style>