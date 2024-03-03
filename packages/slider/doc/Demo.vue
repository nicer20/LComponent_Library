<template>
  <h1>Slider 滑块</h1>
  <p>通过拖动滑块在一个固定区间内进行选择</p>
  <h2>基础用法</h2>
  <p>在拖动滑块时，显示当前值</p>
  <p>通过设置绑定值自定义滑块的初始值</p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider />
    <l-preview compName="slider" demoName="demo1"></l-preview>
  </div>
  <h2>离散值</h2>
  <p>改变step的值可以改变步长， 通过设置 show-stops 属性可以显示间断点</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider />
    <l-preview compName="slider" demoName="demo2"></l-preview>
  </div>
  <h2>垂直模式</h2>
  <p>配置 vertical 属性为 true 启用垂直模式。 在垂直模式下，必须设置 height 属性。</p>
  <div class="example-showcase">
    <Demo3 />
    <l-divider />
    <l-preview compName="slider" demoName="demo3"></l-preview>
  </div>
</template>
<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>
<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';
</style>
