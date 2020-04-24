import { shallowMount } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "Vue Design System";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toContain(msg);
  });
});
