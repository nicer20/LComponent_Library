<template>
  <li class="l-menu-item" :class="lClass" @click="handleClick" tabindex="-1">
    <span><slot></slot></span>
  </li>
</template>

<script lang="ts" setup>
import { reactive, computed, getCurrentInstance } from 'vue'
import { findAncestor } from '../utils/utils'

const emit = defineEmits(['clickItem'])
const props = defineProps({
  index: String,
  disabled: Boolean
})
//获取当前组件实例
const instance = getCurrentInstance()
//找到外层menu
let ancestor = findAncestor(instance, 'l-menu')
const itemData = reactive({
  index: props.index,
  isActive: false
})
const handleClick = () => {
  itemData.isActive = !itemData.isActive
  emit('clickItem', itemData)
}

const lClass = computed(() => {
  return [props.disabled ? 'l-menu-item-disabled' : '', itemData.isActive ? 'is-active' : '']
})
</script>

<script lang="ts">
export default {
  name: 'l-menu-item'
}
</script>

<style scoped lang="scss">
@import '../style/variable.scss';
.l-menu-item {
  font-size: large;
  cursor: pointer;
  list-style-type: none;
  &:hover {
    background-color: #ecf5ff;
  }
  &.is-active {
    color: #409eff;
  }
  &.l-menu-item-disabled {
    color: #dedfe0;
    cursor: not-allowed;
    &:hover {
      color: #dedfe0;
      background-color: $l-menu-background;
    }
    &:active {
      color: #dedfe0;
    }
  }
}
</style>
