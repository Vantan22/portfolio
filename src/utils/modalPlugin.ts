import { createApp, reactive, App } from "vue";
import BaseModal from "@/components/common/modal/BaseModal.vue";

interface ModalState {
  isVisible: boolean;
  title: string;
  content: any;
}

const modalState: ModalState = reactive({
  isVisible: false,
  title: "",
  content: null
});

export default {
  install(app: App) {
    // Hàm mở modal
    const show = (title: string, content: any) => {
      modalState.isVisible = true;
      modalState.title = title;
      modalState.content = content;
    };

    // Hàm đóng modal
    const hide = () => {
      modalState.isVisible = false;
      modalState.title = "";
      modalState.content = null;
    };

    // Thêm phương thức `$modal` vào Vue instance
    app.config.globalProperties.$modal = {
      show,
      hide
    };

    // Tạo instance cho modal và gắn vào body
    const modalApp = createApp(BaseModal, { modalState });
    const modalDiv = document.createElement("div");
    document.body.appendChild(modalDiv);
    modalApp.mount(modalDiv);
  }
};
