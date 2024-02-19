<script  lang="ts">

import {reactive, toRefs} from "vue";
export default {
  props:{
      autoplay: {
        type: Boolean,
        default: true
      },
      duration:{
        type:Number,
        default:3000
      },
      initial:{
        type:Number,
        default:2
      },
      hasDot:{
        type:Boolean,
        default: true
      },
      hasDirector:{
        type:Boolean,
        default:true
      },
  },
  setup(props){
    const state=reactive({
      currentIndex: props.initial
    })
    return{
      ...toRefs(state)
    //   toRefs 是一种用于破坏响应式对象并将其所有属性转换为 ref 的实用方法
    //   reactive不要通过解构的方式return，不具有响应式
    //  通过 toRefs 处理，再解构返回，才具有响应式
    }
  }
}

</script>

<template>
  <div class="carousel">
    <div class="inner">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';

.carousel {
  width: 100%;
  height: 100%;

  .inner{
    width: 100%;
    height: 100%;
    position: relative;
  }
}
</style>
