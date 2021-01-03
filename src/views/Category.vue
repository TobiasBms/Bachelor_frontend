<template>
  <main class="about container mx-auto">
    <header class="text-left mt-3">
      <h2 class="font-bold text-lg">
        Kategorier
      </h2>
    </header>
    <BaseList v-for="category in categories" :key="category.id" class="border-b mt-3 shadow-md">
      <template #list>
        <BaseAccordion :summary="category.name">
          <template #product>
              <div v-for="product in products" :key="product.id">
                  <h1>{{product.name}}</h1>
              </div>
          </template>
        </BaseAccordion>
      </template>
    </BaseList>
  </main>
</template>

<script>
import BaseAccordion from "@/components/BaseAccordion"
import BaseList from "@/components/BaseList"

export default {
  components: {
    BaseList,
    BaseAccordion,
  },
  computed: {
    categories: function() {
      return this.$store.getters.getCategories
    },
    products: function() {
      return this.$store.getters.getProducts
    }
  },
  created() {
    this.$store.dispatch('fetchRestaurant')
  },
}
</script>

<style scoped></style>
