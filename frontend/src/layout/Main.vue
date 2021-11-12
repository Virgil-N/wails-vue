<!--
 * Created Date: 2021-11-12 04:19:24
 * Author: Virgil-N
 * Description:
 * -----
 * Last Modified: 2021-11-12 05:19:56
 * Modified By: Virgil-N (lieut9011@126.com)
 * -----
 * Copyright (c) 2019 - 2021 ⚐
 * Virgil-N will save your soul!
 * -----
-->

<template>
  <div>
    <div>
      <transition
        name="fade"
        mode="out-in"
      >
        <!-- keep-alive 容易导致问题 -->
        <!-- <keep-alive :include="cachedViews"> -->
        <router-view />
        <!-- </keep-alive> -->
      </transition>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Layout'
  }
</script>

<style lang="scss" scoped>

</style>