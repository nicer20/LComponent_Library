import type { App, Plugin } from 'vue'
import Slider from './index.vue'

export const SliderPlugin: Plugin = {
  install(app: App) {
    app.component('l-slider', Slider)
  }
}

export { Slider }
