<template>
    <h1>Table组件</h1>
    <p>用于数据收集展示、分析整理、操作处理。</p>
    <h2>基础用法</h2>
    <p>表格的基本用法，需要传递 columns 和 data。</p>
    <div class="example-showcase">
        <Demo1 />
        <l-divider></l-divider>
        <l-preview compName="table" demoName="demo1"></l-preview>
    </div>
    <h2>带斑马纹表格</h2>
    <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。

        stripe 可以创建带斑马纹的表格。 如果 true, 表格将会带有斑马纹。</p>
    <div class="example-showcase">
        <Demo2 />
        <l-divider></l-divider>
        <l-preview compName="table" demoName="demo2"></l-preview>
    </div>
    <h2>带边框表格</h2>
    <p>默认情况下，Table 组件是不具有边框的， 如果需要，可以使用 border 属性，把该属性设置为 true 即可启用。</p>
    <div class="example-showcase">
        <Demo3 />
        <l-divider></l-divider>
        <l-preview compName="table" demoName="demo3"></l-preview>
    </div>
    <h2>排序</h2>
    <p>对表格进行排序，可快速查找或对比数据，可以使用sortColumn属性，将它的prop属性设置为想要以其为基准的排序的列名，
        order属性设置为asc（升序）或desc（降序）</p>
    <div class="example-showcase">
        <Demo4 />
        <l-divider></l-divider>
        <l-preview compName="table" demoName="demo4"></l-preview>
    </div>
</template>
<script lang ="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
import Demo3 from './demo3.vue'
import Demo4 from './demo4.vue'
</script>
<style>
@import '../../style/exampleShowcase.scss';
</style>