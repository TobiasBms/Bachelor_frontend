import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    restaurants: [],
    restaurant: [],
    cords: [],
    categories: [],
    products: [],
  },
  mutations: {
    setRestaurants(state, data) {
      state.restaurants = data
    },
    setRestaurant(state, data) {
      state.restaurant = data
    },
    setCords(state, coords) {
      state.cords = coords
    },
    setCategories(state, categories) {
      state.categories = categories
    },
    setProducts(state, payload) {
      state.products = payload
    },
  },
  getters: {
    getCategories: state => {
      return state.categories
    },
    getProducts: state => {
      return state.products
    },
  },
  actions: {
    async fetchRestaurant(context) {
      const response = await fetch('https://tobiasbm.dev/api/restaurant')
      const data = await response.json()
      context.commit('setRestaurants', data)
    },
    async fetchSingleRestaurant(context, id) {
      const response = await fetch(
        `https://tobiasbm.dev/api/restaurant/${id}?scopes=hours,categories`
      )
      const data = await response.json()
      context.commit('setRestaurant', data)
      context.commit('setCords', data.location.coordinates)
      context.commit('setCategories', data.categories)
    },
    async fetchRestaurantProducts(context) {
      const response = await fetch(`https://tobiasbm.dev/api/product`)
      const data = await response.json()

      context.commit('setProducts', data)
    },
  },
  modules: {},
})
