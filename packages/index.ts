import type { App, Plugin } from 'vue'
//按钮插件
import { ButtonPlugin } from './button'
import { PreviewPlugin } from './uitls'
import { DividerPlugin } from './divider'
import { MenuPlugin, MenuItemPlugin, SubMenuPlugin } from './menu'

const LPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    PreviewPlugin.install?.(app)
    DividerPlugin.install?.(app)
    MenuPlugin.install?.(app)
    MenuItemPlugin.install?.(app)
    SubMenuPlugin.install?.(app)
  }
}

export default LPlugin
export * from './button'
export * from './uitls'
export * from './divider'
export * from './menu'
