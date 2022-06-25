import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    role:null,
    user:null,
    isConnected: null
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
    SET_ISCONNECTED(state, isConnected) {
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
    setIsConnected({commit}, isConnected){
      commit('SET_isConnected', isConnected)
    }
    // logout({commit}) {
    //   commit('DELETE_USER')
    // }
  }
})