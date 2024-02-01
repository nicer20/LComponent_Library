<!--  文档页面  -->
<script setup lang="ts">
import Demo1 from "./demo1.vue"
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>

<template>
  <h1>Switch 开关</h1>
  <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
  <h2>基础用法</h2>
  <p>绑定 v-model(:value="value1" @update:value) 到一个 Boolean 类型的变量。 可以使用 activeColor 属性与 inactiveColor 属性来设置开关的背景色。</p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="switch" demoName="demo1"></l-preview>
  </div>
  <h2>禁用状态</h2>
  <p>你可以使用 disabled 属性来定义开关是否被禁用。</p>
  <p>使用 disabled 属性来控制开关是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="switch" demoName="demo2"></l-preview>
  </div>
  <h2>尺寸</h2>
  <p>你可以使用 size 属性来设置开关尺寸。</p>
  <p>使用 size 属性来设置开关尺寸。 该属性可设置为"large"或"small"。</p>
  <div class="example-showcase">
    <Demo3 />
    <l-divider></l-divider>
    <l-preview compName="switch" demoName="demo3"></l-preview>
  </div>
</template>

<style scoped lang="scss">
@import '../../style/variable.scss';
.example-showcase {
  background-color: white;
  width: 100%;
  border: solid 1px $l-border-color-lightgrey;
  border-radius: 5px;
  padding: 10px;
}
</style>
