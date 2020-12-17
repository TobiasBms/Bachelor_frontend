<template>
  <button
    class="btn"
    @click="onClick"
    :class="{
      'btn-gray': disabled,
      'btn-green': !negative,
      'btn-red': negative,
      'btn-small': size === 'small',
      'btn-large': size === 'large',
    }"
    :disabled="isDisabled"
    :type="type"
  >
    <svg
      v-if="loading"
      class="btn-spinner"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
        clip-rule="evenodd"
      />
    </svg>
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: "Button",
      required: true,
    },
    disabled: Boolean,
    type: {
      type: String,
      default: "button",
      validator: value => ["button", "submit", "reset"].includes(value),
    },
    size: {
      type: String,
      default: "normal",
      validator: value => ["small", "normal", "large"].includes(value),
    },
    loading: Boolean,
    negative: Boolean,
    onClick: {
      type: Function,
      default: () => {
      },
    },
  },
  computed: {
    style() {
      return `btn ${
        this.disabled ? "btn-gray" : this.negative ? "btn-red" : "btn-green"
      }`
    },
    isDisabled() {
      return this.disabled || this.loading
    },
  },
}
</script>

<style>
.btn {
  @apply font-thin py-2 px-3 rounded-lg font-sans inline-flex items-center transition-colors duration-100;
}

.btn-small {
  @apply text-xs;
}

.btn-large {
  @apply text-xl;
}

.btn:disabled {
  @apply cursor-wait;
}

.btn-green {
  @apply bg-green-500 text-white;
}

.btn-red {
  @apply bg-red-500 text-white;
}

.btn-green:active:not(:disabled) {
  @apply bg-green-700;
}

.btn-red:active:not(:disabled) {
  @apply bg-red-700;
}

.btn-gray {
  @apply bg-gray-700 text-white cursor-not-allowed;
}

.btn-spinner {
  @apply animate-spin mr-3 h-5 w-5 text-white;
}
</style>
