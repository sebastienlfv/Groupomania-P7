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
    // DELETE_USER(state) {
    //   state.user = null;
    // }    
  },
  actions: {
    setRole({commit}, role) {
      commit('SET_ROLE', role)
    },
    setConnected({commit}, isConnected){
      console.log('isConnected', isConnected)
      commit('SET_CONNECTED', isConnected)
    }
    // logout({commit}) {
    //   commit('DELETE_USER')
    // }
  }
})