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
  <h2>一键清空</h2>
  <p>使用 <code>clearable</code> 属性即可得到一个可一键清空的输入框</p>
  <div class="example-showcase">
    <Demo3 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo3"></l-preview>
  </div>
  <h2>格式化</h2>
  <p>在 <code>formatter</code> 的情况下显示值，我们通常同时使用 <code>parser</code> </p>
  <div class="example-showcase">
    <Demo4 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo4"></l-preview>
  </div>
  <h2>密码框</h2>
  <p>使用 <code>show-password</code> 属性即可得到一个可切换显示隐藏的密码框</p>
  <div class="example-showcase">
    <Demo5 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo5"></l-preview>
  </div>
</template>


<script setup lang='ts'>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
import Demo5 from './demo5.vue'
</script>


<style lang="scss">
@import '../../style/exampleShowcase.scss';
</style>