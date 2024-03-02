<script setup lang="ts">
import types from "./types";
import {computed} from "vue";
const props=defineProps({
  type:{
    type:String,
    default:types.MESSAGE,
    validator:(val:string)=>{
      return Object.values(types).includes(val)
    }
  },
  message:{
    type:String,
    default:'message.'
  },
  duration:{
    type:Number,
    default:3000
  }
})

const lClass=computed(()=>{
  return ['l-message',`l-message-${props.type}`]
})
</script>

<template>
  <transition name="l-message-fade">
    <div :class="lClass">
      {{message}}
    </div>
  </transition>
</template>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';
.l-message{
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  border-radius: 5px;
  z-index: 9999;

  &-message{
    background-color: $l-message-message-bg;
    color:$l-message-message ;
  }
  &-success{
    background-color: $l-message-success-bg;
    color:$l-message-success ;
  }
  &-warning{
    background-color: $l-message-warning-bg;
    color:$l-message-warning ;
  }
  &-error{
    background-color: $l-message-error-bg;
    color:$l-message-error ;
  }
}

</style>
