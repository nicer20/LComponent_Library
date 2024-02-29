<script setup lang="ts">
const props = defineProps({
  value: {
    type: Number,
    default: 0,
    required: true,
    validator(prop: number) {
      // 自定义校验函数
      return prop >= 0 && prop <= 100;
    },
  },
  status: {
    type: String,
    default: 'default'
  },
  strokeWidth: {
    type: Number,
    default: 6
  },
  type: {
    type: String,
    default: 'line'
  },
  textInside: {
    type: Boolean,
    default: false
  }
})
let textRight:String = 100-props.value+2+'%'


import {ref, onMounted} from 'vue'

const color = ref('#409eff')
const offset = ref(0)
const circumference = 2 * Math.PI * 45
onMounted(() => {
  setInterval(() => {
    offset.value = offset.value + 1
    if (offset.value > circumference) {
      offset.value = 0
    }
  }, 20)
})
</script>

<template>
  <div v-if="type==='line'" class="l-progress-container" :class="{'success':status==='success',
  'warning':status==='warning','exception':status==='exception','textInside':textInside}">
    <div class="l-progress" :style="{height:strokeWidth+'px'}">
      <div class="l-progress-core" :style="{ width: value + '%' }"></div>
    </div>
    <p v-if="(status==='default'&&value<100)"> {{ value }}%</p>
    <p v-else-if="(status==='default'&&value===100)">Full</p>
    <p v-else-if="(status==='success')">Success</p>
    <p v-else-if="(status==='warning')">Warning</p>
    <p v-else-if="(status==='exception')">Error</p>
  </div>
  <div v-else-if="type==='circle'" class="circle-progress">
    <svg class="circle" viewBox="0 0 100 100">
      <circle
          class="circle-background"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          stroke="#e0e0e0"
          stroke-width="10"
      />
      <circle
          class="circle-foreground"
          cx="50"
          cy="50"
          r="45"
          fill="transparent"
          :stroke="color"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="offset"
          stroke-width="10"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';

.l-progress-container {
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  .l-progress {
    margin-right: 4px;
    width: 70%;
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    background-color: $l-progress-bg;

    .l-progress-core {
      height: 100%;
      background-color: $l-default;
      transition: width 0.3s ease-in-out;
    }
  }
}

.l-progress-container.success {
  .l-progress-core {
    background-color: $l-success;
  }

  p {
    color: $l-success;
  }
}

.l-progress-container.warning {
  .l-progress-core {
    background-color: $l-warning;
  }

  p {
    color: $l-warning;
  }
}

.l-progress-container.exception {
  .l-progress-core {
    background-color: $l-exception;
  }

  p {
    color: $l-exception;
  }
}

.l-progress-container.textInside {
  .l-progress {
    width: 100%;
  }
  p {
    position: absolute;
    right: v-bind(textRight);
    color: $l-progress-textInside;
  }
}

//.circle-progress {
//  .circle {
//    transform: rotate(-90deg);
//    transform-origin: 50% 50%;
//  }
//
//  .circle-background {
//    transition: stroke-dashoffset 0.6s ease 0s;
//  }
//
//  .circle-foreground {
//    stroke-linecap: round;
//    transition: stroke-dashoffset 0.6s ease 0s;
//  }
//}
</style>

<!--<template>-->
<!--  <div class="circle-progress">-->
<!--    <svg class="circle" viewBox="0 0 100 100">-->
<!--      <circle-->
<!--          class="circle-background"-->
<!--          cx="50"-->
<!--          cy="50"-->
<!--          r="45"-->
<!--          fill="transparent"-->
<!--          stroke="#e0e0e0"-->
<!--          stroke-width="10"-->
<!--      />-->
<!--      <circle-->
<!--          class="circle-foreground"-->
<!--          cx="50"-->
<!--          cy="50"-->
<!--          r="45"-->
<!--          fill="transparent"-->
<!--          :stroke="color"-->
<!--          :stroke-dasharray="circumference"-->
<!--          :stroke-dashoffset="offset"-->
<!--          stroke-width="10"-->
<!--      />-->
<!--    </svg>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  props: {-->
<!--    progress: {-->
<!--      type: Number,-->
<!--      required: true,-->
<!--      default: 0,-->
<!--    },-->
<!--    color: {-->
<!--      type: String,-->
<!--      default: "#0074D9",-->
<!--    },-->
<!--  },-->
<!--  computed: {-->
<!--    circumference() {-->
<!--      return 2 * Math.PI * 45;-->
<!--    },-->
<!--    offset() {-->
<!--      return this.circumference * (1 - this.progress / 100);-->
<!--    },-->
<!--  },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.circle-progress {-->
<!--  width: 100px;-->
<!--  height: 100px;-->
<!--}-->

<!--.circle {-->
<!--  transform: rotate(-90deg);-->
<!--}-->

<!--.circle-background {-->
<!--  transition: stroke-dashoffset 0.3s ease;-->
<!--}-->

<!--.circle-foreground {-->
<!--  transition: stroke-dashoffset 0.3s ease;-->
<!--}-->
<!--</style>-->


