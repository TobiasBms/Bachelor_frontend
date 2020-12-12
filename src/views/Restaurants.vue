<template>
  <main>
    <div v-if="restaurants.length">
      <BaseList v-for="restaurant in restaurants" :key="restaurant.id">
        <template #list>
          <BaseAccordion
            :summary="restaurant.name"
            :caption="restaurant.description"
          >
            <template #product>
              <div class="listItem">
                <div>
                  <h2>Addresse: {{ restaurant.address }}</h2>
                </div>
                <div>
                  <p>{{ restaurant.description }}</p>
                </div>
                <BaseButton label=" Vælg restaurant" :on-click="(e) => handleRoute(restaurant.id)" />
              </div>
            </template>
          </BaseAccordion>
        </template>
      </BaseList>
    </div>
  </main>
</template>

<script>
import BaseList from '@/components/BaseList'
import BaseAccordion from '@/components/BaseAccordion'
import BaseButton from '@/components/BaseButton'
import router from '@/router'

export default {
  name: 'Restaurants',
  components: {
    BaseButton,
    BaseList,
    BaseAccordion,
  },
  computed: {
    restaurants: function() {
      return this.$store.state.restaurants
    },
  },
  created() {
    this.$store.dispatch('fetchRestaurant')
  },
  methods: {
    handleRoute(id) {
      router.push({ name: 'Restaurant', params: { id: id } })
    },
  },
}
</script>

<style scoped>
.listItem {
  @apply p-3 flex flex-col items-start;
}

details {
  @apply rounded-md;
  text-align: left;
  width: 100%;
}

.listItem h2 {
  @apply font-bold;
}
</style>
