import { createApp } from "vue";
import App from "./App.vue";
import router from "@/lib/router";
import "pretty-timeline/dist/style.css";
import "vuesax/dist/vuesax.css";
import "@/style/normalize.css";
import "@/style/global.scss";
import clickOutside from "@/directives/click-outside";
import vHover from "@/directives/hover";
import modalPlugin from "@/utils/modalPlugin";
import i18n from "@/lib/i18n";
import { createHead } from "@vueuse/head";

import { PrettyTimeline } from "pretty-timeline";
import "@/style/timeline.scss";

const app = createApp(App).use(router).use(i18n).use(modalPlugin).use(PrettyTimeline);
app.directive("click-outside", clickOutside);
app.directive("hover", vHover);
app.component("PrettyTimeline", PrettyTimeline);
app.mount("#app");
