import type { App, Plugin } from 'vue'
import Row from './row.vue'
import Col from './col.vue'

export const LayoutRowPlugin: Plugin = {
  install(app: App) {
    app.component('l-row', Row)
  }
}
export const LayoutColPlugin: Plugin = {
  install(app: App) {
    app.component('l-col', Col)
  }
}

export { Row, Col }
