<template>
  <div>
    <div v-if="isActive">
      <aside id="sidebar" ref="drawer" class="text-left text-white">
        <div class="flex items-center justify-between">
          <BaseButton label="X" class="bg-red-500 rounded-sm m-3" :on-click="(e) => handleClose(e)">X</BaseButton>
        </div>
        <div class="">
          <slot name="navItems"></slot>
        </div>
      </aside>
    </div>
    <div v-else class="small-header p-3">
      <BaseButton label="open" class=" rounded-sm" :on-click="(e) => handleOpen(e)"></BaseButton>
    </div>
    <header class="container mx-auto rounded-md ">
      <section class="rounded-sm p-3 bg-white">
        <h1 class="text-black">{{ title }}</h1>
      </section>
      <slot name="navItems"></slot>
      <section id="search">
        <label for="search"
          ><input
            v-model="message"
            class="rounded-sm"
            placeholder="søg"
            type="text"
            name="search"
          />
        </label>
        <div>
          <section id="dropdown">
            {{ message }}
          </section>
        </div>
      </section>
    </header>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
export default {
  name: 'BaseHeader',
  components: { BaseButton },
  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
  data: function() {
    return {
      isActive: true,
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.state.message
      },
      set(value) {
        this.$store.commit('updateMessage', value)
      },
    },
  },
  watch: {
    classObject: function() {
      return {
        active: this.message.length
          ? (this.isActive = true)
          : (this.isActive = false),
      }
    },
  },
  methods: {
    updateMessage(e) {
      this.$store.commit('updateMessage', e.target.value)
    },
    handleClose: function() {
      this.isActive = false
    },
    handleOpen: function() {
      this.isActive = true
    }
  },
}
</script>
<style scoped>
header {
  @apply flex justify-between p-3  items-center;
  color: white;
  background: #1c1c1e;
}

#search {
  position: relative;
  word-break: break-all;
}

.active {
  display: block;
  @apply p-3 shadow-md text-black;
  z-index: 1;
  top: 100%;
  min-width: 100%;
  max-width: 100%;
  max-height: 200px;
  overflow-y: scroll;
  background: white;
  position: absolute;
}

.active::-webkit-scrollbar {
  display: none;
}

header input {
  @apply p-3;
  color: black;
}

#sidebar {
  display: none;
}
.small-header {
  display: none;
}

@media (max-width: 640px) {
  .small-header {
    @apply flex text-left;
    background: #1c1c1e;
    color: white;
  }
  #sidebar {
    background: white;
    display: block;
    position: fixed;
    left: 0;
    z-index: 100;
    height: 100vh;
    width: 500px;
  }

  header {
    display: none;
  }
}
</style>
