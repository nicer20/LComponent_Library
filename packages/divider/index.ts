import type { App, Plugin } from 'vue'
import Divider from './index.vue'

export const DividerPlugin: Plugin = {
  install(app: App) {
    app.component('l-divider', Divider)
  }
}

export { Divider }
