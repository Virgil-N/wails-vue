/**
 * Created Date: 2021-11-12 04:22:20
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-16 02:28:30
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { createRouter, createWebHistory } from 'vue-router'

export const constantRoutes = [
  {
    path: '/',
    name: 'root',
    meta: { hidden: true, title: '' },
    // redirect: '/home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/home',
    name: 'home',
    meta: { hidden: false, title: '首页' },
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    meta: { hidden: false, title: '用户' },
    redirect: '/user/list',
    children: [
      {
        path: 'list',
        name: 'user-list',
        meta: { hidden: false, title: '用户列表' },
        component: () => import('@/views/home/Home.vue')
      },
      {
        path: 'file',
        name: 'user-file',
        redirect: '/user/file/name',
        meta: { hidden: false, title: '用户资料' },
        children: [
          {
            path: 'name',
            name: 'user-file-name',
            redirect: '/user/file/name',
            meta: { hidden: false, title: '资料名称' },
            children: [
              {
                path: 'chinese',
                name: 'user-file-name-chinese',
                redirect: '/user/file/name/chinese',
                meta: { hidden: false, title: '中文名称' },
                component: () => import('@/views/home/Home.vue')
              },
              {
                path: 'english',
                name: 'user-file-name-english',
                redirect: '/user/file/name/english',
                meta: { hidden: false, title: '英文名称' },
                component: () => import('@/views/home/Home.vue')
              }
            ]
          }
        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.VITE_BASE_PATH),
  routes: constantRoutes
})

export default router