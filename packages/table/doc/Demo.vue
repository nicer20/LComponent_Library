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
</template>
<script lang ="ts" setup>
import Demo1 from './demo1.vue'
</script>