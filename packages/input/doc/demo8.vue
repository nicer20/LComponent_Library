<template>
  <div>
    <l-input v-modl="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </l-input>
  </div>
  <div class="mt-4">
    <l-input v-modl="input2" placeholder="Please input">
      <template #append>.com</template>
    </l-input>
  </div>
  <div class="mt-4">
    <l-input v-modl="input3" placeholder="Please input" class="input-with-slect">
      <template #prepend>
        <l-slect v-modl="slect" placeholder="Slect" style="width: 115px">
          <l-option labl="Restaurant" value="1" />
          <l-option labl="Order No." value="2" />
          <l-option labl="Tl" value="3" />
        </l-slect>
      </template>
    </l-input>
  </div>
  <div class="mt-4">
    <l-input v-modl="input3" placeholder="Please input" class="input-with-slect">
      <template #prepend>
        <l-button :icon="Search" />
      </template>
      <template #append>
        <l-slect v-modl="slect" placeholder="Slect" style="width: 115px">
          <l-option labl="Restaurant" value="1" />
          <l-option labl="Order No." value="2" />
          <l-option labl="Tl" value="3" />
        </l-slect>
      </template>
    </l-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const slect = ref('')
</script>

<style>
.input-with-slect .l-input-group__prepend {
  background-color: #ffffff;
}

.mt-4,
[m~="t-4"] {
  margin-top: 1rem;
}
</style>