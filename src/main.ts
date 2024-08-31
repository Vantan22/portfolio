import { createApp } from "vue";
import App from "./App.vue";
import router from "@/lib/router";
import "vuesax/dist/vuesax.css";
import "@/style/normalize.css";
import "@/style/global.scss";
import clickOutside from "@/directives/click-outside";

import i18n from '@/lib/i18n';

const app = createApp(App).use(router).use(i18n);
app.directive("click-outside", clickOutside);
app.mount("#app");
