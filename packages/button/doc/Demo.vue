<template>
  <h1>Button 按钮</h1>
  <p>常用的操作按钮。</p>
  <h2>基础用法</h2>
  <p>使用type 和 round 来定义按钮的样式。</p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="button" demoName="demo1"></l-preview>
  </div>

  <h2>禁用状态</h2>
  <p>你可以使用 disabled 属性来定义按钮是否被禁用。</p>
  <p>使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="button" demoName="demo2"></l-preview>
  </div>

  <h2>自定义颜色</h2>
  <p>你可以自定义按钮的颜色。</p>
  <p>我们将自动计算按钮处于 hover 和 active 状态时的颜色。</p>
  <div class="example-showcase">
    <Demo3 />
    <l-divider></l-divider>
    <l-preview compName="button" demoName="demo3"></l-preview>
  </div>
</template>

<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>

<style lang="scss">
@import '../../style/variable.scss';
.example-showcase {
  background-color: white;
  width: 100%;
  border: solid 1px $l-border-color-lightgrey;
  border-radius: 5px;
  padding: 10px;
}
</style>
