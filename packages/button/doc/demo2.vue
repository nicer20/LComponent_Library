<template>
  <div class="l-row">
    <l-button disabled>default</l-button>
    <l-button type="primary" disabled>primary</l-button>
    <l-button type="info" disabled>info</l-button>
    <l-button type="success" disabled>success</l-button>
    <l-button type="danger" disabled>danger</l-button>
  </div>
  <div class="l-row">
    <l-button round disabled>default</l-button>
    <l-button type="primary" round disabled>primary</l-button>
    <l-button type="info" round disabled>info</l-button>
    <l-button type="success" round disabled>success</l-button>
    <l-button type="danger" round disabled>danger</l-button>
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
