<!--这里实现 Switch 组件功能-->
<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  },
  activeColor:String,
  inactiveColor:String,
  disabled:Boolean,
})
const emit = defineEmits(['update:value'])
const toggleSwitch = () => {
  emit('update:value',!props.value)
}

const lClass = computed(() => {
  return [
    props.value&&props.activeColor ? 'l-switch-activeColor' : '',
    !(props.value)&&props.inactiveColor ? 'l-switch-inactiveColor' : '',
    props.disabled ? 'l-switch-disabled' : '',
  ]
})

defineExpose({
  toggleSwitch,
})
</script>

<template>
<label class="l-switch" :class="{'is-checked': value,'disabled': disabled}">
  <span class="l-switch_core" :class="lClass" @click="toggleSwitch">
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
    &.l-switch-inactiveColor {
      border-color: v-bind('props.inactiveColor');
      background-color: v-bind('props.inactiveColor');
    }
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
.l-switch.is-checked{
  .l-switch_core{
    border-color: #409eff;
    background-color: #409eff;
    &.l-switch-activeColor {
      border-color: v-bind('props.activeColor');
      background-color: v-bind('props.activeColor');
    }
    .l-switch_button{
      transform: translateX(20px);
    }
  }
}
.l-switch.disabled{
  cursor: not-allowed;
  .l-switch_core{
    &.l-switch-disabled {
      pointer-events: none;
      filter: brightness(0.8);
    }
  }
}
</style>
