<template>
    <l-skeleton style="width: 240px">
        <template #template>
            <l-skeleton-item variant="image" style="width: 240px; height: 240px" />
            <div style="padding: 14px">
                <l-skeleton-item variant="p" style="width: 50%" />
                <div style="
              display: flex;
              align-items: center;
              justify-items: space-between;
            ">
                    <l-skeleton-item variant="text" style="margin-right: 16px" />
                    <l-skeleton-item variant="text" style="width: 30%" />
                </div>
            </div>
        </template>
    </l-skeleton>
</template>