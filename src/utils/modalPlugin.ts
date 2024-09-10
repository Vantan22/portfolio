import { createApp, reactive, App } from "vue";
import BaseModal from "@/components/common/modal/BaseModal.vue";

interface ModalState {
  isVisible: boolean;
  title: string;
  content: any;
}

const modalStates: Record<string, ModalState> = reactive({}); // Store multiple modals by name

export default {
  install(app: App) {
    // Hàm mở modal theo tên
    const show = (name: string, title: string, content: any) => {
      if (!modalStates[name]) {
        modalStates[name] = {
          isVisible: false,
          title: "",
          content: null
        };
      }
      modalStates[name].isVisible = true;
      modalStates[name].title = title;
      modalStates[name].content = content;
    };

    // Hàm đóng modal theo tên
    const hide = (name: string) => {
      if (modalStates[name]) {
        modalStates[name].isVisible = false;
        modalStates[name].title = "";
        modalStates[name].content = null;
      }
    };

    // Thêm phương thức `$modal` vào Vue instance
    app.config.globalProperties.$modal = {
      show,
      hide
    };

    // Tạo instance cho mỗi modal và gắn vào body
    const modalDiv = document.createElement("div");
    document.body.appendChild(modalDiv);

    Object.keys(modalStates).forEach((name) => {
      const modalApp = createApp(BaseModal, { modalState: modalStates[name] });
      modalApp.mount(modalDiv);
    });
  }
};
