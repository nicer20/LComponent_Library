<template>
    <div class="badge-container">
        <slot></slot>
        <div class="l-badge" v-if="!hidden && !isDot" :class="type">
            <span v-if="typeof value === 'number' && value > max">{{ max }}+</span>
            <span v-else>{{ value }}</span>

        </div>
        <div v-else class="l-badge-dot"></div>
    </div>
</template>
<script lang="ts" setup>
// import { computed } from 'vue';
// const displayValue = computed(() => {
//     if (typeof props.value === 'string' && props.value !== '') {
//         return props.value;
//     } else {
//         return props.value;
//     }
// })
const props = defineProps({
    value: {
        type: [String, Number],
        default: ''
    },
    // customText: {
    //     type: String,
    //     default: ''
    // },
    max: {
        type: Number,
        default: 99
    },
    isDot: {
        type: Boolean,
        default: false
    },
    hidden: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'danger'
    }

})
</script>
<style scoped lang="scss">
.badge-container {
    position: relative;
    display: inline-block;
}

.l-badge {
    position: absolute;
    top: -8px;
    right: -8px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0px 6px;
    border-radius: 10px;
    background-color: #f5222d;
    color: #fff;
    font-size: 11px;
    font-weight: bold;
}

.primary {
    background-color: #409eff;
}

.warning {
    background-color: #faad14;
}

.l-badge-hidden {
    display: none;
}


.l-badge-dot {
    position: absolute;
    top: -6px;
    right: -8px;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #f5222d;
}
</style>