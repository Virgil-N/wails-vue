/**
 * Created Date: 2021-11-12 04:22:20
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-12 05:32:30
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
 */

import { createRouter, createWebHistory } from 'vue-router'

import Layout from '@/layout/Main.vue'

export const constantRoutes = [
  {
    path: '/',
    name: 'root',
    meta: { hidden: true },
    component: Layout,
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: { hidden: false },
    component: () => import('@/views/home/Home.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_PATH),
  routes: constantRoutes
})

export default router