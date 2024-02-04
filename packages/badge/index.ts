import type { App, Plugin } from 'vue'
import Badge from './index.vue'

export const BadgePlugin: Plugin = {
    install(app: App) {
        app.component('l-badge', Badge)
    }
}

export { Badge }