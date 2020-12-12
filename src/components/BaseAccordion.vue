<template>
  <details>
    <summary>
      <div class="flex items-center">
      <div id="border">
        {{summary.charAt(0)}}
      </div>
      <h2 class="pl-3">
        {{ summary }}
      </h2>
      </div>
      <p v-if="caption" class="caption">
        {{ caption }}
      </p>
    </summary>
    <slot name="product"></slot>
  </details>
</template>

<script>
export default {
  name: "BaseAccordion",
  props: {
    summary: {
      type: String,
      default: "default summary",
    },
    caption: {
      type: String,
    },
  },
}
</script>

<style>
details {
  cursor: pointer;
  @apply bg-white
}

details h2{
  @apply text-lg font-bold subpixel-antialiased;
}

#border{
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #FFF;
  @apply flex justify-center bg-green-500 font-bold;
}

summary {
  position: relative;
  @apply p-5;
}

details summary::after {
  content: "🡒";
  top: 50%;
  transform: translateY(calc(-50% - 10px));
  position: absolute;
  left: 95%;
  width: 10px;
  height: 10px;
}

details slot {
  @apply p-5;
}

details[open] summary::after {
  content: "🡑";
}

summary::-webkit-details-marker {
  display: none;
}

.caption{
  @apply text-sm;
}
</style>
