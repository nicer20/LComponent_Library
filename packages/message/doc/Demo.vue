<!--  文档页面  -->
<script setup lang="ts">
import Demo1 from "./demo1.vue"
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
</script>

<template>
  <h1>Message 消息提示</h1>
  <p> 常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
  <h2>不同状态</h2>
  <p>用来显示「成功、警告、消息、错误」类的操作反馈。
    当需要自定义更多属性时，Message 也可以接收一个对象为参数。
    比如，设置 type 字段可以定义不同的状态，默认为info。 此时正文内容以 message 的值传入。
    同时，我们也为 Message 的各种 type 注册了方法，可以在不传入 type 字段的情况下像 open4 那样直接调用。</p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="message" demoName="demo1"></l-preview>
  </div>
  <!--<h2>禁用状态</h2>-->
  <!--<p>你可以使用 disabled 属性来定义开关是否被禁用。</p>-->
  <!--<p>使用 disabled 属性来控制开关是否为禁用状态。 该属性接受一个 Boolean 类型的值。</p>-->
  <!--<div class="example-showcase">-->
  <!--  <Demo2 />-->
  <!--  <l-divider></l-divider>-->
  <!--  <l-preview compName="switch" demoName="demo2"></l-preview>-->
  <!--</div>-->
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
