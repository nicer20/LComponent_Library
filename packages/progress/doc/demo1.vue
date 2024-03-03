<template>
  <div class="l-row">
    <l-progress :value="value1"/>
    <l-button type="primary" round @click="updateValue" >进度条变化</l-button>
    <l-progress :value="100" />
    <l-progress :value="100" status="success" />
    <l-progress :value="100" status="warning" />
    <l-progress :value="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(60)

const updateValue = () =>{
  value1.value=  value1.value<100?value1.value+10:0
}
</script>

<style scoped lang="scss">
.l-row {
  width: 400px;
  .l-progress + .l-progress {
    margin-left: 12px;
  }
}
.l-row + .l-row {
  margin-top: 10px;
}
</style>
