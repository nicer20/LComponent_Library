<template>
  <li class="l-menu-item" role="listitem" :class="lClass" @click="handleClick" tabindex="-1">
    <span><slot></slot></span>
  </li>
</template>

<script lang="ts" setup>
import { reactive, computed, getCurrentInstance, onMounted } from 'vue'
import { findAncestor } from '../utils/utils'

const props = defineProps({
  index: String,
  disabled: Boolean
})
const itemData = reactive({
  index: props.index,
  isActive: false
})

const handleActive = () => {
  itemData.isActive = true
}
const handleDisactive = () => {
  itemData.isActive = false
}

defineExpose({
  itemData,
  handleActive,
  handleDisactive
})
//获取当前组件实例
const instance = getCurrentInstance()
let ancestor = findAncestor(instance, 'l-menu')
onMounted(() => {
  ancestor?.exposed?.addItem(instance)
})

const handleClick = () => {
  // if (!itemData.isActive) emit('clickItem', itemData)
  // itemData.isActive = !itemData.isActive
  ancestor?.exposed?.handleClickItem(itemData.index)
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
  width: auto;
  min-width: 150px;
  font-size: large;
  cursor: pointer;
  list-style-type: none;
  margin-left: 10px;
  box-sizing: border-box;
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
