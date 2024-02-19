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
  <h2>列偏移</h2>
  <p>您可以指定列偏移量。</p>
  通过制定 col 组件的 <code>offset</code> 属性可以指定分栏偏移的栏数。
  <div class="example-showcase">
    <Demo4 />
    <l-divider></l-divider>
    <l-preview compName="layout" demoName="demo4"></l-preview>
  </div>
  <h2>对齐方式</h2>
  <p>默认使用 flex 布局来对分栏进行灵活的对齐。</p>
  您可以通过<code>justify</code> 属性来定义子元素的排版方式，其取值为start、center、end、space-between、space-around或space-evenly。
  <div class="example-showcase">
    <Demo5 />
    <l-divider></l-divider>
    <l-preview compName="layout" demoName="demo5"></l-preview>
  </div>
  <h2>响应式布局</h2>
  <p>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</p>
  <div class="example-showcase">
    <Demo6 />
    <l-divider></l-divider>
    <l-preview compName="layout" demoName="demo6"></l-preview>
  </div>
</template>
<script lang="ts" setup>
import Demo1 from '../doc/demo1.vue'
import Demo2 from '../doc/demo2.vue'
import Demo3 from '../doc/demo3.vue'
import Demo4 from '../doc/demo4.vue'
import Demo5 from '../doc/demo5.vue'
import Demo6 from '../doc/demo6.vue'
</script>
<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';
</style>