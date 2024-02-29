import type { App, Plugin } from 'vue'
//按钮插件
import { ButtonPlugin } from './button'
import { PreviewPlugin } from './utils'
import { DividerPlugin } from './divider'
import { MenuPlugin, MenuItemPlugin, SubMenuPlugin } from './menu'
import { SliderPlugin } from './slider'
import { TablePlugin } from './table'
import { BadgePlugin } from './badge'
import { SwitchPlugin } from "./switch"
import { InputPlugin } from './input'
import { ScrollbarPlugin } from "./scrollbar"
import { CardPlugin } from './card'
import { LayoutRowPlugin, LayoutColPlugin } from './layout'
import { CarouselItemPlugin } from "./carousel/index";
import { CarouselPlugin } from "./carousel/index";
import { ProgressPlugin } from "./progress/index";

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
    InputPlugin.install?.(app)
    ScrollbarPlugin.install?.(app)
    CardPlugin.install?.(app)
    LayoutRowPlugin.install?.(app)
    LayoutColPlugin.install?.(app)
    CarouselItemPlugin.install?.(app)
    CarouselPlugin.install?.(app)
    ProgressPlugin.install?.(app)
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
export * from './input'
export * from './scrollbar'
export * from './card'
export * from './layout'
export * from './carousel'
export * from './progress'
