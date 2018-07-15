<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive include="index">
        <router-view class="child-view"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "fade"
    };
  },
  watch: {}
};
</script>

<style>
/* @import "@/common/style/index.scss"; */
.child-view {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

