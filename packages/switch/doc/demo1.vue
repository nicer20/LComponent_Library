<template>
  <div class="l-row">
    <l-switch :value="value1" @update:value="updateSwitchValue" />
    <l-switch
        :value="value1" @update:value="updateSwitchValue"
        activeColor="#13ce66" inactiveColor="#ff4949"
    />
  </div>
  <p>开关状态: {{ value1 }}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(false)

const updateSwitchValue = (newValue:boolean) =>{
  value1.value=newValue
}
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
