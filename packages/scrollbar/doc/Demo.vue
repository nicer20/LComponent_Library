<template>
  <h1>Scrollbar 滚动条</h1>
  <p>用于替换浏览器原生滚动条。</p>
  <h2>基础用法</h2>
  <p>通过 height 属性设置滚动条高度，若不设置则根据父容器高度自适应。</p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="scrollbar" demoName="demo1"></l-preview>
  </div>
</template>

<script setup lang="ts">
import Demo1 from "./demo1.vue";
</script>

<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';
</style>