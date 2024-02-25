<template>
  <h1>Input 输入框</h1>
  <p>通过鼠标或键盘输入字符</p>
  <h2>基础用法</h2>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo1"></l-preview>
  </div>
</template>


<script setup lang='ts'>
import Demo1 from './demo1.vue'
</script>


<style lang="scss">
@import '../../style/exampleShowcase.scss';
</style>