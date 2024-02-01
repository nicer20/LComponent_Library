<template>
  <div class="l-row">
    <l-switch :value="value2" @update:value="updateSwitchValue2"
    name="username"/>
      <l-switch
          :value="value1" @update:value="updateSwitchValue" disabled
      />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)

const updateSwitchValue=(newValue:boolean)=>{
  value1.value=newValue
  console.log('value: ',value1.value)
}
const updateSwitchValue2=(newValue:boolean)=>{
  value2.value=newValue
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
