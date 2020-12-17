<template>
  <div id="app">
    <BaseHeader>
      <template #navItems>
        <nav class="flex">
          <router-link to="/" class="flex flex-col text-white bg-green-500 p-2 rounded-sm text-sm font-semibold mr-3 items-center"><img class="lg:w-8" src="./assets/restaurants.svg" alt="">Restaurants</router-link>
          <router-link to="/about" class="text-white bg-green-500 p-3 font-semibold text-sm rounded-sm mr-3">Bestilling</router-link>
          <router-link to="/about" class="text-white bg-green-500 p-3 font-semibold text-sm rounded-sm mr-3">Se din order</router-link>
          <router-link to="/about" class="text-white bg-green-500 p-3 font-semibold text-sm rounded-sm">Betaling</router-link>
        </nav>
      </template>
    </BaseHeader>
    <router-view />
  </div>
</template>

<script>
import BaseHeader from './components/BaseHeader.vue'

export default {
  components: {
    BaseHeader,
  },
}
</script>

<style>
body{
  background: #E7EEF7;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
