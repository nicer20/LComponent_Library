<template>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints not displayed</span>
    <l-slider :value="value1" mode="vertical" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints displayed</span>
    <l-slider :value="value2" step="20" showStops mode="vertical" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(0)
</script>
<style scoped lang="scss">
@import '../../style/variable.scss';
.slider-demo-block {
  display: flex;
  height: 500px;
}
.slider-demo-block .demonstration {
  font-size: 14px;
  color: $l-text-color;
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-demo-block .demonstration + .l-slider {
  flex: 0 0 70%;
}
</style>
