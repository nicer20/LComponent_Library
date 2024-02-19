<template>
  <div class="l-row">
    <l-carousel
        :autoplay="true"
        :duration="3000"
        :initial='3'
        :hasDot="true"
        :hasDirector="true">
      <l-carousel-item v-for="(item,index) of img" :key="index">
        <img :src="item">
      </l-carousel-item>
    </l-carousel>
  </div>
</template>

<script lang="ts" setup>
import LCarouselItem from "../item.vue";

const img = ['src/assets/loopy1.jpg', 'src/assets/loopy2.jpg', 'src/assets/loopy3.jpg', 'src/assets/loopy4.jpg']
</script>

<style scoped lang="scss">
.l-row {
  display: flex;
  width: 520px;
  height: 300px;
  margin: 5px auto;
}
</style>
