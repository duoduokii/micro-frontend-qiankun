import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
import Antd from "ant-design-vue";
import App from "./App.vue";
import { microApps } from "./micro-apps";
import router from "./router";
import "ant-design-vue/dist/reset.css";
import "./style.css";

const app = createApp(App);

app.use(Antd);
app.use(router);
app.mount("#app");

// 注册微应用并启动
registerMicroApps(microApps);
start();
