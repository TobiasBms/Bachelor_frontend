<template>
  <main class="container text-left mx-auto bg-white rounded-md p-3 shadow-md">
    <section v-if="restaurant">
      <section class="flex">
        <img
          class="w-16 md:w-32 "
          src="@/assets/logo.png"
          alt="restaurant icon"
        />
        <section class="flex flex-col justify-center ml-3">
          <h1 class="uppercase tracking-wide text-sm font-semibold ">
            {{ restaurant.name }}
          </h1>
          <address class="leading-tight">
            {{ restaurant.address }}
            <a class="text-blue-700 underline ml-2" :href="restaurant.website">{{restaurant.website}}</a>
          </address>
          <p class="font-medium text-black">
            {{ restaurant.description }}
          </p>
        </section>
      </section>
      <router-link to="/category">
        <BaseButton
          label="Vis menu"
          class="bg-green-500 text-white p-3 rounded-md"
        />
      </router-link>

      <section class="mt-3">
        <section>
          <section>
            <h2 class="font-bold uppercase">Kontakt</h2>
          </section>
          <section class="flex">
            <section class="flex-1">
              <section class="flex items-center">
                <img src="@/assets/globe.svg" alt="icon" class="mr-3 h-8" />
                <a :href="restaurant.website" class=" text-blue-700 underline"> {{ restaurant.website }} </a>
              </section>
              <section class="flex items-center mt-1">
                <img src="@/assets/contact.svg" alt="icon" class="mr-3 h-8" />
                <div v-if="restaurant.email">
                  {{ restaurant.email }}
                </div>
                <div v-else>
                  Ingen email tilknyttet
                </div>
              </section>
              <section class="flex items-center mt-1">
                <img src="@/assets/phone.svg" alt="icon" class="mr-3 h-8" />
                <a
                  :href="'tel:' + restaurant.phone"
                  class="text-blue-700 underline"
                >
                  {{ restaurant.phone }}
                </a>
              </section>
            </section>
            <section class="flex flex-col items-center flex-1">
              <h2>smiley ordning</h2>
              <img
                class="md:h-16 lg:h-32 object-fit"
                src="@/assets/smiley.jpg"
                alt=""
              />
            </section>
          </section>
        </section>
      </section>
      <div class="mt-4">
        <h2 class="font-bold uppercase">Åbningstider</h2>
        <BaseList>
          <template #list>
            <section
              v-for="hours in restaurant.hours"
              :key="hours.dayOfWeek"
              class="list flex md:justify-start justify-between border-b border-gray-500 p-3"
            >
              <span class="md:mr-3 font-semibold">
                {{ hours.dayOfWeek }}
              </span>
              <div class="flex">
                <span>
                  {{ hours.openHour }}
                </span>
                <span>
                  {{ hours.closeHour }}
                </span>
              </div>
            </section>
          </template>
        </BaseList>
      </div>
      <section class="mt-3">
        <h2 class="font-bold uppercase">Placering</h2>
        <div id="map" >
          <LMap :zoom="coords.zoom" :center="coords.center">
            <LTileLayer :url="coords.url"></LTileLayer>
            <LMarker :lat-lng="coords.center"></LMarker>
          </LMap>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import BaseList from '@/components/BaseList'
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
export default {
  name: 'Restaurant',
  components: { BaseList, BaseButton, LMap, LTileLayer, LMarker },
  computed: {
    restaurant: function() {
      return this.$store.state.restaurant
    },
    coords: function() {
      return {
        zoom: 16,
        center: this.$store.state.cords,
        url: 'https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        bounds: null,
      }
    },
  },
  created() {
    const id = this.$route.params.id
    this.$store.dispatch('fetchSingleRestaurant', id)
  },
}
</script>

<style scoped>
address {
  @apply text-sm;
  font-style: normal;
}

.list:last-of-type {
  border: none !important;
}

#map {
  height: 300px;
  width: 50%;
}
</style>
