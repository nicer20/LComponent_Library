import type { App, Plugin } from 'vue'
import Preview from './preview.vue'

export const PreviewPlugin: Plugin = {
  install(app: App) {
    app.component('l-preview', Preview)
  }
}

export { Preview }
