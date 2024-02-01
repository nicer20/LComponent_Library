<template>
  <div class="l-scrollbar-container" ref="containerRef" @wheel="handleScroll">
    <div class="l-scrollbar-content" ref="contentRef">
      <slot ref="slotRef"></slot>
    </div>
    <div class="l-scrollbar-track is-horizon" ref="trackRef">
      <div class="l-scrollbar-thumb" @mousedown="startDrag" ref="horizonThumbRef">
      </div>
    </div>
    <div class="l-scrollbar-track is-vertical" ref="trackRef">
      <div class="l-scrollbar-thumb" @mousedown="startDrag" ref="verticalThumbRef">
      </div>
    </div>
  </div>
</template> 
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
//获取容器实例 
const containerRef = ref<HTMLElement | null>(null)
//获取内容实例 
const contentRef = ref<HTMLElement | null>(null)
const horizonThumbRef = ref<HTMLElement | null>(null)
const verticalThumbRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
// 滚动条水平垂直判定(false水平，true垂直)
let trackFlag = ref(true)
//是否拖拽 
const isDragging = ref(false)
//拖拽位置 
const dragOffset = ref(0)
//高度参数 
const containerHeight = ref(0)
const contentHeight = ref(0)
const thumbHeight = ref(0)
const scrollRatio = ref(0)
//宽度参数
const containerWidth = ref(0)
const contentWidth = ref(0)
const thumbWidth = ref(0)


//更新高度(垂直)
const updateScrollbarHeight = () => {
  //获取容器高度 
  containerHeight.value = containerRef.value?.clientHeight || 0
  // console.log(containerHeight.value)//400
  // 获取元素高度 
  contentHeight.value = contentRef.value?.scrollHeight || 0
  // console.log(contentHeight.value)//1210
  //获取thumb高度 
  thumbHeight.value = (containerHeight.value / contentHeight.value) * containerHeight.value
  // console.log(thumbHeight.value)//132
  //thumb相对于滚动条的滚动率 
  scrollRatio.value = (contentHeight.value - containerHeight.value) / (containerHeight.value - thumbHeight.value)
}
//更新长度(水平)
const updateScrollbarLeft = () => {
  //获取容器宽度
  containerWidth.value = containerRef.value?.clientWidth || 0
  // 获取元素宽度
  contentWidth.value = contentRef.value?.scrollWidth || 0
  //获取thumb宽度
  thumbWidth.value = (containerWidth.value / contentWidth.value) * containerWidth.value
  //thumb相对于滚动条的滚动率 
  scrollRatio.value = (contentWidth.value - containerWidth.value) / (containerWidth.value - thumbWidth.value)
}
//拖拽开始 
const startDrag = (event: MouseEvent) => {
  //置1 
  isDragging.value = true
  event.preventDefault()
  //获取拖拽位置,滑块滑动的距离(相对视口)
  //垂直时
  if (trackFlag.value) {
    dragOffset.value = event.clientY - containerRef.value.getBoundingClientRect().top - thumbHeight.value
  } else if (!trackFlag.value) {
    //水平时
    dragOffset.value = event.clientX - containerRef.value.getBoundingClientRect().left - thumbWidth.value
  }
  document.addEventListener('mousemove', handleDrag)
  document.addEventListener('mouseup', stopDrag)
}
//拖拽处理
const handleDrag = (event: MouseEvent) => {
  if (isDragging.value) {
    //垂直时
    if (trackFlag.value) {
      //鼠标偏移量与条偏移量
      const newScrollTop = (event.clientY - containerRef.value.getBoundingClientRect().top - dragOffset.value) / containerHeight.value * (containerHeight.value - thumbHeight.value) * scrollRatio.value
      containerRef.value.scrollTop = Math.min(newScrollTop, (contentHeight.value - containerHeight.value))
      //滑轨相对不动
      //这里要把800改成最大高度
      trackRef.value.style.top = `${Math.max(Math.min(newScrollTop, (contentHeight.value - containerHeight.value)), 0)}px`
      //限制上下界
      const thumbTrans = Math.max((Math.min((newScrollTop / scrollRatio.value), (containerHeight.value - thumbHeight.value))), 0)
      /*  const thumbOriginTrans = thumbRef.value.style.transform.slice(11, 17)
       console.log(thumbOriginTrans) */
      //更新thumb 
      verticalThumbRef.value.style.transform = `translateY(${thumbTrans}px)`
    } else if (!trackFlag.value) {
      //水平时
      //鼠标偏移量与条偏移量
      const newScrollLeft = (event.clientX - containerRef.value.getBoundingClientRect().left - dragOffset.value) / containerWidth.value * (containerWidth.value - thumbWidth.value) * scrollRatio.value
      // console.log(newScrollLeft);
      contentRef.value.scrollLeft = newScrollLeft
      //滑轨相对不动
      //这里要把800改成最大高度
      trackRef.value.style.left = `${Math.max(Math.min(newScrollLeft, (contentWidth.value - containerWidth.value)), 0)}px`
      //限制上下界
      const thumbTrans = Math.max((Math.min((newScrollLeft / scrollRatio.value), (containerWidth.value - thumbWidth.value))), 0)
      /*  const thumbOriginTrans = thumbRef.value.style.transform.slice(11, 17)
       console.log(thumbOriginTrans) */
      //更新thumb 
      horizonThumbRef.value.style.transform = `translateX(${thumbTrans}px)`
    }
  }
}
//停止拖拽
const stopDrag = () => {
  //置0 
  isDragging.value = false //溢出 
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
}
//滚轮处理
const handleScroll = (event: WheelEvent) => {
  // 只对垂直生效
  if (trackFlag.value) {
    const delta = Math.max(-1, Math.min(1, event.deltaY))
    containerRef.value.scrollTop = Math.min((containerRef.value.scrollTop + delta * 40), (contentHeight.value - containerHeight.value))
    const newScrollTop = containerRef.value.scrollTop
    const thumbTrans = Math.max((Math.min((newScrollTop / scrollRatio.value), (containerHeight.value - thumbHeight.value))), 0)
    //滑轨相对不动
    trackRef.value.style.top = `${Math.min(newScrollTop, (contentHeight.value - containerHeight.value))}px`
    //更新thumb
    verticalThumbRef.value.style.transform = `translateY(${thumbTrans}px)`
    event.preventDefault()
  }
}
//挂载处理
onMounted(() => {
  //水平垂直自动判断
  trackFlag.value = contentRef.value.scrollWidth > contentRef.value.offsetWidth ? false : true
  if (trackFlag.value) {
    //垂直
    updateScrollbarHeight()
  } else if (!trackFlag.value) {
    //水平
    updateScrollbarLeft()
  }
  // console.log(trackFlag.value);
})
//卸载处理
onUnmounted(() => {
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
})

