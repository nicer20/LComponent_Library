export const constRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
    redirect: '/base/button',
    children: [
      {
        path: 'base',
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
      },
      {
        path:'data_show',
        redirect:'/table',
        children:[
          {
            path:'table',
            name:'Table',
            component: () => import('../../packages/table/doc/Demo.vue')
          }
        ]

      }
    ]
  }
]
