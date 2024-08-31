// directives/click-outside.js
export default {
  beforeMount(el, binding) {
    el.clickOutsideEvent = function (event) {
      // Kiểm tra nếu click xảy ra bên ngoài element
      if (!(el === event.target || el.contains(event.target))) {
        // Gọi hàm được truyền qua binding
        binding.value(event);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  }
};
