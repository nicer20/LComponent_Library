<template>
  <h1>Menu 菜单</h1>
  <p>为网站提供导航功能的菜单。</p>
  <h2>侧栏</h2>
  <p>垂直菜单，可内嵌子菜单。</p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="menu" demoName="demo1"></l-preview>
  </div>
</template>
<script lang="ts" setup>
import Demo1 from '../doc/demo1.vue'
</script>
<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';
</style>
