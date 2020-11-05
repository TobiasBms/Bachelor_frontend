<template>
  <div class="home">
    <BaseButton msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'Home',
  components: {
    BaseButton,
  },
}
</script>
