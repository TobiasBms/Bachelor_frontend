import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: [],
    restaurant: [],
    cords: [],
  },
  mutations: {
    setRestaurants(state, data) {
      state.restaurants = data
    },
    setRestaurant(state, data) {
      state.restaurant = data
    },
    setCords(state, cords) {
      state.cords = cords
    },
  },
  getters: {},
  actions: {
    async fetchRestaurant(context) {
      const response = await fetch('http://localhost:3002/api/restaurant')
      const data = await response.json()
      context.commit('setRestaurants', data)
    },
    async fetchSingleRestaurant(context, id) {
      const response = await fetch(
        `http://localhost:3002/api/restaurant/${id}?scopes=hours`
      )
      const data = await response.json()
      context.commit('setRestaurant', data)
      context.commit('setCords', data.location.coordinates)
    },
  },
  modules: {},
})
