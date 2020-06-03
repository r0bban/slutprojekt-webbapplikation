<template>
  <div class="productContainer" @click="leaveModal">
    <div class="product">
      <router-link class="return" :to="{name: 'Products'}">X Symbol HERE</router-link>

      <h1>{{product.value}}</h1>
      <h2>3999 kr</h2>
      <div class="bigPicture">BIG PIC PLACEHOLDER</div>
      <button>Lägg till Varukorg</button>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    product() {
      return this.$store.state.tmpData.find(
        value => value.id == this.$route.params.id
      );
    }
  },
  methods: {
    leaveModal() {
      console.log("Leaving Modal");
      this.$router.push({ name: "Products" });
    }
  }
};
</script>
<style lang='scss' scoped>
.productContainer {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  // left: 20%;
  width: 100%;
  height: 100%;
  background-color: rgba(46, 42, 40, 0.8);
}
.product {
  position: relative;
  padding: 1rem;
  background-color: white;
  border-radius: 5px;
  width: 80%;
  height: 80%;
}
.bigPicture {
  width: 300px;
  height: 300px;
  background-color: darkcyan;
  border-radius: 5px;
}
.return {
  margin: 1rem;
  top: 0;
  right: 0;
  position: absolute;
  color: green;
  background-color: magenta;
}
</style>