<!--
 * Created Date: 2021-11-15 08:52:31
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-17 09:29:17
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
      :collapse="navOpend"
    >
      <Nav-Item v-for="route in routeList" :key="route.name" :item="route" :base="route.path"></Nav-Item>
    </el-menu>
  </div>
  
</template>

<script>
import { useStore } from 'vuex'
import { constantRoutes } from'@/routes/index.js'
import NavItem from '@/layout/nav/components/NavItem.vue'

export default {
  name: 'Nav',
  data() {
    return {
      store: useStore()
    }
  },
  computed: {
    routeList() {
      return constantRoutes
    },
    navOpend() {
      return this.store.state.app.navOpend
    }
  },
  setup() {
    
  },
  components: {
    NavItem
  }
}
</script>

<style lang='scss' scoped>
.nav-wrap {
  width: 201px;
  height: 100%;
  margin-top: 61px;
  position: fixed;
  left: 0;
  top: 0;
}
.nav-menu {
  height: 100%;
}
</style>