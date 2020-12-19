<template>
  <details>
    <summary>
      <div class="md:flex items-center">
        <div>
          <img
            class="h-32 w-full object-cover md:w-32"
            src="@/assets/restaurant.png"
            alt="Restaurant image"
          />
        </div>
        <div class="pl-3">
          <h2>
            {{ summary }}
          </h2>
          <p v-if="caption" class="caption max-w-xl">
            {{ caption }}
          </p>
        </div>
      </div>
    </summary>
    <slot name="product"></slot>
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

details h2 {
  @apply text-lg font-bold subpixel-antialiased;
}

#border {
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
  content: url('../assets/arrow.svg');
  top: 50%;
  transform: translateY(calc(-50% - 10px));
  position: absolute;
  left: 95%;
  width: 20px;
  height: 20px;
}

details slot {
  @apply p-5;
}


details[open] summary ~ * {
  animation: sweep .2s ease-in-out;
}

details[open] summary {
  @apply bg-gray-100;
}

details[open] summary::after {
  content: url('../assets/arrow.svg');
  transform: rotate(90deg);
  transform-origin: right top;
}

summary::-webkit-details-marker {
  display: none;
}

.caption {
  @apply text-sm;
}


@keyframes sweep {
  0% {
    opacity: 0;
    margin-left: -20px;
    height: 0;
  }
  100% {
    opacity: 1;
    margin-left: 0px;
    height: 100%;
  }
}


</style>
