<template>
  <h1>Layout 布局</h1>
  <p>通过基础的 24 分栏，迅速简便地创建布局。</p>
  <h2>基础布局</h2>
  <p>使用列创建基础网格布局。</p>
  通过 <code>row</code> 和 <code>col</code> 组件，并通过 <code>col</code> 组件的 <code>span</code> 属性我们就可以自由地组合布局。
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="layout" demoName="demo1"></l-preview>
  </div>
  <h2>分栏间隔</h2>
  <p>支持列间距。</p>
  行提供 <code>gutter</code> 属性来指定列之间的间距，其默认值为0。
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="layout" demoName="demo2"></l-preview>
  </div>
  <h2>混合布局</h2>
  <p>通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。</p>
  <div class="example-showcase">
    <Demo3 />
    <l-divider></l-divider>
    <l-preview compName="layout" demoName="demo3"></l-preview>
  </div>
</template>
<script lang="ts" setup>
import Demo1 from '../doc/demo1.vue'
import Demo2 from '../doc/demo2.vue'
import Demo3 from '../doc/demo3.vue'
</script>
<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';
</style>