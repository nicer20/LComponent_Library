<template>
  <div class="l-textarea" v-if="props.type === 'textarea'">
    <textarea class="l-textarea__inner" :rows="props.rows" :tabindex="props.tabindex" :autocomplete="props.autocomplete"
      :placeholder="props.placeholder" :maxlength="+props.maxlength" :minlength="+props.minlength" :value="modelValue"
      @input="handleInput" @change="handleChange" ref="textareaRef" style="min-height: 31px;"></textarea>
    <span class="l-input__count" v-if="props.showWordLimit">{{ count }} / {{ props.maxlength }}</span>
  </div>

  <div class="l-input" :class="{
    'l-input-group': $slots.prepend || $slots.append,
    'l-input-group--prepend': $slots.prepend,
    'l-input-group--append': $slots.append,
    'l-input--large': props.size === 'large',
    'l-input--small': props.size === 'small',
  }" v-else>
    <div class="l-input-group__prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="l-input__wrapper" ref="inputWrapperRef" @mouseenter="handleMouseEnter" @mouseleave="handleMounseLeave">
      <input class="l-input__inner" :type="props.type" :autocomplete="props.autocomplete" :tabindex="props.tabindex"
        :placeholder="props.placeholder" :disabled="props.disabled" :maxlength="+props.maxlength"
        :minlength="+props.minlength" @focus="handleFocus" @blur="handleBlur" :value="modelValue" @input="handleInput"
        @change="handleChange" ref="inputRef" />
      <span class="l-input__suffix" v-if="(props.clearable && isHover && props.modelValue) || props.showWordLimit">
        <span class="l-input__suffix-inner">
          <span class="l-input__count" v-if="props.showWordLimit">{{ count }} / {{
            props.maxlength }}</span>
          <i class="l-icon l-input__icon l-input__clear" v-if="props.clearable">
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
      <span class="l-input__suffix" v-if="props.showPassword">
        <span class="l-input__suffix-inner">
          <i class="l-icon l-input__icon l-input__password">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" @click="handleShowPassword"
              v-if="showPassword">
              <path fill="currentColor"
                d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2zM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z">
              </path>
              <path fill="currentColor"
                d="M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z">
              </path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" @click="handleShowPassword" v-else>
              <path fill="currentColor"
                d="M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352m0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448m0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160">
              </path>
            </svg>
          </i>
        </span>
      </span>
    </div>
    <div class="l-input-group__append" v-if="$slots.append">
      <slot name="append"></slot>
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
  },
  showPassword: Boolean,
  rows: {
    type: Number
  },
  autosize: {
    type: Boolean || Object
  },
  size: {
    type: String,
  },
  maxlength: {
    type: String || Number
  },
  minlength: {
    type: String || Number
  },
  showWordLimit: Boolean
})
//控制密码展示，true隐藏，false展示
const showPassword = ref()
const $emit = defineEmits(['update:modelValue'])
//字数
let count = ref(0)
//控制悬停
const isHover = ref(false)
const inputWrapperRef = ref<HTMLInputElement | null>(null)
const inputRef = ref<HTMLInputElement | null>(null)
const textareaRef = ref<HTMLInputElement | null>(null)
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
//处理清空
const handleClear = () => {
  $emit('update:modelValue', '')
}
//处理密码展示
const handleShowPassword = () => {
  showPassword.value = !showPassword.value
  inputRef.value.type = showPassword.value ? 'password' : 'text'
}
const handleInput = ($event: Event) => {
  $emit('update:modelValue', (<HTMLInputElement>$event.target).value)
  nextTick(() => {
    const parserValue = props.parser ? props.parser(props.modelValue) : props.modelValue
    count.value = parserValue.length
    //有formatter时处理格式化
    const formatterValue = props.formatter ? props.formatter(parserValue) : parserValue

    $emit('update:modelValue', formatterValue)

    if (props.autosize) {
      //处理文本域resize
      textareaRef.value.style.height = 'auto'; // 先将高度设置为自动，以重置高度
      // 计算每行的高度
      const lineHeight = parseFloat(getComputedStyle(textareaRef.value).getPropertyValue('line-height'));
      // 计算实际高度
      const contentHeight = textareaRef.value.scrollHeight
      if (typeof (props.autosize) !== 'boolean') {
        // 获取行数
        const maxRows = props.autosize.maxRows
        const minRows = props.autosize.minRows
        // 设置 textarea 的高度，限制在最小和最大高度之间
        textareaRef.value.style.height = Math.max(minRows * lineHeight, Math.min(contentHeight, maxRows * lineHeight)) + 'px';
      }
      else {
        textareaRef.value.style.height = contentHeight + 'px'
      }
    }
  })

}

onMounted(() => {
  //一开始就格式化一次
  const formatterValue = props.formatter ? props.formatter(props.modelValue) : props.modelValue
  $emit('update:modelValue', formatterValue)
  showPassword.value = props.showPassword
  nextTick(() => {
    if (typeof (props.autosize) === 'boolean' && props.autosize === true) {
      const lineHeight = parseFloat(getComputedStyle(textareaRef!.value).getPropertyValue('line-height'));
      textareaRef.value.style.height = lineHeight + 'px'; // 先将高度设置为自动，以重置高度
    }
  })
})

</script>


<style scoped lang="scss">
* {
  box-sizing: border-box;
  scrollbar-color: #f5f7fa;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background-color: #0003;
  border-radius: 10px;
  transition: all .2s ease-in-out;
}

::-webkit-scrollbar-track {
  border-radius: 10px;
}

.l-input {
  position: relative;
  font-size: 14px;
  display: inline-flex;
  height: 30px;
  width: 100%;
  line-height: 32px;
  box-sizing: border-box;
  vertical-align: middle;


  &.l-input-group {
    display: inline-flex;
    width: 100%;
    align-items: stretch;
  }

  .l-input-group__append,
  .l-input-group__prepend {
    background-color: #f5f7fa;
    color: #909399;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 100%;
    border-radius: 4px;
    padding: 0 20px;
    white-space: nowrap;
  }

  .l-input-group__prepend {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: 1px 0 0 0 #dcdfe6 inset;
  }

  .l-input-group__append {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    box-shadow: 0 1px 0 0 #dcdfe6 inset;
  }



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

        &>:first-child {
          margin-left: 8px;
        }

        .l-input__count {
          height: 100%;
          display: inline-flex;
          align-items: center;
          color: #909399;
          font-size: 12px;
        }

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

.l-input-group--prepend {
  >.l-input__wrapper {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

.l-input-group--append {
  >.l-input__wrapper {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
}

.l-input--large {
  height: 40px;
  font-size: 14px;
}

.l-input--small {
  height: 24px;
  font-size: 12px;
}

.l-textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;

  .l-textarea__inner {
    position: relative;
    display: block;
    resize: vertical;
    padding: 5px 11px;
    line-height: 1.5;
    box-sizing: border-box;
    width: 100%;
    font-size: inherit;
    font-family: inherit;
    color: #606266;
    background-color: #ffffff;
    background-image: none;
    -webkit-appearance: none;
    box-shadow: 0 0 0 1px #dcdfe6 inset;
    border-radius: 4px;
    transition: box-shadow .2s cubic-bezier(.645, .045, .355, 1);
    border: none;

    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px #409eff inset;
    }
  }

  .l-input__count {
    color: #909399;
    background: #ffffff;
    position: absolute;
    font-size: 12px;
    line-height: 14px;
    bottom: 5px;
    right: 10px;
  }
}
</style>