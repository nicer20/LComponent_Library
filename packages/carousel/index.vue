<script lang="ts">

import { getCurrentInstance, onBeforeUnmount, onMounted, reactive, toRefs} from "vue";
import CarDot from './dot.vue'
import CarDirector from './director.vue'

export default {
  name: "Carousel",
  components: {
    CarDot,
    CarDirector
  },
  props: {
    autoplay: {
      type: Boolean,
      default: true
    },
    duration: {
      type: Number,
      default: 3000
    },
    initial: {
      type: Number,
      default: 2
    },
    hasDot: {
      type: Boolean,
      default: true
    },
    hasDirector: {
      type: Boolean,
      default: true
    },
    dotBgColor: String,
    vertical: {
      Boolean,
      default: false
    }
  },
  setup(props) {
    // 当前组件的实例
    const instance = getCurrentInstance()

    const state = reactive({//当前图片
      currentIndex: props.initial,
      itemLen: 0, // 图片个数
      vertical: props.vertical //轮播方向（垂直）
    })

    let t: number | undefined

    const autoPlay = () => {//轮播时间
      if (props.autoplay) {
        t = setInterval(() => {
          setIndex('next')
        }, props.duration)
      }
    }
    // 轮播前后翻页
    const setIndex = (dir: string) => {
      switch (dir) {
        case 'next':
          state.currentIndex += 1
          if (state.currentIndex === state.itemLen) {
            state.currentIndex = 0
          }
          break
        case 'prev'://反向
          state.currentIndex -= 1
          if (state.currentIndex === -1) {
            state.currentIndex = state.itemLen - 1
          }
          break
        default:
          break
      }
    }
    // 圆点指示器
    const dotClick = (index: number) => {
      state.currentIndex = index
    }
    // 方向指示器
    const dirClick = (dir: string) => {
      setIndex(dir)
    }
    // 鼠标进入，停止轮播
    const mouseEnter = () => {
      clearInterval(t)
      t = undefined
    }
    const mouseLeave = () => {
      autoPlay()
    }

    onMounted(() => {
      let len: any | undefined = instance?.slots.default()[0].children?.length
      state.itemLen = (len) ? len : 0
      autoPlay()
    })
    onBeforeUnmount(() => {// 组件移除 清除计时器
      clearInterval(t)
      t = undefined
    })

    return {
      ...toRefs(state),
      dotClick,
      mouseEnter,
      mouseLeave,
      dirClick
      //   toRefs 是一种用于破坏响应式对象并将其所有属性转换为 ref 的实用方法
      //   reactive不要通过解构的方式return，不具有响应式
      //  通过 toRefs 处理，再解构返回，才具有响应式
    }
  }
}

</script>

<template>
  <div class="carousel"
       @mouseenter="mouseEnter"
       @mouseleave="mouseLeave">
    <div class="inner">
      <slot></slot>
      <CarDot :has-dot="hasDot"
              :itemLen="itemLen"
              :currentIndex="currentIndex"
              :dotBgColor="dotBgColor"
              @dotClick="dotClick"></CarDot>
      <CarDirector dir="prev"
                   @dirClick="dirClick"></CarDirector>
      <CarDirector dir="next"
                   @dirClick="dirClick"></CarDirector>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';

.carousel {
  width: 100%;
  height: 100%;

  .inner {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
}
</style>
