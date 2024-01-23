<template>
  <div class="container">
    <div class="left_menu">
      <h2>Base 基础</h2>
      <div
        class="temp_menu"
        v-for="item in constRoutes[0].children[0].children"
        :key="item.name"
        @click="$router.push(item.path)"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="right_main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { constRoutes } from '@/router/routes'
</script>

<style scoped lang="scss">
@import '../../packages/style/variable.scss';
html,
body {
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: snow;
  border-radius: 10px;
  .left_menu {
    flex: 3;
    min-width: 150px;
    overflow-y: auto;
    padding: 15px;
    border-right: 2px solid $l-border-color-lightgrey;
    .temp_menu {
      display: flex;
      justify-content: center;
      font-size: medium;
      cursor: pointer;
      padding-left: 10px;
      flex-direction: column;
    }
  }

  .right_main {
    flex: 7;
    height: 100%;
    width: auto;
    min-width: 700px;
    box-sizing: border-box;
    overflow-x: auto;
    overflow-y: auto;
    padding: 0 10px;
  }
}
</style>
