import type { App, Plugin } from 'vue'
import Button from './index.vue'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('l-button', Button)
  }
}

export { Button }
