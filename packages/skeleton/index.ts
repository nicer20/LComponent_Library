import type { App, Plugin } from 'vue'
import Skeleton from './index.vue'
import SkeletonItem from './skeletonItem.vue'


export const SkeletonPlugin: Plugin = {
    install(app: App) {
        app.component('l-skeleton', Skeleton)
    }
}
export const SkeletonItemPlugin: Plugin = {
    install(app: App) {
      app.component('l-skeleton-item', SkeletonItem)
    }
  }

export { Skeleton ,SkeletonItem}