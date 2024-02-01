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
  <h2>横向滚动</h2>
  <p>当元素宽度大于滚动条宽度时，会显示横向滚动条。</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="scrollbar" demoName="demo2"></l-preview>
  </div>
</template>

<script setup lang="ts">
import Demo1 from "./demo1.vue";
import Demo2 from "./demo2.vue"
</script>

<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';

.example-showcase {
  width: 650px;
}
</style>