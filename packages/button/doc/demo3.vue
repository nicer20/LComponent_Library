<template>
  <div class="l-row">
    <l-button color="red">red</l-button>
    <l-button color="coral">coral</l-button>
    <l-button color="rgb(123,123,123)">rgb(123,123,123)</l-button>
    <l-button color="rgb(111,222,333)">rgb(111,222,333)</l-button>
    <l-button color="#abcdef">#abcdef</l-button>
    <l-button color="#123456">#123456</l-button>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped lang="scss">
.l-button + .l-button {
  margin-left: 12px;
}
</style>
