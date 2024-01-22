import type { App, Plugin } from 'vue'
import Menu from './index.vue'
import MenuItem from './menuItem.vue'
import SubMenu from './subMenu.vue'

export const MenuPlugin: Plugin = {
  install(app: App) {
    app.component('l-menu', Menu)
  }
}
export const MenuItemPlugin: Plugin = {
  install(app: App) {
    app.component('l-menu-item', MenuItem)
  }
}
export const SubMenuPlugin: Plugin = {
  install(app: App) {
    app.component('l-sub-menu', SubMenu)
  }
}

export { Menu, MenuItem, SubMenu }
