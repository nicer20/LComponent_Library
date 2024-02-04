<template>
    <h1>Badge 徽章</h1>
    <p>按钮和图标上的数字或状态标记。</p>
    <h2>基础用法</h2>
    <p>可以用来展示新消息的数量。

        数量值可接受 Number 或 String。</p>
    <!-- <br /> -->
    <div class="example-showcase">
        <Demo1 />
        <l-divider></l-divider>
        <l-preview compName="badge" demoName="demo1"></l-preview>

    </div>
    <h2>最大值</h2>
    <p>你还可以自定义最大值

        由 max 属性定义，接受 Number 值。 请注意，仅在值也是 Number 时起作用。</p>
    <!-- <br /> -->
    <div class="example-showcase">
        <Demo2 />
        <l-divider></l-divider>
        <l-preview compName="badge" demoName="demo2"></l-preview>
    </div>
    <h2>自定义显示内容</h2>
    <p>你也可以展示除数字以外你想要展示的任何值。

        当 value 是 String 时，可以显示自定义文字。</p>
    <!-- <br /> -->
    <div class="example-showcase">
        <Demo3 />
        <l-divider></l-divider>
        <l-preview compName="badge" demoName="demo3"></l-preview>
    </div>
    <h2>小红点</h2>
    <p>通过一个小红点标记来告知用户有新内容。

        使用 isDot 属性。 是个布尔值。</p>
    <!-- <br /> -->
    <div class="example-showcase">
        <Demo4 />
        <l-divider></l-divider>
        <l-preview compName="badge" demoName="demo4"></l-preview>
    </div>
</template>
<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
</script>
<style>
@import '../../style/exampleShowcase.scss';
</style>
