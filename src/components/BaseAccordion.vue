<template>
  <details>
    <summary>{{ summary }}</summary>
    <div class="detailChild">
      <slot name="test">no items</slot>
    </div>
  </details>
</template>

<script>

export default {
  name: 'BaseAccordion',
  props: {
    summary: {
      type: String,
      default: 'default summary',
    },
  },
  computed: {
    getData() {
      return this.data
    },
  },
}
</script>

<style>
details {
  cursor: pointer;
  @apply bg-gray-300;
}

summary {
  position: relative;
  @apply p-5;
}

details summary::after {
  content: "";
  background: url("../assets/Vector.png")no-repeat center center;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  left: 95%;
  width: 15px;
  height: 15px;
}

details .detailChild {
  @apply p-5;
}

details[open] summary::after {
  transform-origin: center center;
  transform: rotate(90deg);
  background: url("../assets/Vector.png") no-repeat center center;
}

summary::-webkit-details-marker {
  display: none;
}
</style>
