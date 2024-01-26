export const constRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    redirect: '/base/button',
    children: [
      {
        path: 'base',
        name: 'Base 基础',
        redirect: '/button',
        children: [
          {
            path: 'button',
            name: 'Button',
            component: () => import('../../packages/button/doc/Demo.vue')
          },
          {
            path: 'divider',
            name: 'Divider',
            component: () => import('../../packages/divider/doc/Demo.vue')
          },
          {
            path: 'menu',
            name: 'Menu',
            component: () => import('../../packages/menu/doc/Demo.vue')
          }
        ]
      }
    ]
  }
]
