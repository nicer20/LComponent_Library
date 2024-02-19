<template>
  <div class="l-row">
    <l-carousel></l-carousel>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.l-row {
  display: flex;
  .l-switch + .l-switch {
    margin-left: 12px;
  }
}
.l-row + .l-row {
  margin-top: 10px;
}
</style>
