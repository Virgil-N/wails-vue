<!--
 * Created Date: 2021-11-15 10:05:27
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-15 12:38:08
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
-->

<template>
  <div v-if="item.meta && !item.meta.hidden">
    <template v-if="item.children && item.children.length > 0">
      <el-sub-menu :index="item.name">
        <template #title>{{item.meta.title || ""}}</template>
        <template v-for="v in item.children">
          <div :key="v.name" v-if="v.meta && !v.meta.hidden">
            <Nav-Item :item="v"></Nav-Item>
          </div>
        </template>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.name">{{item.meta.title || ""}}</el-menu-item>
    </template>
  </div>
</template>

<script>

export default {
  name: 'navItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log(this.item)
  }
}
</script>

<style lang='scss' scoped>

</style>