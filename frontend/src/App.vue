<template>
  <div class="root">
    <div class="header-wrap">
      <Header></Header>
    </div>
    <div class="wrap">
      <div class="left-nav-wrap">
      <Top-Nav></Top-Nav>
    </div>
    <div class="main-wrap">
      <div class="drawer-wrap">
        <!-- drawer -->
      </div>
      <div class="content-wrap">
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
  </div>
  </div>
</template>

<script>
import Header from '@/layout/header/Header.vue'
import TopNav from '@/layout/top_nav/TopNav.vue'

export default {
  name: 'App',
  components: {
    Header,
    TopNav
  }
}
</script>

<style>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header-wrap {
  height: 60px;
}
.wrap {
  height: calc(100% - 60px);
}
.left-nav-wrap {
  width: 201px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 60px;
}
.main-wrap {
  flex-grow: 1;
}
</style>
