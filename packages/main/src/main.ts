import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
import "./style.css";
import App from "./App.vue";
import { microApps } from "./micro-apps";

createApp(App).mount("#app");

// 注册微应用并启动
registerMicroApps(microApps);
start();
