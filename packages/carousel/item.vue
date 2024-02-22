<script lang="ts">
import {computed, getCurrentInstance, reactive, toRefs, watch} from "vue";

export default {
  name: 'l-carousel-item',

  setup() {
    const instance = getCurrentInstance()
    const state = reactive({
      selfIndex: instance?.vnode.key,
      currentIndex: instance?.parent.ctx.currentIndex,
      vertical:instance?.parent.ctx.vertical
    })
    watch(() => {
      return instance?.parent.ctx.currentIndex
    }, (value) => {
      state.currentIndex = value
    })

    const lClass = computed(() => {
      return state.vertical ? 'vertical' : 'horizontal'
    })

    return {
      ...toRefs(state),
      lClass
    }
  }
}
</script>

<template>
  <transition :name = lClass>
    <div class="carousel-item"  v-if="currentIndex===selfIndex">
      <slot></slot>
    </div>
  </transition>
</template>

<style scoped lang="scss">
.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
//水平过渡效果
.horizontal-enter-active,
.horizontal-leave-active{
  transition: all .3s linear;
}
.horizontal-enter-active{
  transform: translateX(100%);
}
.horizontal-enter-to{
  transform: translateX(0);
}
.horizontal-leave-active{
  transform: translateX(0);
}
.horizontal-leave-to{
  transform: translateX(-100%);
}
//垂直过渡效果
.vertical-enter-active,
.vertical-leave-active{
  transition: all .3s linear;
}
.vertical-enter-active{
  transform: translateY(100%);
}
.vertical-enter-to{
  transform: translateY(0);
}
.vertical-leave-active{
  transform: translateY(0);
}
.vertical-leave-to{
  transform: translateY(-100%);
}
</style>
