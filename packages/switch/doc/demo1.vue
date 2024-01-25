<template>
  <l-switch :value="value1" @update:value="updateSwitchValue" />
  <p>开关状态: {{value1}}</p>
  <!--<l-switch-->
  <!--    v-model="value2"-->
  <!--    style="switch-on-color: #13ce66; switch-off-color: #ff4949"-->
  <!--/>-->
  <l-switch></l-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(false)
// const value2 = ref(true)

const updateSwitchValue=(newValue:boolean)=>{
  value1.value=newValue
}
</script>
