<template>
  <l-menu
    ><l-menu-item index="1">base</l-menu-item>
    <l-menu-item index="2" disabled="true">layout</l-menu-item>
    <l-sub-menu>
      <template #title>test1</template>
      <l-menu-item index="2-1">menu</l-menu-item>
      <l-menu-item index="2-2">form</l-menu-item>
      <l-menu-item index="2-3">breadcrum</l-menu-item>
      <l-sub-menu>
        <template #title>test2</template>
        <l-menu-item index="2-4-1">tip</l-menu-item>
        <l-menu-item index="2-4-2">tap</l-menu-item>
        <l-menu-item index="2-4-3">top</l-menu-item>
      </l-sub-menu>
    </l-sub-menu>
  </l-menu>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss"></style>
