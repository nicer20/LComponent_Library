import type { App, Plugin } from 'vue'
import Input from './index.vue'

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component('l-input', Input)
  }
}

export { Input }