<template>
  <div class="l-row">
    <l-button type="primary" @click="open1">message</l-button>
    <l-button type="success" @click="open2">success</l-button>
    <l-button type="info" @click="open3">warning</l-button>
    <l-button type="danger" @click="open4">error</l-button>
  </div>

  <ll-message
     type="warning"
     message="This is a test message."
     :duration="3000"
  ></ll-message>
</template>

<script lang="ts" setup>
import lMessage,{types} from '../message'

const open1 = () => {
  lMessage('This is a message.')
}
const open2 = () => {
  lMessage({
    message: 'Congrats, this is a success message.',
    type: types.SUCCESS
  })
}
const open3 = () => {
  lMessage({
    message: 'Warning, this is a warning message.',
    type:types.WARNING,
  })
}
const open4 = () => {
  lMessage.error('Oops, this is a error message.')
}
</script>

<style scoped lang="scss">
.l-row {
  display: flex;

  .l-button + .l-button {
    margin-left: 12px;
  }
}

.l-row + .l-row {
  margin-top: 10px;
}
</style>
