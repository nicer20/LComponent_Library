<!--  文档页面  -->
<script setup lang="ts">
import Demo1 from "./demo1.vue"
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>

<template>
  <h1>Progress 进度条</h1>
  <p> 用于展示操作进度，告知用户当前状态和预期。</p>
  <h2>直线进度条</h2>
  <p>Progress 组件设置 value 属性即可，表示进度条对应的百分比。
    该属性必填，并且必须在 0-100 的范围内。 你可以通过设置 status 来自定义进度条显示的状态。</p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="progress" demoName="demo1"></l-preview>
  </div>
  <h2>进度条内显示百分比标识</h2>
  <p>百分比不占用额外空间，适用于文件上传等场景。</p>
  <p>Progress 组件可通过 stroke-width 属性更改进度条的高度，
    并可通过 text-inside 属性来改变进度条内部的文字。</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="progress" demoName="demo2"></l-preview>
  </div>
  <!--<h2>尺寸</h2>-->
  <!--<p>你可以使用 size 属性来设置开关尺寸。</p>-->
  <!--<p>使用 size 属性来设置开关尺寸。 该属性可设置为"large"或"small"。</p>-->
  <!--<div class="example-showcase">-->
  <!--  <Demo3 />-->
  <!--  <l-divider></l-divider>-->
  <!--  <l-preview compName="switch" demoName="demo3"></l-preview>-->
  <!--</div>-->
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
