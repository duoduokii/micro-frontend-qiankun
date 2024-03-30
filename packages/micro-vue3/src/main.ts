import { createApp } from "vue";
import { renderWithQiankun, qiankunWindow, QiankunProps } from "vite-plugin-qiankun/dist/helper";
import App from "./App.vue";
import "./style.css";

const app = createApp(App);
const render = (props?: QiankunProps) => {
	app.mount(props?.container || "#app");
};

renderWithQiankun({
	bootstrap() {
		console.log("micro-vue3 app bootstraped");
	},
	mount(props: QiankunProps) {
		console.log("micri-vue3 app mount");
		console.log(props);
		render(props);
	},
	update(props: QiankunProps) {
		// TODO
		console.log("micro-vue3 app update");
		console.log(props);
	},
	unmount(props: QiankunProps) {
		console.log("micro-vue3 app update");
		console.log(props);
		app.unmount();
	},
});

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
	render();
}
