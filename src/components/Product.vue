<template>
  <div class="productContainer" @click.self="leaveModal">
    <div class="product">
      <router-link class="closeButton" :to="{name: 'Products'}">
        <img :src="require(`@/assets/closeIcon.svg`)" alt />
      </router-link>

      <h1>{{product.title}}</h1>
      <h2>{{product.price}}</h2>
      <h2>{{product.serial}}</h2>
      <h2>{{product.shortDesc}}</h2>
      <p>{{product.longDesc}}</p>
      <div class="bigPicture">
        <img :src="require(`@/assets/${product.imgFile}`)" alt />
      </div>
      <button @click="addToCart">Lägg till Varukorg</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    product() {
      return this.$store.state.products.find(
        value => value._id == this.$route.params.id
      );
    }
  },
  methods: {
    leaveModal() {
      console.log("Leaving Modal");
      this.$router.push({ name: "Products" });
    },
    addToCart() {
      this.$store.commit("addProductToCart", this.product);
    }
  }
};
</script>
<style lang='scss' scoped>
.productContainer {
  position: absolute;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(46, 42, 40, 0.8);
}
.product {
  position: relative;
  margin-top: 10%;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  // width: 80%;
  // height: 50%;
}
.bigPicture {
  width: 300px;
  height: 300px;
  // display: flex;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  background-color: darkcyan;
  border-radius: 5px;
}
.closeButton {
  img {
    max-width: 2%;
    position: absolute;
    right: 0;
    margin: 1rem;
  }
}
</style>