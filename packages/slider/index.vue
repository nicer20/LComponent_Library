<template>
  <div class="l-slider" :class="lClass">
    <!-- <div class="l-slider-track" id="track"></div> -->
    <!-- <div class="l-slider-button" id="thumb" :style="{ left: thumbPosition }"></div> -->
    <input
      class="range"
      type="range"
      :min="props.min"
      :max="props.max"
      :step="props.step"
      :disabled="props.disabled"
      v-model="sliderValue"
      @input="handleSliderChange"
    />
    <span class="value">{{ sliderValue }}</span>
    <div class="l-slider-ticks" v-if="props.showStops">
      <span v-for="tick in ticks" :key="tick" class="slider-tick">{{ tick }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue'

const props = defineProps({
  mode: {
    type: String,
    default: 'horizonal'
  },
  value: {
    type: Number,
    required: true
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    type: Number
  },
  disabled: Boolean,
  showStops: Boolean
})

const lClass = computed(() => {
  return [
    props.disabled ? 'l-slider-disabled' : '',
    props.mode === 'vertical' ? 'l-slider-vertical' : 'l-slider-horizonal'
  ]
})

const ticks = computed(() => {
  if (typeof props.step === 'undefined') {
    return []
  }
  const defaultStep = 1
  const numTicks = props.max / (props.step || defaultStep) // 计算间断点的数量
  return Array.from({ length: numTicks + 1 }, (_, index) => index * (props.step || defaultStep)) // 生成间断点数组
})
let sliderValue = ref(props.value)
let activeBgPercent = ref('')
onMounted(() => {
  sliderValue.value = props.value
  activeBgPercent.value = (sliderValue.value / (props.max - props.min)) * 100 + '%'
})
// const thumbPosition = ref('0%')
// let isDragging = false
const emit = defineEmits(['updatevalue'])

// let track = document.getElementById('track')
// let thumb = document.getElementById('thumb')

// const startDrag = () => {
//   isDragging = true
//   // 添加鼠标移动和触摸移动的事件监听
//   document.addEventListener('mousemove', handleDrag)
//   document.addEventListener('touchmove', handleDrag, { passive: false })
//   // 添加鼠标释放和触摸结束的事件监听
//   document.addEventListener('mouseup', stopDrag)
//   document.addEventListener('touchend', stopDrag)
// }

// const handleDrag = (event: any) => {
//   if (!isDragging) return

//   let trackWidth = 0
//   let thumbWidth = 0
//   if (track) trackWidth = track.offsetWidth
//   if (thumb) thumbWidth = thumb.offsetWidth
//   let sliderWidth = trackWidth - thumbWidth
//   let x = event.clientX || event.touches[0].clientX

//   let trackLeft = 0
//   if (track) trackLeft = track.getBoundingClientRect().left
//   x = Math.max(x - trackLeft, 0)
//   x = Math.min(x, trackWidth)

//   const percent = (x / sliderWidth) * 100
//   thumbPosition.value = `${percent}%`
//   sliderValue.value = (percent / 100) * (props.max - props.min) + props.min
//   emit('updatevalue', sliderValue.value)
// }
// const stopDrag = () => {
//   isDragging = false

//   // 移除鼠标移动和触摸移动的事件监听
//   document.removeEventListener('mousemove', handleDrag)
//   document.removeEventListener('touchmove', handleDrag)

//   // 移除鼠标释放和触摸结束的事件监听
//   document.removeEventListener('mouseup', stopDrag)
//   document.removeEventListener('touchend', stopDrag)
// }

const handleSliderChange = (event: any) => {
  if (props.disabled) {
    return // 如果滑块被禁用，则不更新值
  }
  sliderValue.value = parseFloat(event.target.value)
  activeBgPercent.value = (sliderValue.value / (props.max - props.min)) * 100 + '%'
  emit('updatevalue', sliderValue.value)
}
</script>
<style scoped lang="scss">
@import '../style/variable.scss';
.l-slider {
  display: flex;
  position: relative;
  width: 50%;
  align-items: center;
  .l-slider-disabled {
    cursor: default;
  }

  .l-slider-ticks {
    display: flex;
    position: absolute;
    height: 1px;
    left: 0;
    justify-content: space-between;
    overflow: visible;
    white-space: nowrap;
    width: calc(100% - 50px);
    margin-left: 8px;
    margin-top: -20px;
    .slider-tick {
      position: relative;
      padding: 0;
      bottom: -20px;
      color: #333;
      font-size: 12px;
    }
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    // background: $l-slider-background;
    background: linear-gradient($l-color-primary, $l-color-primary) no-repeat $l-slider-background;
    background-size: v-bind(activeBgPercent) 100%;
    // background: linear-gradient(75deg, #f3f3f3, $l-slider-background);
    border-radius: 5px;
    height: 6px;
    width: 100%;
    outline: none;
    box-sizing: border-box;
    margin-right: 10px;
    box-shadow: 0 0 1px;
  }
  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 16px;
    height: 16px;
    background: $l-menu-background;
    border-radius: 8px;
    border: solid 2px $l-color-primary;
    transition: 0.2s;
    cursor: pointer;
  }
  input[type='range']:hover::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    cursor: grab;
  }
  input[type='range']:active::-webkit-slider-thumb {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    cursor: grabbing;
  }
  input[type='range']:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .value {
    width: 40px;
    background-color: $l-slider-background;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    position: relative;
  }
  .value::before {
    content: '';
    display: block;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    border-right: 4px solid $l-slider-background;
    position: absolute;
    top: calc(50% - 4px);
    left: -4px;
  }
}
.l-slider-vertical {
  display: flex;
  align-items: center;
  transform: rotate(-90deg);
  appearance: slider-vertical; /* 添加滑块样式，可根据需要调整或省略 */
  .value {
    writing-mode: vertical-lr;
    width: 20px;
    height: 40px;
  }
  .slider-tick {
    writing-mode: vertical-lr;
  }
}
</style>
