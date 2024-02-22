// 这里注册自定义组件
import type { App, Plugin } from 'vue'
import Carousel from './index.vue'
import CarouselItem from './item.vue'

export const CarouselPlugin: Plugin = {
    install(app: App) {
        app.component('l-carousel',Carousel)
    }
}
export const CarouselItemPlugin: Plugin = {
    install(app: App) {
        app.component('l-carousel-item', CarouselItem)
    }
}
export { Carousel,CarouselItem}
