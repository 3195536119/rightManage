/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-26 20:01:30
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-28 21:47:39
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount("#app");
