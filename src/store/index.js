import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tmpData: ["Champinjon", "Räkor", "Krabba", "Kräfta", "Ostron", "Musslor"],
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
