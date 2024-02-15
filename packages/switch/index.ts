// 这里注册自定义组件
import type { App, Plugin } from 'vue'
import Switch from './index.vue'

export const SwitchPlugin: Plugin = {
    install(app: App) {
        app.component('l-switch', Switch)
    }
}

export { Switch}
