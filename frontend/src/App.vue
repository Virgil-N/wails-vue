<template>
  <div class="root">
    <Nav></Nav>
    <div class="main-wrap">
      <Header class="header"></Header>
      <div class="content-wrap">
        <!-- <transition
          name="fade"
          mode="out-in"
        > -->
          <!-- keep-alive 容易导致问题 -->
          <!-- <keep-alive :include="cachedViews"> -->
          <router-view />
          <!-- </keep-alive> -->
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/layout/header/Header.vue'
import Nav from '@/layout/nav/Nav.vue'

export default {
  name: 'App',
  components: {
    Header,
    Nav
  }
}
</script>

<style>
.root {
  width: 100%;
  height: 100%;
}
.main-wrap {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 61px;
}
.content-wrap {
  width: 100%;
}
</style>
