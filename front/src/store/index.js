import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role:null,
    user:null,
    isConnected: false
  },
  getters: {
    getRole(state){
      return state.role
    },
    getConnected(state){
      return state.isConnected
    }
  },
  mutations: {
    SET_ROLE(state, role) {
      state.role = role;
    },
    SET_CONNECTED(state, isConnected) {
      state.isConnected = isConnected
    }
  },
  actions: {
    setRole({commit}, role) {
      commit('SET_ROLE', role)
    },
    setConnected({commit}, isConnected){
      commit('SET_CONNECTED', isConnected)
    }
  }
})