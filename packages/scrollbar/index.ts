import type { App, Plugin } from 'vue'
import Scrollbar from './index.vue'

export const ScrollbarPlugin: Plugin = {
  install(app: App) {
    app.component('l-scrollbar', Scrollbar)
  }
}

export { Scrollbar }
