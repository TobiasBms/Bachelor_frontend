<template>
  <div id="app">
    <BaseHeader>
      <template #navItems>
        <aside :datatype="isOpen">
          {{ isOpen }}
        </aside>
        <nav class="flex h-16">
          <router-link
            to="/"
            class="flex flex-col text-white bg-green-500 p-2 rounded-sm text-sm font-semibold mr-3 items-center"
          >
            <img
              class="icon"
              src="./assets/restaurants.svg"
              alt=""
            />Restaurants
          </router-link>
          <router-link
            to="/about"
            class="text-white bg-green-500 p-3 font-semibold text-sm rounded-sm mr-3"
          >
            Bestilling
          </router-link>
          <router-link
            to="/about"
            class="text-white bg-green-500 p-3 font-semibold text-sm rounded-sm mr-3"
          >Se din order
          </router-link>
          <router-link
            to="/about"
            class="text-white bg-green-500 p-3 font-semibold text-sm rounded-sm"
          >Betaling
          </router-link>
        </nav>
      </template>
    </BaseHeader>
    <router-view />
    <button id="add" class="add-button">Add to home screen</button>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader.vue"

export default {
  components: {
    BaseHeader,
  },
  data() {
    return {
      isOpen: null,
    }
  },
  watch: {
    isOpen: function() {
      this.isOpen = document.body.clientWidth
    },
  },
}
</script>

<style>
body {
  background: #e7eef7;
}
#add{
  position: fixed;
  @apply rounded-sm p-3 bg-green-400;
  color:white;
  bottom: 20px;
  right: 20px;
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

.icon {
  max-width: 50%;
  max-height: 50%;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (min-width: 640px) {
  #nav {
    background: blue;
  }
}
</style>
