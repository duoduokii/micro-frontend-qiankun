import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
import Antd from "ant-design-vue";
import "./style.css";
import App from "./App.vue";
import { microApps } from "./micro-apps";
import "ant-design-vue/dist/reset.css";

createApp(App).use(Antd).mount("#app");

// 注册微应用并启动
registerMicroApps(microApps);
start();
