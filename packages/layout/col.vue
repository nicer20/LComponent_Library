<template>
  <div class="l-col" ref="colRef">
    <slot></slot>
  </div>
</template>


<script setup lang='ts'>
import { ref, computed, onMounted, onBeforeUnmount, inject } from 'vue';
const colRef = ref<HTMLElement | null>(null)
const gutter = inject('gutter'); // 注入 gutter
let span = ref<Number>()//存储span
const props = defineProps({
  span: {
    type: Number,
    default: 0
  },
  offset: {
    type: Number,
  },
  xs: {
    type: Number,
  },
  sm: {
    type: Number,
  },
  md: {
    type: Number,
  },
  lg: {
    type: Number,
  },
  xl: {
    type: Number,
  }
})
//响应式处理函数
const updateLayout = () => {
  if (props.xs || props.sm || props.md || props.lg || props.xl) {
    if (window.innerWidth <= 768) {
      span.value = props.xs
    } else if (window.innerWidth <= 991) {
      span.value = props.sm
    } else if (window.innerWidth <= 1199) {
      span.value = props.md
    } else if (window.innerWidth <= 1919) {
      span.value = props.lg
    } else {
      span.value = props.xl
    }
    console.log(window.innerWidth);
  }
};
//计算属性(添加符号)
const styleComputed = computed(() => {
  return {
    spanPercent: `${span.value / 24 * 100}%`,
    gutterPx: `${gutter / 2}px`
  }
})
//挂载
onMounted(() => {
  span.value = props.span
  colRef.value?.classList.add(`l-col-${span.value}`)
  if (gutter) {
    colRef.value?.classList.add('is-guttered')
  }
  if (props.offset) {
    colRef.value.classList.add(`l-col-offset-${props.offset}`)
    colRef.value.style.marginLeft = `${props.offset / 24 * 100}%`
  }
  window.addEventListener('resize', updateLayout);
  updateLayout();
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLayout);
});
</script>


<style scoped lang="scss">
.l-col {
  flex: 0 0 v-bind('styleComputed.spanPercent');
  border-radius: 4px;
}

[class*=l-col-] {
  box-sizing: border-box;
}

.is-guttered {
  padding: 0 v-bind('styleComputed.gutterPx');
}
</style>