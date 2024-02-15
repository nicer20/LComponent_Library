import type { App, Plugin } from 'vue'
//按钮插件
import { ButtonPlugin } from './button'
import { PreviewPlugin } from './utils'
import { DividerPlugin } from './divider'
import { MenuPlugin, MenuItemPlugin, SubMenuPlugin } from './menu'
import { SliderPlugin } from './slider'
import { TablePlugin } from './table'
import { BadgePlugin } from './badge'
// wly
import { SwitchPlugin } from "./switch"
import { ScrollbarPlugin } from "./scrollbar";
import { CardPlugin } from './card/index'

const LPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    PreviewPlugin.install?.(app)
    DividerPlugin.install?.(app)
    MenuPlugin.install?.(app)
    MenuItemPlugin.install?.(app)
    SubMenuPlugin.install?.(app)
    SliderPlugin.install?.(app)
    TablePlugin.install?.(app)
    BadgePlugin.install?.(app)
    SwitchPlugin.install?.(app)
    ScrollbarPlugin.install?.(app)
    CardPlugin.install?.(app)
  }
}

export default LPlugin
export * from './button'
export * from './utils'
export * from './divider'
export * from './menu'
export * from './slider'
export * from './table'
export * from './badge'
export * from './switch'
export * from './scrollbar'
export * from './card'
