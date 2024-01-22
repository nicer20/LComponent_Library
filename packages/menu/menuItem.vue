<template>
  <li
    class="l-menu-item"
    :class="lClass"
    @click="handleClick"
    tabindex="-1"
    :disabled="props.disabled"
  >
    <span><slot></slot></span>
  </li>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  disabled: Boolean,
  index: String
})

const itemData = reactive({
  index: props.index
})

const handleClick = () => {
  emit('click', itemData)
}

const lClass = computed(() => {
  return [props.disabled ? 'l-menu-item-disabled' : '']
})
</script>
<style scoped lang="scss">
.l-menu-item {
  font-size: large;
  cursor: pointer;
  list-style-type: none;
  &.l-menu-item-disabled {
    color: red;
    cursor: not-allowed;
  }
}
</style>
