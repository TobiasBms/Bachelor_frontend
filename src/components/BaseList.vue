<template>
  <section id="list">
    <slot name="list"></slot>
  </section>
</template>

<script>
export default {
  name: 'BaseList',
}
</script>

<style scoped>
#list {
  @apply flex justify-between p-3;
}
</style>
