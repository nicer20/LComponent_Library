import type { App, Plugin } from 'vue'
import Table from './index.vue'

export const TablePlugin: Plugin = {
    install(app: App) {
        app.component('l-table', Table)
    }
}

export { Table }
