<template>
  <div class="adminView">
    <router-view @updateSpecificProduct="updateSpecificProduct" />
    <div class="productsArea">
      <span class="header">Edit Products</span>
      <div class="gridTable">
        <AdminProduct
          class="list-product"
          v-for="product in products"
          :key="product._id"
          :product="product"
        />
      </div>
      <span class="header">New Product</span>
      <AddProduct />
    </div>
    <div class="order-container">
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
import AddProduct from "@/components/AddProduct.vue";
export default {
  data() {
    return {
      colorFlag: false,
      local_products: []
    };
  },
  components: {
    OrderHistory,
    AdminProduct,
    AddProduct
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  beforeMount() {
    this.refreshProducts();
  },
  methods: {
    local_product(product) {
      return { ...product };
    },
    refreshProducts() {
      this.local_products = this.$store.state.products;
    },
    updateSpecificProduct(id) {
      let index = this.local_products.findIndex(product => product._id == id);
      if (index != -1)
        this.local_products[index] = this.local_product(this.products[index]);
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
    border: 1px white solid;
  }
}

.header {
  display: block;
  border-bottom: solid black 1px;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.order-container {
  margin-top: 3rem;
}

label {
  padding: 2rem;
}
</style>