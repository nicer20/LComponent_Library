<template>
  <div class="l-card" ref="cardRef">
    <div class="l-card__header">
      <slot name="header"></slot>
    </div>
    <div class="l-card__body">
      <slot></slot>
      <slot name="body"></slot>
    </div>
    <div class="l-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps({
  shadow: {
    type: String,
    default: 'always',
  },
})

let cardRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (props.shadow === 'always') {
    if (cardRef.value) {
      cardRef.value.classList.add('is-always-shadow')
    }
  }
})
</script>


<style scoped lang="scss">
.l-card {
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  background-color: #ffffff;
  color: #303133;

  .l-card__header {
    border-bottom: 1px solid #e4e7ed;
    padding: 20px;
  }

  .l-card__body {
    padding: 20px;
  }

  .l-card__footer {
    padding: 20px;
    border-top: 1px solid #e4e7ed;
  }
}

.is-always-shadow {
  box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
}
</style>