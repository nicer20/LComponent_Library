<!--  文档页面  -->
<script setup lang="ts">
import Demo1 from "./demo1.vue"
import Demo2 from './demo2.vue'
</script>

<template>
  <h1>Carousel 走马灯</h1>
  <p>在有限空间内，循环播放同一类型的图片、文字等内容</p>
  <h2>基础用法</h2>
  <p>结合使用el-carousel 和 l-carousel-item 标签就得到了一个走马灯。 每一个页面的内容是完全可定制的，把你想要展示的内容放在 l-carousel-item 标签内。
    默认情况下，在鼠标 点击 底部的指示器时就会触发切换。</p>
  <p>配置：autoplay是否自动播放；duration设置轮播时间；initial指定初始图片；hasDot是否使用圆点指示器；dotBgColor设置圆点颜色；hasDirector是否使用方向指示器。
  </p>
  <div class="example-showcase">
    <Demo1 />
    <l-divider></l-divider>
    <l-preview compName="carousel" demoName="demo1"></l-preview>
  </div>
  <h2>垂直排列</h2>
  <p>默认情况下，方向为水平 。 通过设置 vertical 来让走马灯在垂直方向上显示。</p>
  <div class="example-showcase">
    <Demo2 />
    <l-divider></l-divider>
    <l-preview compName="carousel" demoName="demo2"></l-preview>
  </div>

</template>

<style scoped lang="scss">
@import '../../style/variable.scss';
.example-showcase {
  background-color: white;
  width: 100%;
  border: solid 1px $l-border-color-lightgrey;
  border-radius: 5px;
  padding: 10px;
}
</style>
