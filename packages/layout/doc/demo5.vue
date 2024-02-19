<template>
  <l-row class="row-bg">
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row class="row-bg" justify="center">
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row class="row-bg" justify="end">
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row class="row-bg" justify="space-between">
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row class="row-bg" justify="space-around">
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row class="row-bg" justify="space-evenly">
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
</template>

<style>
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

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

.l-bg-purple-light {
  background-color: #e5e9f2;
}

.l-bg-purple-dark {
  background-color: #99a9bf;
}
</style>