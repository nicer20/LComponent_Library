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
      },
      {
        path:'data_show',
        name:"Data 数据展示",
        redirect:'/table',
        children:[
          {
            path:'badge',
            name:'Badge',
            component: () => import('../../packages/badge/doc/Demo.vue')
          },
          {
            path:'table',
            name:'Table',
            component: () => import('../../packages/table/doc/Demo.vue')
          }
        ]},
        {

        path: 'form',
        name: 'Form 表单组件',
        redirect: '/switch',
        children: [
          {
            path: 'switch',
            name: 'Switch',
            component: () => import('../../packages/switch/doc/Demo.vue')
          },
        ]
      }
    ]
  }
]
