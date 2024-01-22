<template>
  <div class="l-row">
    <l-button>default</l-button>
    <l-button type="primary">primary</l-button>
    <l-button type="info">info</l-button>
    <l-button type="success">success</l-button>
    <l-button type="danger">danger</l-button>
  </div>
  <div class="l-row">
    <l-button round>default</l-button>
    <l-button type="primary" round>primary</l-button>
    <l-button type="info" round>info</l-button>
    <l-button type="success" round>success</l-button>
    <l-button type="danger" round>danger</l-button>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.l-row {
  display: flex;
  .l-button + .l-button {
    margin-left: 12px;
  }
}
.l-row + .l-row {
  margin-top: 10px;
}
</style>