const flagStyle = computed(() => {
  return {
    //true为垂直
    verticalFlag: trackFlag.value ? 'block' : 'none',
    //false为水平
    horizonFlag: trackFlag.value ? 'none' : 'block'
  }
})
//统一计算属性 
const scrollStyle = computed(() => {
  const scrollTop = containerRef.value?.scrollTop || 0;
  const thumbTop = scrollTop / scrollRatio.value;
  return {
    thumbHeight: `${thumbHeight.value}px`,
    thumbWidth: `${thumbWidth.value}px`,
    thumbTransform: `translateY(${thumbTop}px)`,
    containerHeight: `${containerRef.value?.offsetHeight}px`,
    containerWidth: `${containerRef.value?.offsetWidth}px`
  };
});
// 接收 height 属性 
const props = defineProps({
  height: {
    type: String,
    default: '100%',
  },
})
</script> 
<style scoped lang="scss"> .l-scrollbar-container {
   position: relative;
   overflow: hidden;
   width: 100%;
   height: v-bind('props.height');

   .l-scrollbar-content {
     height: max-content;
     overflow-y: scroll;
     overflow-x: scroll;
   }


   .l-scrollbar-track {
     position: absolute;
     background-color: #f1f1f1;
     border-radius: 4px;
     opacity: 0;
     transition: opacity 0.3s;

     &.is-vertical {
       display: v-bind('flagStyle.verticalFlag');
       top: 2px;
       right: 2px;
       width: 8px;
       height: v-bind('scrollStyle.containerWidth');

       .l-scrollbar-thumb {
         top: 2px;
         width: 100%;
         height: v-bind('scrollStyle.thumbHeight');
         transform-origin: top;
       }
     }

     &.is-horizon {
       display: v-bind('flagStyle.horizonFlag');
       bottom: 2px;
       left: 2px;
       height: 8px;
       width: v-bind('scrollStyle.containerWidth');

       .l-scrollbar-thumb {
         left: 2px;
         width: v-bind('scrollStyle.thumbWidth');
         height: 100%;
         transform-origin: left;
       }
     }

     .l-scrollbar-thumb {
       position: relative;
       border-radius: 5px;
       background: #888;
       cursor: pointer;
       transition: background-color 0.3s, transform 0.3s;

       .l-scrollbar-thumb:hover {
         background-color: #555;
       }

       .l-scrollbar-thumb:active {
         background-color: #333;
       }
     }
   }

   ::-webkit-scrollbar {
     //.page可以更换为任意元素 
     display: none;
   }
 }

 .l-scrollbar-container:hover .l-scrollbar-track {
   opacity: 0.5;
 }
</style>