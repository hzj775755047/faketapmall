import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topHeader: '',
    user_id: ''
  },
  mutations: {
    setTopHeader(state, payload){
      state.topHeader = payload.topHeader;
    },
    setUser_id(state, payload){
      state.user_id = payload.user_id;
    }
  },
  actions: {
  },
  modules: {
  }
})
