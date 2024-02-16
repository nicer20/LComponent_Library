<template>
  <l-row :gutter="20">
    <l-col :span="16">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="8">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row :gutter="20">
    <l-col :span="8">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="8">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row :gutter="20">
    <l-col :span="4">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="16">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
</template>

<style>
.l-row {
  margin-bottom: 20px;
}

.l-row:last-child {
  margin-bottom: 0;
}

.l-col {
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