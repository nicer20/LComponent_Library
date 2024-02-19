<script lang="ts">
import {getCurrentInstance, reactive, toRefs} from "vue";

export default {
  name: 'l-carousel-item',

  setup() {
    const instance = getCurrentInstance()
    const state = reactive({
      selfIndex: instance?.vnode.key,
      currentIndex: instance?.parent.ctx.currentIndex
    })
    console.log(instance)
    return {
      ...toRefs(state)
    }
  }
}
</script>

<template>
  <div class="carousel-item" v-if="currentIndex===selfIndex">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
