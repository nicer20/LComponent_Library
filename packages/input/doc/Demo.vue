<template>
  <h1>Input 输入框</h1>
  <p>通过鼠标或键盘输入字符</p>
  <h2>基础用法</h2>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo1"></l-preview>
  </div>
  <h2>禁用状态</h2>
  <p>通过 <code>disabled</code> 属性指定是否禁用 input 组件</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo2"></l-preview>
  </div>
</template>


<script setup lang='ts'>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
</script>


<style lang="scss">
@import '../../style/exampleShowcase.scss';
</style>