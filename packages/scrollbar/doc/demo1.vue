<template>
  <l-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </l-scrollbar>
</template>


<script setup lang='ts'>

</script>


<style scoped lang="scss">
@import '../../style/exampleShowcase.scss';

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: $l-menu-background;
}
</style>