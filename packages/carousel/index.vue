<script setup lang="ts">

import LCarouselItem from "./item.vue";

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  },
})

defineExpose({
})
</script>

<template>
<div>
  <l-carousel-item>

  </l-carousel-item>
</div>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';
</style>
