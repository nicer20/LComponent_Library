<template>
  <div class="l-input">
    <div class="l-input__wrapper" ref="inputWrapperRef">
      <input class="l-input__inner" :type="props.type" :autocomplete="props.autocomplete" :tabindex="props.tabindex"
        :placeholder="props.placeholder" :disabled="props.disabled" @focus="handleFocus" @blur="handleBlur" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
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
  disabled: Boolean
})

const inputWrapperRef = ref<HTMLInputElement | null>(null)
const handleFocus = () => {
  inputWrapperRef.value.classList.add('is-focus')
}
const handleBlur = () => {
  inputWrapperRef.value.classList.remove('is-focus')
}
</script>


<style scoped>
.l-input {
  position: relative;
  font-size: 14px;
  display: inline-flex;
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
  }

}
</style>