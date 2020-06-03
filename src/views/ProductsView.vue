<template>
  <div class="productsView">
    <div v-for="product in products" :key="product.id" class="listProduct">
      <div class="imgSmall">{{product.value}} IMG</div>
      <router-link class="title" :to="{name: 'Product', params: {id: product.id}}">{{product.value}}</router-link>
      <span class="price">3999 kr</span>
    </div>

    <!-- <router-link :to="{name: 'Products'}">Go Back to All</router-link> -->
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showProduct: false
    };
  },
  computed: {
    products() {
      return this.$store.state.tmpData;
    }
  }
};
</script>
<style lang='scss' scoped>
.productsView {
  background-color: teal;
  position: relative;
  display: grid;

  grid-auto-rows: 100px;
}
.listProduct {
  display: flex;
  background-color: rosybrown;
  & > *:nth-child(2) {
    flex-grow: 1;
    background-color: seagreen;
  }
}

.imgSmall {
  background-color: greenyellow;
  height: 50px;
  width: 100px;
}
</style>