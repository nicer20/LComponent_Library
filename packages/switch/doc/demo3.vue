<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(true)

const updateSwitchValue = (newValue:boolean) =>{
  value.value=newValue
}
</script>

<template>
  <l-switch :value="value" @update:value="updateSwitchValue" size="large" />
  <br />
  <l-switch :value="value" @update:value="updateSwitchValue" />
  <br />
  <l-switch :value="value" @update:value="updateSwitchValue" size="small" />
</template>


<style scoped lang="scss">

</style>
