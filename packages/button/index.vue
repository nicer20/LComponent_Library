<template>
  <button class="l-button" :class="lClass" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  disabled: Boolean,
  round: Boolean,
  color: String
})

const lClass = computed(() => {
  return [
    `l-button-${props.type}`,
    props.round ? 'l-button-round' : '',
    props.disabled ? 'l-button-disabled' : '',
    props.color ? 'l-button-customColor' : ''
  ]
})
</script>

<style lang="scss" scoped>
.l-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 32px;
  border: solid 1px #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 8px 15px;
  cursor: pointer;
  &.l-button-round {
    border-radius: 20px;
  }
  &.l-button-customColor {
    background-color: v-bind('props.color');
  }
  &:hover {
    filter: brightness(1.1);
  }
  &:active {
    filter: brightness(0.9);
  }
}
.l-button-default {
  background-color: #ffffff;
  color: #606266;
  &.l-button-disabled {
    background-color: #e4e4e4;
    cursor: not-allowed;
  }
}
.l-button-primary {
  background-color: #2d93ff;
  color: #fff;
  &.l-button-disabled {
    background-color: #a0cfff;
    cursor: not-allowed;
  }
}
.l-button-info {
  background-color: #909399;
  color: #fff;
  &.l-button-disabled {
    background-color: #c8c9cc;
    cursor: not-allowed;
  }
}
.l-button-success {
  background-color: #67c23a;
  color: #fff;
  &.l-button-disabled {
    background-color: #b3e19d;
    cursor: not-allowed;
  }
}
.l-button-danger {
  background-color: #f56c6c;
  color: #fff;
  &.l-button-disabled {
    background-color: #fab6b6;
    cursor: not-allowed;
  }
}
.l-button-disabled {
  &:hover {
    filter: brightness(1);
  }
  &:active {
    filter: brightness(1);
  }
}
</style>
