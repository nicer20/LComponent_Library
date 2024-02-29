<template>
  <div class="l-row">
    <l-progress :text-inside="true" :stroke-width="26" :value="70" />
    <l-progress
        :text-inside="true"
        :stroke-width="24"
        :value="100"
        status="success"
    />
    <l-progress
        :text-inside="true"
        :stroke-width="22"
        :value="80"
        status="warning"
    />
    <l-progress
        :text-inside="true"
        :stroke-width="20"
        :value="50"
        status="exception"
    />
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.l-row {
  width: 400px;
  display: flex;
  flex-direction: column;
  .l-progress-container{
    margin-top: 10px;
  }
}
</style>
