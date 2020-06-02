<template>
  <div class="products">
    <ul>
      <li v-for="(product,index) in this.$store.state.tmpData" :key="index">
        <router-link :to="{name: 'Product', params: {id: index+1}}">Show {{product}} Big</router-link>
      </li>
    </ul>
    <hr />
    <router-link :to="{name: 'Products'}">Go Back to All</router-link>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showProduct: false
    };
  }
};
</script>
<style lang='scss' scoped>
.products {
  background-color: lightgray;
}
</style>