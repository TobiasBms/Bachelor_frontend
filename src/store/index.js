import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchData: {
      data: 'test',
    },
  },
  mutations: {
    dispense(state) {
      state.searchData.data = 'something else'
    },
  },
  actions: {
    dispense(context) {
      return context.commit('dispense')
    },
  },
  modules: {},
})
