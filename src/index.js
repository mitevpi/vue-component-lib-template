import Vue from "vue";

import HelloWorld from "./components/HelloWorld.vue";
import HamburgerMenu from "./components/HamburgerMenu.vue";

const Components = {
  HelloWorld,
  HamburgerMenu
};

Vue.component("HelloWorld", HelloWorld);
Vue.component("HamburgerMenu", HamburgerMenu);

export { HelloWorld };
export { HamburgerMenu };

// Export the library as a plugin
export default Components;
