import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import vn from "@/locales/vn.json";

const i18n = createI18n({
  locale: "EN", // Ngôn ngữ mặc định
  fallbackLocale: "EN", // Ngôn ngữ dự phòng nếu bản dịch không tìm thấy
  legacy: false,
  messages: {
    EN: en,
    VN: vn
  }
});

export default i18n;
