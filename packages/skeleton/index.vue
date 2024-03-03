<template>
    <div class="l-skeleton">

        <div v-for="index in count" :key="index" class="skeleton-template" :class="{ 'animated': animated }"
            v-if="!loading">
            <div v-if="!$slots.template">
                <div v-for="(row, index) in rows + 1" :key="row" class="skeletonRow"
                    :class="{ 'firstRow': index === 0, 'lastRow': index === rows }">
                    <!-- <div class="skeleton"></div> -->
                </div>
            </div>
            <div v-else>
                <slot name="template"></slot>
            </div>
        </div>

        <div v-if="loading">
            <slot name="default"></slot>
        </div>
    </div>
</template>
  
<script setup lang="ts">

const props = defineProps({
    animated: {
        type: Boolean,
        default: false
    },
    count: {
        type: Number,
        default: 1
    },
    loading: {
        type: Boolean,
        default: false
    },
    rows: {
        type: Number,
        default: 3
    },
    throttle: {
        type: Number,
        default: 0
    }
})


</script>
  
<style scoped lang="scss">
@import '../style/variable.scss';

.l-skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
}



.skeletonRow {
    display: flex;
    flex-direction: column;
    height: 16px;
    margin: 16px 0 0;
    width: 100%;
    background: #f0f2f5;
    border-radius: 4px;

    .skeleton {}
}

.firstRow {
    /* 添加第一行的特殊样式 */
    /* background-color: lightblue; */
    width: 33%;
}

.lastRow {
    /* 添加最后一行的特殊样式 */
    /* background-color: lightgreen; */
    width: 61%;
}

.skeleton-template {
    margin: 10px 0;
    width: 100%;
}

/* 
.skeleton-item {
    margin: 5px 0;
    background-color: #f2f2f2;
    border-radius: 4px;
} */

.animated {
    animation: skeleton-loading 1s infinite alternate;
}

@keyframes skeleton-loading {
    0% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}
</style>