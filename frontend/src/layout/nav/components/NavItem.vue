<!--
 * Created Date: 2021-11-15 10:05:27
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-16 04:58:13
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
            <Nav-Item :item="v" :base="base + '/' + v.path"></Nav-Item>
          </div>
        </template>
      </el-sub-menu>
    </template>
    <template v-else>
      <el-menu-item :index="item.name" @click="goto(item, base)">
        <!-- <el-link :underline="false" :href="parseRoute(item, base)" class="nav-link">
          {{ item.meta.title || "" }}
        </el-link> -->
        {{ item.meta.title || "" }} - {{item.path}} - {{base}}
      </el-menu-item>
    </template>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'NavItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    base: {
      type: String,
      default: ''
    }
  },
  setup() {
    const router = useRouter()
    return {
      router
    }
  },
  methods: {
    goto(params, base) {
      let href = ''
      if (params.redirect) {
        href = params.redirect
      } else {
        href = base.replaceAll(/[\/]+/g, '/')
      }
      console.log(href)
      this.router.push(href)
    }
  }
}
</script>

<style lang='scss' scoped>
.nav-link {
  color: white;
}
</style>