<template>
  <ul class="l-menu">
    <slot></slot>
  </ul>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.l-menu {
  width: 200px;
  height: auto;
  border-right: solid 2px #dcdfe6;
  position: relative;
  background-color: snow;
  box-sizing: border-box;
}
</style>
