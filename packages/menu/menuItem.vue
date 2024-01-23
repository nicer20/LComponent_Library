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

const emit = defineEmits(['clickItem'])

const props = defineProps({
  index: String,
  disabled: Boolean
})

const itemData = reactive({
  index: props.index
})

const handleClick = () => {
  emit('clickItem', itemData)
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
    color: #dedfe0;
    cursor: not-allowed;
    &:hover {
      color: #dedfe0;
    }
    &:active {
      color: #dedfe0;
    }
  }
}
</style>
