<!--这里实现 Switch 组件功能-->
<script setup lang="ts">
import {computed, ref} from 'vue'

const inputRef = ref(null)

const props = defineProps({
  value: {
    type: Boolean,
    default: false
  },
  activeColor: String,
  inactiveColor: String,
  disabled: Boolean,
  name: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
})
const emit = defineEmits(['update:value'])
const toggleSwitch = () => {
  if (props.disabled) {
    return
  }
  emit('update:value', !props.value)
}

const lClass = computed(() => {
  if(inputRef.value){ inputRef.value.checked = props.value}
  return [
    props.value && props.activeColor ? 'l-switch-activeColor' : '',
    !(props.value) && props.inactiveColor ? 'l-switch-inactiveColor' : '',
    props.disabled ? 'l-switch-disabled' : '',
  ]
})

defineExpose({
  toggleSwitch,
  inputRef
})
</script>

<template>
  <div class="l-switch" :class="{'is-checked': value,'disabled': disabled}">
    <span class="l-switch_core" :class="lClass" @click="toggleSwitch">
    <!--用button做小圆球-->
    <span class="l-switch_button"></span>
  </span>
    <!--添加input，以便于支持name属性-->
    <input
        class="l-switch_input"
        type="checkbox"
        :name="name"
        ref="inputRef"
    >
  </div>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';

.l-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  //input框隐藏
  .l-switch_input{
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .l-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid $l-switch_core-off;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: $l-switch_core-off;
    cursor: pointer;
    transition: border-color .3s, background-color .3s;
    vertical-align: middle;

    &.l-switch-inactiveColor {
      border-color: v-bind('props.inactiveColor');
      background-color: v-bind('props.inactiveColor');
    }

    .l-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: $l-switch_button;
    }
  }
}

.l-switch.is-checked {
  .l-switch_core {
    border-color: $l-switch_core-on;
    background-color: $l-switch_core-on;

    &.l-switch-activeColor {
      border-color: v-bind('props.activeColor');
      background-color: v-bind('props.activeColor');
    }

    .l-switch_button {
      transform: translateX(20px);
    }
  }
}

.l-switch.disabled {
  cursor: not-allowed;

  .l-switch_core {
    &.l-switch-disabled {
      cursor: not-allowed;
      filter: brightness(0.8);
    }
  }
}
</style>
