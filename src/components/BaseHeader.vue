<template>
  <header>
    <section>
      <h1>{{ title }}</h1>
    </section>
    <section id="search">
      <label for="search"
        ><input v-model="search" placeholder="søg" type="text" name="search" />
      </label>
      <div :class="classObject">
        <section id="dropdown">
          {{ search }}
        </section>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
  data: function() {
    return {
      isActive: true,
      search: '',
    }
  },
  computed: {
    classObject: function() {
      return {
        active: this.search.length
          ? (this.isActive = true)
          : (this.isActive = false),
      }
    },
  },
}
</script>

<style scoped>
header {
  @apply flex justify-between p-3 m-3 items-center;
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
</style>
