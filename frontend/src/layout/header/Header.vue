<!--
 * Created Date: 2021-11-15 11:55:11
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 05:29:42
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
-->

<template>
  <div class="header-wrap">
    <span class="toggle-btn" @click="toggleNav">
        <Svg-Icon v-show="!navOpend" name="indent" color="#fff"></Svg-Icon>
        <Svg-Icon v-show="navOpend" name="outdent" color="#fff"></Svg-Icon>
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
import SvgIcon from '@/components/svg_icon/svgIcon.vue'
import { getTokenByName } from '@/utils/cookie.js'

export default {
  name: 'Header',
  data() {
    return {
      navOpend: true
    }
  },
  onMounted() {
    this.navOpend = getTokenByName('navOpend')
  },
  methods: {
    toggleNav() {
      this.navOpend = !this.navOpend
      // store.commit('app/SET_NAV_OPEND', this.navOpend)
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
  background-color: grey;
}
.menu-wrap {
  position: absolute;
  right: 30px;
  height: 100%;

  .img-btn-wrap {
    height: 60px;
    line-height: 60px;
  }
}
.toggle-btn {
  height: 60px;
  line-height: 60px;
  margin-left: 30px;
  cursor: pointer;
}
</style>