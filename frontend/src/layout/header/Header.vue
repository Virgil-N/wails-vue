<!--
 * Created Date: 2021-11-15 11:55:11
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-16 12:46:29
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
-->

<template>
  <div class="header-wrap" :class="navOpend ? 'close-nav nav-opend' : 'open-nav nav-closed'">
    <span class="toggle-btn" @click="toggleNav">
        <Svg-Icon v-show="!navOpend" name="outdent" color="#fff"></Svg-Icon>
        <Svg-Icon v-show="navOpend" name="indent" color="#fff"></Svg-Icon>
      </span>
    <el-dropdown class="menu-wrap">
      <span class="img-btn-wrap">
        xxx
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item disabled>Action 4</el-dropdown-item>
          <el-dropdown-item divided>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { getTokenByName } from '@/utils/cookie.js'
import SvgIcon from '@/components/svg_icon/svgIcon.vue'

export default {
  name: 'Header',
  data() {
    return {
      store: useStore(),
      navOpend: false
    }
  },
  setup(props, context) {
    return {}
  },
  watch: {
    '$store.state.app.navOpend': {
      handler: function(newVal, oldVal) {
        this.navOpend = newVal
      },
      immediate: true
    }
  },
  onMounted() {
    this.navOpend = getTokenByName('navOpend')
  },
  methods: {
    toggleNav() {
      this.navOpend = !this.store.state.app.navOpend
      this.store.commit('app/SET_NAV_OPEND', !this.store.state.app.navOpend)
    }
  },
  components: {
    SvgIcon
  }
}
</script>

<style lang='scss' scoped>
.header-wrap {
  position: relative;
  background-color: #3c4146;
  padding-left: 200px;
  box-sizing: border-box;
}
.menu-wrap {
  position: absolute;
  right: 30px;
  height: 100%;
}
.toggle-btn {
  width: 60px;
  height: 60px;
  line-height: 60px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.nav-closed {
  padding-left: 63px;
}
.nav-opend {
  padding-left: 201px;
}
.close-nav {
  transition: padding-left 0.3s ease-in-out;
  padding-left: 63px;
}
.open-nav {
  transition: padding-left 0.3s ease-in-out;
  padding-left: 201px;
}

</style>