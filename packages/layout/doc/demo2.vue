<template>
  <l-row :gutter="20">
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
</template>

<style>
.el-row {
  margin-bottom: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.l-bg-purple {
  background-color: #d3dce6;
}
</style>