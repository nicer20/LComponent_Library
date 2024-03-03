<template>
    <h1>Skeleton 骨架屏</h1>
    <p>在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。</p>
    <h2>基础用法</h2>
    <p>基础的骨架效果。</p>
    <!-- <br /> -->
    <div class="example-showcase">
        <Demo1 />
        <l-divider></l-divider>
        <l-preview compName="skeleton" demoName="demo1"></l-preview>

    </div>
    <h2>更多参数</h2>
    <p>可以配置骨架屏段落数量，以便更接近真实渲染效果。显示的数量会比传入的数量多 1，首行会被渲染一个长度 33% 的段首。</p>

    <div class="example-showcase">
        <Demo2 />
        <l-divider></l-divider>
        <l-preview compName="skeleton" demoName="demo2"></l-preview>
    </div>
    <h2>动画效果</h2>
    <p>我们提供了一个开关标志，表明是否显示加载动画， 调用 animated 如果真是这样，所有的 l-skeleton 的子节点将显示动画。</p>

    <div class="example-showcase">
        <Demo3 />
        <l-divider></l-divider>
        <l-preview compName="skeleton" demoName="demo3"></l-preview>
    </div>
    <h2>自定义样式</h2>
    <p> 本组件库提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot template 来自己设定模板。

        我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 另外，在构建您自己自定义的骨架时，您应该尽可能更接近于真正的DOM。 避免DOM因高度差而发生抖动。</p>

    <div class="example-showcase">
        <Demo4 />
        <l-divider></l-divider>
        <l-preview compName="skeleton" demoName="demo4"></l-preview>
    </div>
    <h2>加载状态</h2>
    <p> 当 Loading 结束之后，我们往往需要显示真实的 UI， 可以通过 loading 属性的值来控制是否显示加载后的 DOM。 也可以通过具名插槽 default 来构建 loading 结束之后需要展示的真实 DOM 元素结构。
    </p>

    <div class="example-showcase">
        <Demo5 />
        <l-divider></l-divider>
        <l-preview compName="skeleton" demoName="demo5"></l-preview>
    </div>
</template>
<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
import Demo5 from './demo5.vue'
</script>
<style>
@import '../../style/exampleShowcase.scss';
</style>
