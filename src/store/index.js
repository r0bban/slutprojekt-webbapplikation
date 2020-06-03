import Vue from "vue";
import Vuex from "vuex";

import API from "@/api/server";
import * as APIauth from '@/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
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
    currentUser: "",
    userToken: "",
  },
  mutations: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    toggleLogin(state) {
      state.showLogin = !state.showLogin;
    },
    setToken(state, token) {
      state.userToken = token;
      localStorage.userToken = token
      console.log("userToken: " + state.userToken)
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
      state.showLogin = false
      localStorage.currentUser = user
    },
    logout(state) {
      state.currentUser = "",
        state.userToken = "",
        localStorage.removeItem("currentUser"),
        localStorage.removeItem("userToken")
    },

    setStoreProducts(state, newProductList) {
      state.products = newProductList;
    },
    addProductToStoreProducts(state, newProduct) {
      state.products.push(newProduct)
    }
  },
  getters: {
    getCurrentUser: (state) => {
      return state.currentUser
    }
  },
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
    async registerNewProduct(context, newProduct) {
      const addedProduct = await API.postProductRequest(newProduct, context.state.userToken);
      context.commit("addProductToStoreProducts", addedProduct);
    },
    async loginUser(context, payload) {
      const data = await APIauth.authorizeUser(payload);
      if (data) {
        context.commit('setToken', data.token);
        context.commit('setCurrentUser', data.user)

      }
    },
    logout(context) {
      context.commit('logout');
    }
  },

  modules: {},
});

