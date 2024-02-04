<template>
    <l-badge :value="12" class="item">
        <l-button>
            comments
        </l-button>
    </l-badge>
    <l-badge :value="3" class="item">
        <l-button>
            replies
        </l-button>
    </l-badge>
    <l-badge :value="12" class="item" type="primary">
        <l-button>
            comments
        </l-button>
    </l-badge>
    <l-badge :value="3" class="item" type="warning">
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