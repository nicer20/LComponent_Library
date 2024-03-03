<template>
  <div class="demo-input-size">
    <l-input v-model="input1" class="w-50 m-2" size="large" placeholder="Please Input" />
    <l-input v-model="input2" class="w-50 m-2" placeholder="Please Input" />
    <l-input v-model="input3" class="w-50 m-2" size="small" placeholder="Please Input" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input1 = ref('')
</script>
<style>
.w-50 {
  width: 12.5rem !important;
}

.m-2 {
  margin: 0.5rem;
}
</style>