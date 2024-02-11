<template>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints not displayed</span>
    <l-slider :value="value1" step="20" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Breakpoints displayed</span>
    <l-slider :value="value2" step="20" showStops />
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
  align-items: center;
}
.slider-demo-block .l-slider {
  margin-top: 0;
  margin-left: 12px;
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
