import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'test',
  },
  mutations: {
    updateMessage(state, message) {
      state.message = message
    },
  },
  actions: {
    dispense(context) {
      return context.commit('dispense')
    },
  },
  modules: {},
})
