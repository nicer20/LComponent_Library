<script lang="ts">
import {getCurrentInstance, reactive, toRefs, watch} from "vue";

export default {
  name: 'l-carousel-item',

  setup() {
    const instance = getCurrentInstance()
    const state = reactive({
      selfIndex: instance?.vnode.key,
      currentIndex: instance?.parent.ctx.currentIndex
    })

    watch(() => {
      return instance?.parent.ctx.currentIndex
    }, (value) => {
      state.currentIndex = value
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<template>
  <transition>
    <div class="carousel-item" v-if="currentIndex===selfIndex">
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
//过渡效果
.v-enter-active,
.v-leave-active{
  transition: all .3s linear;
}
.v-enter-active{
  transform: translateX(100%);
}
.v-enter-to{
  transform: translateX(0);
}
.v-leave-active{
  transform: translateX(0);
}
.v-leave-to{
  transform: translateX(-100%);
}
</style>
