<template>
  <div id="app">
    <BaseHeader>
      <template #navItems>
        <aside :datatype="isOpen">
          {{ isOpen }}
        </aside>
        <nav class="flex md:flex-row flex-col md:h-16">
          <router-link
            to="/"
            class="flex md:flex-col text-white item-center bg-green-500 md:p-2 rounded-sm text-sm font-semibold md:mr-3 items-center"
          >
            <img
              class="icon h-12"
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
  mounted() {}
}

</script>

<style>
body {
  background: #e7eef7;
}

#add {
  position: static;
  z-index: 100;
  @apply p-3 bg-green-500;
  color: white;
  bottom: 0;
  right: 0;
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
