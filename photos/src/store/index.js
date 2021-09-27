import Vue from 'vue'
import Vuex from 'vuex'
import { apiLogin } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    login (state, payload) {
      state.token = payload
      localStorage.setItem('token', payload)
    }
  },
  actions: {
    async login ({ commit }, payload) {
      const res = await apiLogin(payload)
      console.log(55, res)
      commit('login', res.data.token)
    }
  }
})

export default store
