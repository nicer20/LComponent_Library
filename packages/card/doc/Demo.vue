<template>
  <h1>Card 卡片</h1>
  <p>将信息聚合在卡片容器中展示。</p>
  <h2>基础用法</h2>
  <p>卡片包含标题，内容以及操作区域。
    Card 组件由 <code>header</code> <code>body</code> 和 <code>footer</code>组成。<code>header</code> 和
    <code>footer</code> 是可选的，其内容取决于一个具名的 slot。
  </p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="card" demoName="demo1"></l-preview>
  </div>
</template>


<script setup lang='ts'>
import Demo1 from "./demo1.vue"
</script>


<style scoped>
@import '../../style/exampleShowcase.scss';
</style>