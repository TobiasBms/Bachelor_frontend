<template>
  <section>
    <label for="search">
      <input id="search" type="text" :value="test" />
    </label>
  </section>
</template>

<script>
export default {
  name: 'BaseInput',
  computed: {
    search: function(e) {
      return e.target.value
    },
  },
}
</script>

<style scoped></style>
