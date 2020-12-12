<template>
  <div v-if="restaurant">
    <h1>{{ restaurant.name }}</h1>
    <caption>
      {{restaurant.description}}
    </caption>
  </div>
</template>

<script>

export default {
  name: 'Restaurant',
  computed: {
    restaurant: function() {
      return this.$store.state.restaurant
    },
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('fetchSingleRestaurant', id)

  },
}
</script>

<style scoped>

</style>