<template>
  <ul class="l-menu" :class="lClass">
    <slot></slot>
  </ul>
</template>
<script lang="ts" setup>
import type { ComponentInternalInstance } from 'vue'
import { computed, provide, ref } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'vertical'
  }
})
provide('mode', props.mode)

const lClass = computed(() => {
  return [props.mode === 'horizontal' ? 'l-menu-horizontal' : 'l-menu-vertical']
})
//所有menuitem实例的列表
const itemList = ref<ComponentInternalInstance[]>([])
const addItem = (item: any) => {
  itemList.value.push(item)
}
//点击不同menuitem后进行状态切换
const handleClickItem = (index: string) => {
  itemList.value.forEach((item) => {
    if (!item) return
    if (item?.exposed?.itemData.index === index) {
      item?.exposed?.handleActive()
    } else {
      item?.exposed?.handleDisactive()
    }
  })
}

defineExpose({
  addItem,
  handleClickItem
  // addSubMenu,
  // handleClickSubMenu
})
</script>
<script lang="ts">
export default {
  name: 'l-menu'
}
</script>
<style scoped lang="scss">
.l-menu-vertical {
  width: 200px;
  height: auto;
  border-right: solid 2px #dcdfe6;
  position: relative;
  background-color: snow;
  box-sizing: border-box;
  padding-left: 0;
}
.l-menu-horizontal {
  display: flex;
  width: auto;
  height: 40px;
  border-bottom: solid 2px #dcdfe6;
  position: relative;
  background-color: snow;
  box-sizing: border-box;
  padding-left: 0;
}
</style>
