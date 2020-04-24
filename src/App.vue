<template>
  <div>
    <hamburger-menu />
    <hello-world />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    HamburgerMenu: () => import("./components/HamburgerMenu.vue"),
    HelloWorld: () => import("./components/HelloWorld.vue")
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.test {
  color: $blue;
}
</style>
