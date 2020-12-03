<template>
  <main>
    <header>
      {{ title }}
    </header>
    <section class="extras" v-for="extra in extras" :key="extra">
      <p>{{ extra.name }}</p>
      <div class="flex">
        <p class="pr-5">{{ extra.price }}</p>
        <BaseButton label="+" :on-click="add" :image="iconComponent" />
      </div>
    </section>
  </main>
</template>

<script>
import BaseButton from '../components/BaseButton'

const icons = {
  add: require('../assets/Vector.png'),
}

export default {
  name: 'BaseProduct',
  components: {
    BaseButton,
  },
  props: {
    title: {
      type: String,
      default: 'product title',
    },
    price: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      extras: [
        {
          name: 'alm',
          price: 400,
        },
        {
          name: 'stor',
          price: 200,
        },
        {
          name: 'medium',
          price: 100,
        },
      ],
      counter: 0,
    }
  },
  computed: {
    iconComponent() {
      return icons.add
    },
  },
  methods: {
    add: function() {
      this.counter++
    },
  },
}
</script>
<style>
.extras {
  @apply flex justify-between mb-4;
}
</style>
