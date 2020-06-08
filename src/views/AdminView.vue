<template>
  <div class="adminView">
    <div class="productsArea">
      <!-- <table class="tableProperties">
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
      </table>-->
      <!-- <ul class="list-headers">
        <li>Title</li>
        <li>Price</li>
        <li>Short Description</li>
        <li>Long Description</li>
        <li>Image File</li>
      </ul>-->
      <span class="header">Edit Products</span>
      <div class="gridTable">
        <div class="list-product" v-for="product in products" :key="product._id">
          <div class="row-component">
            <label for>Title</label>
            <input type="text" v-model="product.title" />
          </div>
          <div class="row-component">
            <label for>Price</label>
            <input type="number" v-model.number="product.price" />
          </div>
          <div class="row-component">
            <label for>Short Desc</label>
            <input type="text" maxlength="15" v-model="product.shortDesc" />
          </div>
          <div class="row-component">
            <label for>Long Desc</label>
            <input type="text" v-model="product.longDesc" />
          </div>
          <div class="row-component">
            <label for>Img File</label>
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
          </div>
          <img :src="require(`@/assets/${product.imgFile}`)" alt />
          <div class="row-component editButtons">
            <button @click="updateProduct(product)">Update</button>
            <button @click="deleteProduct(product._id)">Delete</button>
          </div>
        </div>
      </div>
      <span class="header">New Product</span>
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
        <button @click="addNewProduct">Add Article</button>
      </table>
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
    OrderHistory
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
  // overflow: auto;
  background-color: lightskyblue;
  // border-radius: 10px;
  padding: 0.5rem;
  max-width: 100%;
}
.tableProperties {
  width: 100%;
  text-align: left;

  padding: 1rem;
  box-shadow: 0 0 2px white;
  border-radius: 5px;
  img {
    max-height: 100px;
    // height: 10px;
    object-fit: contain;
  }
}
.productsArea {
  label {
    padding: 0;
    margin: 0;
  }
  .list-headers {
    // display: grid;
    // list-style: none;
  }

  .gridTable {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    // grid-auto-rows: 180px;
    // grid-auto-columns: 400px;
    // gap: 1rem;
  }
  .list-product {
    border-radius: 5px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 0 2px white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // align-items: center;

    img {
      max-width: 100px;
      margin: 0 auto;
    }
  }

  .row-component {
    // height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .editButtons {
    align-self: center;
    padding: 1rem;
  }
}
.header {
  display: block;
  border-bottom: solid black 1px;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}
.productHeaders {
  background-color: royalblue;
  width: 100vw;
}
label {
  padding: 2rem;
}
</style>