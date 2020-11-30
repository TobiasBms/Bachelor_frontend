<template>
  <details>
    <summary>{{ summary }}</summary>
    <div>
      {{ description }}
    </div>
  </details>
</template>

<script>
export default {
  name: 'BaseAccordion',
  props: {
    description: {
      type: String,
      default: 'description',
    },
    summary: {
      type: String,
      default: 'default summary',
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
  content:"🡒";
  top: 50%;
  transform: translateY(calc(-50% - 10px));
  position: absolute;
  left: 95%;
  width: 10px;
  height: 10px;
}

details div{
  @apply p-5;
}

details[open] summary::after {
  content: "🡑";
}

summary::-webkit-details-marker {display: none; }
</style>
