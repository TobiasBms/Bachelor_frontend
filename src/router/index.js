import Vue from 'vue'
import VueRouter from 'vue-router'
import Restaurants from '../views/Restaurants.vue'
import Restaurant from '../views/Restaurant.vue'
import Category from '@/views/Category'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Restauranter',
    component: Restaurants,
  },
  {
    path: '/restaurant/:id',
    name: 'Restaurant',
    component: Restaurant,
  },
  {
    path: '/order',
    name: 'Se din order',
    component: Restaurant,
  },
  {
    path: '/menu',
    name: 'Menu kort',
    component: Restaurant,
  },
  {
    path: '/restaurant/:id',
    name: 'Restaurant',
    component: Restaurant,
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
  },
  {
    path: '/shoppingcart',
    name: 'betailing',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Category.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
