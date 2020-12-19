<template>
  <div class="about">
    <h1 class="">Kategorier</h1>
    <div v-for="category in categories" :key="category.id">
      {{ category }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories: function() {
      return this.$store.state.categories
    },
  },
  created() {

  }
}
</script>

<style scoped></style>
