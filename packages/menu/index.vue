<template>
  <ul class="l-menu">
    <slot></slot>
    <l-menu-item @click="itemClick" index="1">base</l-menu-item>
    <l-menu-item index="2" disabled="true">layout</l-menu-item>
    <l-sub-menu>
      <template #title>test</template>
      <l-menu-item index="2-1">menu</l-menu-item>
      <l-menu-item index="2-2">form</l-menu-item>
      <l-menu-item index="2-3">breadcrum</l-menu-item>
    </l-sub-menu>
  </ul>
</template>
<script lang="ts" setup>
const itemClick = (data: any) => {
  console.log(data.index)
}
</script>
<style scoped lang="scss">
.l-menu {
  width: 200px;
  height: auto;
  border-right: solid 2px #dcdfe6;
  position: relative;
  background-color: #ffffff;
  box-sizing: border-box;
}
</style>
