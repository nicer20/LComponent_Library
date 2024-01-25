<template>
  <div class="l-scrollbar-container" ref="containerRef" @wheel="handleScroll">
    <div class="l-scrollbar-content" ref="contentRef">
      <slot></slot>
    </div>
    <div class="l-scrollbar-track">
      <div class="l-scrollbar-thumb" @mousedown="startDrag" ref="thumbRef">
      </div>
    </div>
  </div>
</template> 
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
//获取容器实例 
const containerRef = ref<HTMLElement | null>(null)
//获取内容实例 
const contentRef = ref<HTMLElement | null>(null)
const thumbRef = ref<HTMLElement | null>(null)
//是否拖拽 
const isDragging = ref(false)
//拖拽位置 
const dragOffset = ref(0)
//高度参数 
const containerHeight = ref(0)
const contentHeight = ref(0)
const thumbHeight = ref(0)
const scrollRatio = ref(0)
//更新高度 
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
  scrollRatio.value = (contentHeight.value - containerHeight.value) / (contentHeight.value - thumbHeight.value)

}
//拖拽开始 
const startDrag = (event: MouseEvent) => {
  //置1 
  isDragging.value = true
  //获取拖拽位置,滑块滑动的距离(相对视口)
  dragOffset.value = event.clientY - containerRef.value.getBoundingClientRect().top - thumbHeight.value
  document.addEventListener('mousemove', handleDrag)
  document.addEventListener('mouseup', stopDrag)
}

const handleDrag = (event: MouseEvent) => {
  if (isDragging.value) {
    //鼠标偏移量与条偏移量
    const newScrollTop = (event.clientY - containerRef.value.getBoundingClientRect().top - dragOffset.value) / containerHeight.value * (contentHeight.value - thumbHeight.value) * scrollRatio.value
    containerRef.value.scrollTop = newScrollTop
    //限制上下界
    const thumbTrans = Math.max((Math.min((newScrollTop / scrollRatio.value), (contentHeight.value - thumbHeight.value))), 0)
    /*  const thumbOriginTrans = thumbRef.value.style.transform.slice(11, 17)
     console.log(thumbOriginTrans) */
    //更新thumb 
    thumbRef.value.style.transform = `translateY(${thumbTrans}px)`
  }
}
const stopDrag = () => {
  //置0 
  isDragging.value = false //溢出 
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
}
const handleScroll = (event: WheelEvent) => {
  const delta = Math.max(-1, Math.min(1, event.deltaY))
  containerRef.value.scrollTop += delta * 40
  const newScrollTop = containerRef.value.scrollTop
  const thumbTrans = Math.max((Math.min((newScrollTop / scrollRatio.value), (contentHeight.value - thumbHeight.value))), 0)
  //更新thumb
  thumbRef.value.style.transform = `translateY(${thumbTrans}px)`
  event.preventDefault()
}
onMounted(() => {
  updateScrollbarHeight()
})
onUnmounted(() => {
  document.removeEventListener('mousemove', handleDrag)
  document.removeEventListener('mouseup', stopDrag)
})
//统一计算属性 
const scrollStyle = computed(() => {
  const scrollTop = containerRef.value?.scrollTop || 0;
  const thumbTop = scrollTop / scrollRatio.value;
  return {
    thumbHeight: `${thumbHeight.value}px`,
    thumbTransform: `translateY(${thumbTop}px)`,
    contentHeight: `${containerRef.value?.scrollHeight}px`
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
<style scoped lang="scss"> ::-webkit-scrollbar {
   //.page可以更换为任意元素 
   display: none;
 }

 .l-scrollbar-container {
   position: relative;
   overflow: hidden;
   width: 100%;
   height: v-bind('props.height');

   .l-scrollbar-content {
     height: max-content;
     overflow-y: scroll;
   }

   .l-scrollbar-track {
     position: absolute;
     top: 2px;
     right: 2px;
     width: 8px;
     height: v-bind('scrollStyle.contentHeight');
     background-color: #f1f1f1;
     border-radius: 4px;
     opacity: 0;
     transition: opacity 0.3s;

     .l-scrollbar-thumb {
       position: absolute;
       top: 2px;
       width: 100%;
       height: v-bind('scrollStyle.thumbHeight');
       border-radius: 5px;
       background: #888;
       transform-origin: top;
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
 }

 .l-scrollbar-container:hover .l-scrollbar-track {
   opacity: 0.5;
 }
</style>