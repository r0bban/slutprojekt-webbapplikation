<template>
  <div class="productsView">
    <aside>
      <select name="category" v-model="category">
        <option value>All</option>
        <option value="board">Boards</option>
        <option value="wheels">Wheels</option>
        <option value="clothes">Clothes</option>
      </select>
      <div class="priceContainer">
        <label for>Min Price</label>
        <input type="number" v-model="minPrice" />
        <label for>Max Price</label>
        <input type="number" v-model="maxPrice" />
      </div>
    </aside>
    <section class="articles">
      <article v-for="product in products" :key="product._id" class="listProduct">
        <div class="imgSmall" @click="goToSingleProduct(product._id)">
          <img :src="require(`@/assets/${product.imgFile}`)" alt />
        </div>
        <div class="productInfo">
          <div class="static">
            <span>{{product.title}}</span>
            <span>{{product.shortDesc}}</span>
            <span>{{product.price}}</span>
          </div>
          <div class="navigation">
            <button>
              <img :src="require('@/assets/heartIcon.svg')" alt />
            </button>
            <button @click="addToCart(product)">
              <img :src="require('@/assets/cartIcon.svg')" alt />
            </button>
          </div>
        </div>
      </article>
    </section>

    <!-- <router-link :to="{name: 'Products'}">Go Back to All</router-link> -->
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      minPrice: 0,
      maxPrice: 10000000,
      category: "",
      showProduct: false
    };
  },
  computed: {
    products() {
      let tmp = this.$store.state.products.filter(
        product =>
          product.price >= this.minPrice && product.price <= this.maxPrice
      );
      if (this.category == "") return tmp;
      else return tmp.filter(product => product.category == this.category);
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit("addProductToCart", product);
    },
    goToSingleProduct(productId) {
      console.log("EM");
      this.$router.push({ name: "Product", params: { id: productId } });
    }
  }
};
</script>
<style lang='scss' scoped>
.productsView {
  // max-width: 1200px;
  // background-color: teal;
  // position: relative;
  display: grid;
  grid-template-rows: 5%;
  // height: 100%;
  // grid-auto-rows: 100px;
}
aside {
  padding: 1rem;
  background-color: maroon;
}
.articles {
  padding: 1rem;
  background-color: #e0ffdb;
  gap: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 30%;
  overflow: auto;
}
.listProduct {
  display: grid;
  grid-template-rows: 4fr 1fr;
  // background-color: rosybrown;
  // & > *:nth-child(2) {
  //   flex-grow: 1;
  //   background-color: seagreen;
  // }
}

.imgSmall {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff4f4;
  // width: 100px;
  width: 100%;
  img {
    max-width: 200px;
    // height: 100%;
    // object-fit: contain;
  }
}
.productInfo {
  display: flex;
  justify-content: space-between;

  .static {
    display: flex;
    flex-direction: column;
  }
  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    & > * {
      // margin: 0.5rem;
      min-height: 50px;
    }
  }
}
</style>