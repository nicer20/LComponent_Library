<template>
    <div class="l-skeleton-item" :variant="variant" :class="lclass">
        <svg v-if="lclass.includes('l-skeleton-item-image')" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"
            style="transform: scale(0.25) ">
            <path fill="f5f7fa"
                d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.52-228.48-68.928-68.928a32 32 0 0 0-45.248 0L128 768.064h778.688l-242.112-290.56a32 32 0 0 0-49.216 0L458.752 665.408a32 32 0 0 1-47.232 2.112M256 384a96 96 0 1 0 192.064-.064A96 96 0 0 0 256 384">
            </path>
        </svg>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
    variant: {
        type: String,
        required: true
    }
})
const lclass = computed(() => {
    return [`l-skeleton-item-${props.variant}`]
})
</script>
<script lang="ts">
export default {
    name: 'l-skeleton-item'
}
</script>
<style lang="scss" scoped>
@import '../style/variable.scss';

.l-skeleton-item {
    background: #f0f2f5;
    border-radius: 4px;
    width: 100%;
    height: 100px;
    margin-top: 6px;

}

.l-skeleton-item-circle {
    border-radius: 50%;
}

.l-skeleton--item-image {
    display: flex;
    justify-content: center;
    align-items: center;

}

.l-skeleton-item-p {
    height: 16px;

}

.l-skeleton-item-text {
    height: 13px;
}

.l-skeleton-item-h3 {
    height: 18px;
}
</style>