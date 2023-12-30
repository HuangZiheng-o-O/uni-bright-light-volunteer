import { createSSRApp } from "vue";

import App from "./App.vue";
// @ts-ignore
import uviewPlus from 'uview-plus'
import { piniaInstall } from '@/store/plugins'
import router from "./router";

export function createApp() {
  const app = createSSRApp(App);
  app.use(uviewPlus)
  app.use(router)
  app.use(piniaInstall)
  return {
    app,
  };
}
