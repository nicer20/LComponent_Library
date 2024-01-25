<!--这里实现 Switch 组件功能-->
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  },
  activeColor:String,
  inactiveColor:String,
  color: String
})
const emit = defineEmits(['update:value'])
const toggleSwitch = () => {
  emit('update:value',!props.value)
}

// const lClass = computed(() => {
//   return [
//     `l-button-${props.value}`,
//     props.color ? 'l-switch-on-Color' : ''
//   ]
// })

defineExpose({
  toggleSwitch
})
</script>

<template>
<label class="l-switch" @click="toggleSwitch">
  <span class="l-switch_core">
    <!--用button做小圆球-->
    <span class="l-switch_button"></span>
  </span>
</label>
</template>

<style scoped lang="scss">
.l-switch{
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .l-switch_core{
    margin:0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .l-switch_button{
      position: absolute;
      top:1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
</style>
