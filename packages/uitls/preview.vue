<template>
  <div class="previewcase">
    <button style="border: hidden; background: #fff" @click="changeShow">展示代码</button>
    <div v-show="showCode">
      <pre class="language-html">{{ sourceCode }}</pre>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, ref } from 'vue'
import Prism from 'prismjs'
import '@/assets/prism.css'

let showCode = ref(false)
const changeShow = () => {
  showCode.value = !showCode.value
}

const props = defineProps({
  // 组件名称
  compName: {
    type: String,
    default: '',
    required: true
  },
  //显示代码的文件
  demoName: {
    type: String,
    default: '',
    required: true
  }
})

let sourceCode = ref('')
const getCode = async () => {
  sourceCode.value = (
    await import(`../../packages/${props.compName}/doc/${props.demoName}.vue?raw`)
  ).default
}

onMounted(async () => {
  getCode()
  await nextTick()
  // 确保在源码都渲染好了以后再执行高亮
  Prism.highlightAll()
})
</script>

<style lang="scss"></style>
