<template>
  <div class="productsView">
    <div v-for="product in products" :key="product._id" class="listProduct">
      <div class="imgSmall">
        <img :src="require(`../../assets/${product.imgFile}`)" alt />
      </div>
      <router-link
        class="title"
        :to="{name: 'Product', params: {id: product._id}}"
      >{{product.title}}</router-link>
      <span class="price">{{product.price}}</span>
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
      return this.$store.state.products;
    }
  }
};
</script>
<style lang='scss' scoped>
.productsView {
  background-color: teal;
  // position: relative;
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
  width: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.price {
  min-width: 50px;
}
</style>