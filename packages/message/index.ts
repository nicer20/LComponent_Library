// 这里注册自定义组件
import type { App, Plugin } from 'vue'
import Message from './index.vue'
export const MessagePlugin: Plugin = {
    install(app: App) {
        app.component('ll-message', Message)
    }
}
export { Message}
