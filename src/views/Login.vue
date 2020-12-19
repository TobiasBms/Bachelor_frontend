<template>
  <main>
    <div>
      Login
    </div>
    {{ errorMessage }}
    <form @submit.prevent="checkCredentials">
      <section id="numbers">
        <label>
          <input
            v-for="(num, index) in nums"
            :key="index"
            v-model.number="num.value"
            type="number"
            name="char"
            @input="checkChar(index)"
          />
        </label>
      </section>
      <BaseButton type="submit" label="Login" />
    </form>
  </main>
</template>

<script>
import BaseButton from '@/components/BaseButton'

export default {
  name: 'Login',
  components: {
    BaseButton,
  },
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      nums: [
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
        { value: 0 },
      ],
      errorMessage: '',
    }
  },
  computed: {
    user: {
      get() {
        return this.$store.state.users
      },
    },
  },
  methods: {
    checkChar(index) {
      const { value } = event.target
      this.nums[index].value = value.split('')[0]
    },
    checkCredentials() {
      this.$store.dispatch('fetchUsers')
    },
  },
}
</script>

<style scoped>
#numbers {
  @apply flex justify-center mb-4;
  align-items: center;
}
#numbers input {
  @apply bg-gray-300 p-2 ml-2;
  width: 4rem;
  height: 4rem;
  text-align: center;
  border-radius: 5px;
  font-weight: bold;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
