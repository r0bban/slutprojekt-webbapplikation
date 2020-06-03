<template>
  <div class="adminView">
    <h2>Admin</h2>
    <div class="productslist">
      <table class="tableProperties">
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Short Description</th>
          <th>Long Description</th>
          <th>Image File</th>
        </tr>
        <tr v-for="product in products" :key="product.id">
          <td>
            <input type="text" v-model="product.value" />
          </td>
          <td>
            <input type="number" />
          </td>
          <td>
            <input type="text" maxlength="15" />
          </td>
          <td>
            <input type="text" />
          </td>
          <td>
            <select>
              <option value>Pic1</option>
              <option value>Pic2</option>
              <option value>Pic3</option>
              <option value>Pic4</option>
            </select>
          </td>
          <td>
            <button @click="updateProduct(product)">Update</button>
          </td>
          <td>
            <button @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </table>
      <hr />
      <p>New Product</p>
      <table class="tableProperties">
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Short Description</th>
          <th>Long Description</th>
          <th>Image File</th>
        </tr>
        <tr>
          <td>
            <input type="text" v-model="newProduct.title" />
          </td>
          <td>
            <input type="number" v-model="newProduct.price" />
          </td>
          <td>
            <input type="text" v-model="newProduct.shortDesc" />
          </td>
          <td>
            <input type="text" v-model="newProduct.longDesc" />
          </td>
          <select v-model="newProduct.imgUrl">
            <option value="pic1.url">Pic1</option>
            <option value="pic2.url">Pic2</option>
            <option value="pic3.url">Pic3</option>
            <option value="pic4.url">Pic4</option>
          </select>
        </tr>
      </table>
      <button @click="addNewProduct">Add Article</button>
    </div>
  </div>
</template>
<script>
// import AdminProduct from "../components/AdminProduct";
export default {
  data() {
    return {
      newProduct: {
        title: "",
        price: 0,
        shortDesc: "",
        longDesc: "",
        imgUrl: ""
      }
    };
  },
  components: {
    // AdminProduct
  },
  computed: {
    products() {
      return this.$store.state.tmpData;
    }
  },
  methods: {
    addNewProduct() {
      console.log("Creating product");
      console.log(this.newProduct);
      this.$store.dispatch("registerNewProduct", this.newProduct);
    },
    updateProduct(updatedProduct) {
      console.log("Updating product");
      console.log(updatedProduct);
      this.$store.dispatch("updateProduct", updatedProduct);
    },
    deleteProduct(productId) {
      console.log("Deleting product");
      console.log(productId);
      this.$store.dispatch("deleteProduct", productId);
    }
  }
};
</script>
<style lang='scss' scoped>
.tableProperties {
  width: 100%;
  text-align: left;
}
.productslist {
  background-color: lightskyblue;
}
.productHeaders {
  background-color: royalblue;
  width: 100vw;
}
label {
  padding: 2rem;
}
</style>