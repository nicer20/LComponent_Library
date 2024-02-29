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
  <h2>文本域</h2>
  <p>用于输入多行文本信息可缩放的输入框。 添加 <code>type="textarea"</code> 属性来将 <code>input</code> 元素转换为原生的 <code>textarea</code> 元素。</p>
  <p>文本域高度可通过 <code>rows</code> 属性控制</p>
  <div class="example-showcase">
    <Demo6 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo6"></l-preview>
  </div>
  <h2>自适应文本域</h2>
  <p>设置文字输入类型的 <code>autosize</code> 属性使得根据内容自动调整的高度。 你可以给 <code>autosize</code> 提供一个包含有最大和最小高度的对象，让输入框自动调整。</p>
  <div class="example-showcase">
    <Demo7 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo7"></l-preview>
  </div>
  <h2>复合型输入框</h2>
  <p>可以在输入框中前置或后置一个元素，通常是标签或按钮。</p>
  <p>可通过 <code>slot</code> 来指定在 Input 中分发的前置或者后置的内容。</p>
  <div class="example-showcase">
    <Demo8 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo8"></l-preview>
  </div>
  <h2>尺寸</h2>
  <p>使用 <code>size</code> 属性改变输入框大小。 除了默认大小外，还有另外两个选项： <code>large</code> , <code>small</code> 。</p>
  <div class="example-showcase">
    <Demo9 />
    <l-divider></l-divider>
    <l-preview compName="input" demoName="demo9"></l-preview>
  </div>
</template>


<script setup lang='ts'>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
import Demo5 from './demo5.vue'
import Demo6 from './demo6.vue'
import Demo7 from './demo7.vue'
import Demo8 from './demo8.vue'
import Demo9 from './demo9.vue'
</script>


<style lang="scss">
@import '../../style/exampleShowcase.scss';
</style>