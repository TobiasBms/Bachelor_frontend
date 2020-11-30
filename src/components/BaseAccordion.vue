<template>
  <details>
    <summary>{{summary}}</summary>
    <p>
      {{ description }}
    </p>
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
    summary:{
      type: String,
      default: 'default summary'
    }
  },
}
</script>

<style></style>
