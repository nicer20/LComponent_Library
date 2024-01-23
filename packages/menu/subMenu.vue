<template>
  <ul class="l-sub-menu" @click.stop="changeShowSub">
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
import { ref, computed } from 'vue'
const isShow = ref(false)

// const showSub = () => {
//   isShow.value = true
// }
// const hideSub = () => {
//   isShow.value = false
// }
const changeShowSub = () => {
  isShow.value = !isShow.value
}
//菜单图标点击旋转
const iconRotate = computed(() => {
  return isShow.value ? '225deg' : '45deg'
})
</script>
<style scoped lang="scss">
@import '../style/variable.scss';
.l-sub-menu {
  position: relative;
  cursor: pointer;
  padding-left: 0;
  font-size: large;
  .sub-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
      > .sub-title {
        &:after {
          transform: rotate(45deg);
        }
      }
    }
  }
  .sub-item {
    background: snow;
    top: 0;
    padding-left: 10px;
  }
}
</style>
