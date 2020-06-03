import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  },
  mutations: {
    toggleCart(state) {
      state.showCart = !state.showCart;
    },
    toggleLogin(state) {
      state.showLogin = !state.showLogin;
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
