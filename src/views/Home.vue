<template>
  <main id="Restaurant">
    <header>
      <h1>Restaurant</h1>
      <span> Ågade 1A, 5270 Odense N </span>
    </header>
    <section>
      <BaseButton label="vis menu" />
      <BaseList>
        <template #list>
          <h2>kontakt</h2>
        </template>
      </BaseList>
    </section>
  </main>
</template>

<script>
// @ is an alias to /src
import BaseButton from '@/components/BaseButton.vue'
import BaseList from '@/components/BaseList'
export default {
  name: 'Home',
  components: {
    BaseButton,
    BaseList,
  },
  methods: {},
}
</script>
