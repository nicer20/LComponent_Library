import { createRouter, createWebHashHistory } from 'vue-router'
import { constRoutes } from './routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constRoutes,
  //滚动行为
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
})
export default router
