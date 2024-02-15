import type { App, Plugin } from 'vue'
import Card from './index.vue'

export const CardPlugin: Plugin = {
  install(app: App) {
    app.component('l-card', Card)
  }
}

export { Card }
