<!--
 * Created Date: 2021-11-15 08:52:31
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 12:37:56
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
-->

<template>
  <div class="nav-wrap">
    <el-menu
      class="nav-menu"
      mode="vertical"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
    >
      <Nav-Item v-for="route in routeList" :key="route.name" :item="route" ></Nav-Item>
    </el-menu>
  </div>
  
</template>

<script>
import { constantRoutes } from'@/routes/index'
import NavItem from '@/layout/top_nav/components/NavItem.vue'

export default {
  name: 'TopNav',
  computed: {
    routeList() {
      return constantRoutes
    }
  },
  setup() {
    // console.log(constantRoutes)
  },
  components: {
    NavItem
  }
}
</script>

<style lang='scss' scoped>
.nav-wrap {
  width: 100%;
  height: 100%;
}
.nav-menu {
  height: 100%;
}
</style>