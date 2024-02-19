<template>
  <l-row>
    <l-col :span="24">
      <div class="grid-content l-bg-purple-dark" />
    </l-col>
  </l-row>
  <l-row>
    <l-col :span="12">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="12">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
  </l-row>
  <l-row>
    <l-col :span="8">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="8">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="8">
      <div class="grid-content l-bg-purple" />
    </l-col>
  </l-row>
  <l-row>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="6">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
  </l-row>
  <l-row>
    <l-col :span="4">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :span="4">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
  </l-row>
</template>

<style lang="scss">
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