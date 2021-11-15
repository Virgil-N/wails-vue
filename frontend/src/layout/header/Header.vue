<!--
 * Created Date: 2021-11-15 11:55:11
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 12:40:48
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
-->

<template>
  <div class="header-wrap">
    <el-dropdown class="menu-wrap">
      <span>xxx</span>
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
export default {
  name: 'header'
}
</script>

<style lang='scss' scoped>
.header-wrap {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: grey;
}
.menu-wrap {
  height: 100%;
  position: absolute;
  right: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;;
}
</style>