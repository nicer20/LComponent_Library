<template>
  <div class="l-input">
    <div class="l-input__wrapper" ref="inputWrapperRef" @mouseenter="handleMouseEnter" @mouseleave="handleMounseLeave">
      <input class="l-input__inner" :type="props.type" :autocomplete="props.autocomplete" :tabindex="props.tabindex"
        :placeholder="props.placeholder" :disabled="props.disabled" @focus="handleFocus" @blur="handleBlur"
        :value="modelValue" @input="handleInput" @change="handleChange" />
      <span class="l-input__suffix" v-if="props.clearable && isHover && props.modelValue">
        <span class="l-input__suffix-inner">
          <i class="l-icon l-input__icon l-input__clear">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" @click="handleClear">
              <path fill="currentColor"
                d="m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248z">
              </path>
              <path fill="currentColor"
                d="M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896"></path>
            </svg>
          </i>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  autocomplete: {
    type: String,
    default: 'off'
  },
  tabindex: {
    type: Number,
    default: 0
  },
  placeholder: {
    type: String,
    default: 'Please input'
  },
  disabled: Boolean,
  clearable: Boolean,
  modelValue: {
    type: String
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  }
})
const $emit = defineEmits(['update:modelValue'])
//控制悬停
const isHover = ref(false)
const inputWrapperRef = ref<HTMLInputElement | null>(null)
//元素聚焦处理
const handleFocus = () => {
  inputWrapperRef.value.classList.add('is-focus')
}
//元素失焦处理
const handleBlur = () => {
  inputWrapperRef.value.classList.remove('is-focus')
}
//鼠标移入处理
const handleMouseEnter = () => {
  isHover.value = true
}
//鼠标移出处理
const handleMounseLeave = () => {
  isHover.value = false
}
const handleClear = () => {
  $emit('update:modelValue', '')
}
const handleInput = ($event: Event) => {
  $emit('update:modelValue', (<HTMLInputElement>$event.target).value)
  nextTick(() => {
    const parserValue = props.parser ? props.parser(props.modelValue) : props.modelValue
    //有formatter时处理格式化
    const formatterValue = props.formatter ? props.formatter(parserValue) : parserValue
    $emit('update:modelValue', formatterValue)
  })
}
onMounted(() => {
  //一开始就格式化一次
  const formatterValue = props.formatter ? props.formatter(props.modelValue) : props.modelValue
  $emit('update:modelValue', formatterValue)
})

</script>


<style scoped>
.l-input {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  height: 30px;
  width: 100%;
  line-height: 32px;
  box-sizing: border-box;
  vertical-align: middle;


  .l-input__wrapper {
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 1px 11px;
    background-color: #ffffff;
    background-image: none;
    border-radius: 4px;
    cursor: text;
    transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
    transform: translateZ(0);
    box-shadow: 0 0 0 1px #dcdfe6 inset;

    &:hover {
      box-shadow: 0 0 0 1px #c0c4cc inset;
    }

    &.is-focus {
      box-shadow: 0 0 0 1px #409eff inset;
    }

    .l-input__inner {
      width: 100%;
      flex-grow: 1;
      -webkit-appearance: none;
      color: #606266;
      font-size: inherit;
      height: 30px;
      line-height: 30px;
      padding: 0;
      outline: none;
      border: none;
      background: none;
      box-sizing: border-box;

      &:disabled {
        color: #a8abb2;
        -webkit-text-fill-color: #a8abb2;
        cursor: not-allowed;
      }
    }

    .l-input__suffix {
      display: inline-flex;
      white-space: nowrap;
      flex-shrink: 0;
      flex-wrap: nowrap;
      height: 100%;
      text-align: center;
      color: #a8abb2;
      transition: all .3s;
      pointer-events: none;

      .l-input__suffix-inner {
        pointer-events: all;
        display: inline-flex;
        align-items: center;
        justify-content: center;

        .l-icon {
          height: inherit;
          line-height: inherit;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all .3s;
          margin-left: 8px;

          svg {
            height: 1em;
            width: 1em;
            cursor: pointer;
          }

          l-input__clear {
            &:hover {
              color: #a8abb2
            }
          }
        }
      }
    }
  }
}
</style>