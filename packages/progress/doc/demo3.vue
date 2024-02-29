<template>
  <div class="l-row">
    <l-progress type="circle" :value="value1" />
    <l-progress type="circle" :value="100" />
    <l-progress type="circle" :value="100" status="success" />
    <l-progress type="circle" :value="70" status="warning" />
    <l-progress type="circle" :value="50" status="exception" />
  </div>
  <l-button type="primary" round @click="updateValue" >进度条变化</l-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(30)

const updateValue = () =>{
  value1.value=  value1.value<100?value1.value+10:0
}
</script>
<style scoped>
.l-row {
  display: flex;
  width: 650px;
  .l-progress + .l-progress {
    margin-left: 12px;
  }
}
.l-row + .l-row {
  margin-top: 10px;
}
</style>
