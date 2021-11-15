<!--
 * Created Date: 2021-11-15 08:52:31
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 05:28:51
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
      @select="handleSelect"
    >
      <Nav-Item v-for="route in routeList" :key="route.name" :item="route" ></Nav-Item>
    </el-menu>
  </div>
  
</template>

<script>
import { constantRoutes } from'@/routes/index.js'
import NavItem from '@/layout/nav/components/NavItem.vue'
import store from '@/store/index.js'

export default {
  name: 'Nav',
  computed: {
    routeList() {
      return constantRoutes
    },
    navOpend() {
      // return this.$store.getters.navOpend
      return true
    }
  },
  // watch: {
  //   '$store.state.app.navOpend': {
  //     handler: function(newVal, oldVal) {
  //       // this.navOpend = newVal
  //       console.log(newVal)
  //     },
  //     immediate: true
  //   }
  // },
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
  height: 100%;
}
.nav-menu {
  height: 100%;
}
</style>