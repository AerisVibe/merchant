import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

const routes = [{
    path: '/',
    redirect: '/login'
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/view/layout/index.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/view/login/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    meta: {
      closeTab: true,
    },
    component: () => import('@/view/error/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
