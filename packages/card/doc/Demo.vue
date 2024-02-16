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
  <h2>简单卡片</h2>
  <p>卡片可以只有内容区域。</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="card" demoName="demo2"></l-preview>
  </div>
  <h2>有图片内容的卡片</h2>
  <p>可配置定义更丰富的内容展示。</p>
  配置 <code>body-style</code> 属性来自定义 <code>body</code> 部分的样式。
  <div class="example-showcase">
    <Demo3 />
    <l-divider></l-divider>
    <l-preview compName="card" demoName="demo3"></l-preview>
  </div>
  <h2>带有阴影效果的卡片</h2>
  <p>你可以定义什么时候展示卡片的阴影效果。</p>
  通过 <code>shadow</code> 属性设置卡片阴影出现的时机。 该属性的值可以是：<code>always</code>、<code>hover</code> 或 <code>never</code>。
  <div class="example-showcase">
    <Demo4 />
    <l-divider></l-divider>
    <l-preview compName="card" demoName="demo4"></l-preview>
  </div>
</template>


<script setup lang='ts'>
import Demo1 from "./demo1.vue"
import Demo2 from "./demo2.vue"
import Demo3 from "./demo3.vue"
import Demo4 from "./demo4.vue"
</script>


<style scoped>
@import '../../style/exampleShowcase.scss';
</style>