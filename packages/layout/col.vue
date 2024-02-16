<template>
  <div class="l-col">
    <slot></slot>
  </div>
</template>


<script setup lang='ts'>
import { computed } from 'vue';

const props = defineProps({
  span: {
    type: Number,
  },
  gutter: {
    type: Number,
  }
})
const styleComputed = computed(() => {
  return {
    spanPercent: `${props.span / 24 * 100}%`
  }
})
</script>


<style scoped lang="scss">
.l-col {
  flex: 0 0 v-bind('styleComputed.spanPercent');
  border-radius: 4px;
}

[class*=l-col-] {
  box-sizing: border-box;
}
</style>