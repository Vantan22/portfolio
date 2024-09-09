// src/directives/vHover.ts
import { DirectiveBinding } from "vue";

const vHover = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    const onMouseEnter = () => {
      binding.value(true); // Khi hover vào, gọi hàm binding và truyền true
    };

    const onMouseLeave = () => {
      binding.value(false); // Khi hover ra, gọi hàm binding và truyền false
    };

    // Gắn sự kiện mouseenter và mouseleave vào phần tử
    el.addEventListener("mouseenter", onMouseEnter);
    el.addEventListener("mouseleave", onMouseLeave);

    // Lưu các hàm vào thuộc tính của phần tử để có thể tháo gỡ khi cần
    el.__hoverEventHandlers__ = { onMouseEnter, onMouseLeave };
  },
  unmounted(el: HTMLElement) {
    // Tháo gỡ sự kiện khi directive bị unmount
    const { onMouseEnter, onMouseLeave } = el.__hoverEventHandlers__ || {};
    el.removeEventListener("mouseenter", onMouseEnter);
    el.removeEventListener("mouseleave", onMouseLeave);
  }
};

export default vHover;
