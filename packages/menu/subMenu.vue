<template>
  <ul
    class="l-sub-menu"
    :class="lClass"
    @click.stop="changeShowSub"
    @mouseenter="showSub"
    @mouseleave="hideSub"
  >
    <div class="sub-title">
      <slot name="title" class="title"></slot>
      <div class="icon"></div>
    </div>
    <div class="sub-item" @click.stop v-show="isShow">
      <slot></slot>
    </div>
  </ul>
</template>
<script lang="ts" setup>
import { ref, computed, inject } from 'vue'

const isShow = ref(false)

const mode = inject('mode')
const showSub = () => {
  if (mode === 'horizontal') isShow.value = true
}
const hideSub = () => {
  if (mode === 'horizontal') isShow.value = false
}
const changeShowSub = () => {
  isShow.value = !isShow.value
}
//菜单图标点击旋转
const iconRotate = computed(() => {
  return isShow.value ? '225deg' : '45deg'
})

const lClass = computed(() => {
  return [mode === 'horizontal' ? 'l-popup' : '']
})
</script>

<script lang="ts">
export default {
  name: 'l-sub-menu'
}
</script>

<style scoped lang="scss">
@import '../style/variable.scss';
.l-sub-menu {
  position: relative;
  cursor: pointer;
  padding-left: 0;
  font-size: large;
  width: auto;
  box-sizing: border-box;
  .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-left: 10px;
    height: 100%;
    .title {
      text-align: center;
    }
    .icon {
      content: '';
      width: 5px;
      height: 5px;
      transform: rotate(v-bind('iconRotate'));
      transform-origin: 25% 25%;
      transition: all 0.3s;
      border: 1px solid #aaa;
      margin-top: 5px;
      border-right-color: transparent;
      border-bottom-color: transparent;
      margin-right: 15px;
    }
    &:hover {
      background-color: #ecf5ff;
      > .sub-title {
        &:after {
          transform: rotate(45deg);
        }
      }
    }
  }
  .sub-item {
    top: 0;
    padding-left: 10px;
  }
  &.l-popup {
    width: 150px;
    .sub-item {
      background-color: $l-menu-background;
      border: solid 1px $l-border-color-lightgrey;
      position: absolute;
      left: 0;
      top: 100%;
    }
  }
}
</style>
