<template>
  <l-row :gutter="10">
    <l-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
    <l-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content l-bg-purple" />
    </l-col>
    <l-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content l-bg-purple-light" />
    </l-col>
  </l-row>
</template>

<style>
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
</style>