<template>
  <div class="l-row">
    <slot></slot>
  </div>
</template>


<script setup lang='ts'>
import { provide } from "vue";
const props = defineProps({
  gutter: {
    type: Number,
    default: 0,
  }
})
provide('gutter', props.gutter);
</script>


<style scoped lang="scss">
.l-row {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  box-sizing: border-box;
}
</style>