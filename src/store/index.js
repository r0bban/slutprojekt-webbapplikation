import Vue from "vue";
import Vuex from "vuex";
import API from "@/api/server";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    currentUser: "",
    userToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlcyNUFZR0U0Z2MxZ1hmMGQiLCJleHAiOjE1OTExOTU4NzksImlhdCI6MTU5MTE5MjI3OX0.1hD8y3ACV8uREIn7HYgxTGkiM6xDwnDmhqGH4A229e0",
    tmpData: [
      { value: "Champinjon", id: 1 },
      { value: "Räkor", id: 2 },
      { value: "Krabba", id: 3 },
      { value: "Kräfta", id: 4 },
      { value: "Ostron", id: 5 },
      { value: "Musslor", id: 6 },
    ],
    showCart: false,
    showLogin: false,
    newProduct: {
      "title": "Johannes produkt",
      "price": 123,
      "shortDesc": "Unisex",
      "longDesc": "kalle NY ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile": "kalle NY skateboard-generic.png",
  },
    updatedProduct: {
      "title": "uppdtaerad produkt",
      "price": 123,
      "shortDesc": "Unisex",
      "longDesc": "kalle uppdaterad ipsum dolor sit amet, 50-50 Sidewalk Surfer nose bump kickflip bruised heel fakie berm soul skate. Bluntslide transition nollie hard flip bank pressure flip ho-ho. Steps rip grip nosepicker roll-in yeah 540 pump. ",
      "imgFile": "kalle uppdaterad skateboard-generic.png",
  },
  },
  mutations: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    toggleLogin(state) {
      state.showLogin = !state.showLogin;
    },
    setStoreProducts(state, newProductList) {
      state.products = newProductList;
    },
    addProductToStoreProducts(state, newProduct){
      state.products.push(newProduct)
    }
  },
  getters: {},
  actions: {
    async initialProductLoad(context) {
      if (context.state.products.length <= 0) {
        await context.dispatch('refreshProducts')
      }
    },
    async refreshProducts(context) {
      const newProductList = await API.fetchProducts(context.state.userToken);
      context.commit("setStoreProducts", newProductList);
    },
    async registerNewProduct(context, newProduct){
      const addedProduct = await API.postProductRequest(newProduct, context.state.userToken);
      context.commit("addProductToStoreProducts", addedProduct);
    }
  },
  modules: {},
});

