// 这里注册自定义组件
import type { App, Plugin } from 'vue'
import Progress from './index.vue'

export const ProgressPlugin: Plugin = {
    install(app: App) {
        app.component('l-progress', Progress)
    }
}

export { Progress }
