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
        <tr v-for="product in products" :key="product._id">
          <td>
            <input type="text" v-model="product.title" />
          </td>
          <td>
            <input type="number" v-model.number="product.price" />
          </td>
          <td>
            <input type="text" maxlength="15" v-model="product.shortDesc" />
          </td>
          <td>
            <input type="text" v-model="product.longDesc" />
          </td>
          <td>
            <select v-model="product.imgFile">
              <option value="skateboard-generic.png">Pic1</option>
              <option value="skateboard-greta.png">Pic2</option>
              <option value="wheel-rocket.png">Pic3</option>
              <option value="wheel-spinner.png">Pic4</option>
              <option value="wheel-wave.png">Pic5</option>
              <option value="hoodie-ash.png">Pic6</option>
              <option value="hoodie-fire.png">Pic7</option>
              <option value="hoodie-ocean.png">Pic8</option>
            </select>
          </td>
          <td>
            <img :src="require(`@/assets/${product.imgFile}`)" alt />
          </td>
          <td>
            <button @click="updateProduct(product)">Update</button>
          </td>
          <td>
            <button @click="deleteProduct(product._id)">Delete</button>
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
            <input type="number" v-model.number="newProduct.price" />
          </td>
          <td>
            <input type="text" v-model="newProduct.shortDesc" />
          </td>
          <td>
            <input type="text" v-model="newProduct.longDesc" />
          </td>
          <td>
            <select v-model="newProduct.imgFile">
              <option value="skateboard-generic.png">Pic1</option>
              <option value="skateboard-greta.png">Pic2</option>
              <option value="wheel-rocket.png">Pic3</option>
              <option value="wheel-spinner.png">Pic4</option>
              <option value="wheel-wave.png">Pic5</option>
              <option value="hoodie-ash.png">Pic6</option>
              <option value="hoodie-fire.png">Pic7</option>
              <option value="hoodie-ocean.png">Pic8</option>
            </select>
          </td>
          <td>
            <img :src="require(`@/assets/${newProduct.imgFile}`)" alt />
          </td>
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
    // AdminProduct
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    test(event) {
      console.log("Test");
      console.log(event.target.value);
    },

    test2() {
      console.log("Focus");
    },
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
      this.$store.dispatch("deleteProductById", productId);
    }
  }
};
</script>
<style lang='scss' scoped>
.adminView {
  overflow: auto;
}
.tableProperties {
  width: 100%;
  text-align: left;
  img {
    max-height: 100px;
    // height: 10px;
    object-fit: contain;
  }
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