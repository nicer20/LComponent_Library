<script setup lang="ts">

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    required:true,
    validator(prop:number) {
      // 自定义校验函数
      return prop >=0&&prop<=100;
    },
  },
  status:{
    type: String,
    default: 'default'
  },
})
</script>

<template>
  <div class="l-progress-container" :class="{'success':status==='success',
  'warning':status==='warning','exception':status==='exception'}">
    <div class="l-progress">
      <div class="l-progress-core" :style="{ width: value + '%' }" ></div>
    </div>
    <p v-if="(status==='default'&&value<100)"> {{value}}%</p>
    <p v-else-if="(status==='default'&&value===100)">full</p>
    <p v-else-if="(status==='success')">success</p>
    <p v-else-if="(status==='warning')">warning</p>
    <p v-else-if="(status==='exception')">error</p>
  </div>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';
.l-progress-container{
  width: 100%;
  display: flex;
  align-items: center;
  .l-progress{
    margin-right: 4px;
    width: 70%;
    height: 6px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    background-color: $l-progress-bg;
    .l-progress-core{
      height: 100%;
      background-color: $l-default;
      transition: width 0.3s ease-in-out;
    }
  }
}

.l-progress-container.success{
  .l-progress-core{
    background-color: $l-success;
  }
  p{
    color:$l-success;
  }
}
.l-progress-container.warning{
  .l-progress-core{
    background-color: $l-warning;
  }
  p{
    color:$l-warning;
  }
}
.l-progress-container.exception{
  .l-progress-core{
    background-color: $l-exception;
  }
  p{
    color:$l-exception;
  }
}

</style>
