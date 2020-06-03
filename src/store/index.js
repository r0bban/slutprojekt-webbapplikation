import Vue from "vue";
import Vuex from "vuex";
import * as API from '@/api'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tmpData: ["Champinjon", "Räkor", "Krabba", "Kräfta", "Ostron", "Musslor"],
    showCart: false,
    showLogin: false,

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
      state.token = token;
      localStorage.userToken = token
    },
    setCurrentUser(state, user) {
      state.currentUser = user;
      localStorage.currentUser = user
    }
  },
  getters: {
    getCurrentUser: (state) => {
      return state.currentUser
    }
  },
  actions: {
    async loginUser(context, payload) {
      const data = await API.authorizeUser(payload);
      if (data) {
        context.commit('setToken', data.token);
        context.commit('setCurrentUser', data.user)
        this.state.showLogin = false
      }
    },
  },
  modules: {},
});
