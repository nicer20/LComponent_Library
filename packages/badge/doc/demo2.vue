<template>
    <l-badge :value="200" :max="99" class="item">
        <l-button>
            comments
        </l-button>
    </l-badge>
    <l-badge :value="100" :max="10" class="item">
        <l-button>
            replies
        </l-button>
    </l-badge>
</template>
<style scoped>
.item {
    margin-top: 10px;
    margin-right: 40px;
}
</style>