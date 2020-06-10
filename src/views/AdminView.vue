<template>
  <div class="adminView">
    <router-view />
    <div class="productsArea">
      <span class="header">Edit Products</span>
      <div class="gridTable">
        <AdminProduct
          class="list-product"
          v-for="product in this.products()"
          :key="product._id"
          :product="local_product(product)"
        />
      </div>
      <span class="header">New Product</span>
      <div class="content-wrapper">
        <div class="spans-fields">
          <div class="row-component">
            <label class="label" for>Title</label>
            <input class="input" type="text" v-model="newProduct.title" />
          </div>
          <div class="row-component">
            <label class="label" for>Price</label>
            <input class="input" type="number" v-model="newProduct.price" />
          </div>
          <div class="row-component">
            <label class="label" for>Short Desc</label>
            <input class="input" type="text" v-model="newProduct.shortDesc" />
          </div>
          <div class="row-component">
            <label class="label" for>Img File</label>
            <select class="input" v-model="newProduct.imgFile">
              <option value="skateboard-generic.png">Generic</option>
              <option value="skateboard-greta.png">Greta</option>
              <option value="wheel-rocket.png">Rocket</option>
              <option value="wheel-spinner.png">Spinner</option>
              <option value="wheel-wave.png">Wave</option>
              <option value="hoodie-ash.png">Ash</option>
              <option value="hoodie-fire.png">Fire</option>
              <option value="hoodie-ocean.png">Ocean</option>
            </select>
          </div>
          <button class="add-button" @click="addNewProduct">Add Article</button>
        </div>
        <div class="area-component">
          <label class="label" for>Long Desc</label>
          <textarea type="text" v-model="newProduct.longDesc" />
        </div>
        <img :src="require(`@/assets/${newProduct.imgFile}`)" alt />
      </div>
    </div>
    <div class="ordersArea">
      <span class="header">Order History</span>
      <div class="orderWrapper">
        <!-- <OrderHistory v-for="order in myOrders" v-bind:key="order._id" :order="order" /> -->
        <OrderHistory :expandMode="false" />
      </div>
    </div>
  </div>
</template>
<script>
import OrderHistory from "@/components/OrderHistory.vue";
import AdminProduct from "@/components/AdminProduct.vue";
export default {
  data() {
    return {
      colorFlag: false,
      newProduct: {
        title: "",
        price: 0,
        shortDesc: "",
        longDesc: "",
        imgFile: "skateboard-generic.png"
      }
    };
  },
  components: {
    OrderHistory,
    AdminProduct
  },
  computed: {},

  methods: {
    products() {
      return this.$store.state.products;
    },
    local_product(product) {
      return { ...product };
    },
    addNewProduct() {
      console.log("Creating product");
      console.log(this.newProduct);
      this.$store.dispatch("registerNewProduct", this.newProduct);
    }
  }
};
</script>
<style lang='scss' scoped>
.adminView {
  // overflow: auto;
  background-color: rgb(255, 200, 221);
  // border-radius: 10px;
  padding: 0.5rem;
  max-width: 100%;
}

.productsArea {
  label {
    padding: 0;
    margin: 0;
  }

  .gridTable {
    display: grid;
  }
  .list-product {
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 2px white;
  }
}

.header {
  display: block;
  border-bottom: solid black 1px;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media screen and(max-width: 768px) {
    grid-template-columns: unset;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    .spans-fields {
      grid-area: 1/1/2/3;
    }
    .area-component {
      grid-area: 2/1/3/2;
    }
    img {
      grid-area: 2/2/3/3;
    }
  }

  gap: 2rem;

  & > * {
    height: 100%;
  }

  .label {
    font-size: 1.2rem;
  }

  .input {
    border-radius: 10px;
    border: none;
    padding: 0.2rem;
    box-shadow: 0 0 5px gray;
  }
  img {
    max-width: 100%;
    object-fit: contain;
    // max-width: 100px;
    // margin: 0 auto;
    @media screen and (max-width: 768px) {
      min-height: 200px;
    }
  }

  .row-component {
    border-radius: 10px;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .row-component:nth-child(odd) {
    background-color: rgb(255, 255, 255);
  }
  .row-component:nth-child(even) {
    background-color: rgb(90, 253, 139);
  }
  .area-component {
    display: flex;
    flex-direction: column;

    textarea {
      height: 100%;
      resize: none;
      border-radius: 10px;
      border: none;
      padding: 0.2rem;
      box-shadow: 0 0 5px gray;
    }
  }

  .add-button {
    margin: 1rem;
    border-radius: 10px;
    border: none;
    padding: 0.5rem;

    &:hover {
      background-color: rgb(189, 183, 183);
      box-shadow: 0 0 5px gray;
    }
  }
}
label {
  padding: 2rem;
}
</style>