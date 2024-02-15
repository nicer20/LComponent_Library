<template>
  <div class="slider-demo-block">
    <span class="demonstration">Default value</span>
    <l-slider :value="value1" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Customized initial value</span>
    <l-slider :value="value2" />
  </div>
  <div class="slider-demo-block">
    <span class="demonstration">Disabled</span>
    <l-slider :value="value3" disabled />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(0)
const value2 = ref(20)
const value3 = ref(0)
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
