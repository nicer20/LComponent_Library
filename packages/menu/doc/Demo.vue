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
  <h2>顶栏</h2>
  <p>顶部栏菜单可以在各种场景中使用。</p>
  <p>导航菜单默认为垂直模式，通过将 mode 属性设置为 horizontal 来使导航菜单变更为水平模式。</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="menu" demoName="demo2"></l-preview>
  </div>
</template>
<script lang="ts" setup>
import Demo1 from './demo1.vue'
import Demo2 from './demo2.vue'
</script>
<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';
</style>
