<template>
  <div class="l-col" ref="colRef">
    <slot></slot>
  </div>
</template>


<script setup lang='ts'>
import { ref, computed, onMounted, inject } from 'vue';
const colRef = ref<HTMLElement | null>(null)
const gutter = inject('gutter'); // 注入 gutter
const props = defineProps({
  span: {
    type: Number,
  },
})
const styleComputed = computed(() => {
  return {
    spanPercent: `${props.span / 24 * 100}%`,
    gutterPx: `${gutter / 2}px`
  }
})
onMounted(() => {
  colRef.value?.classList.add(`l-col-${props.span}`)
  if (gutter) {
    colRef.value?.classList.add('is-guttered')
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

.is-guttered {
  padding: 0 v-bind('styleComputed.gutterPx');
}
</style>