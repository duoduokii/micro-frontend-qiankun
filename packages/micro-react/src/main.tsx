import React from "react";
import ReactDOM from "react-dom/client";
import { renderWithQiankun, qiankunWindow, QiankunProps } from "vite-plugin-qiankun/dist/helper";
import App from "./App.tsx";
import "./index.css";

let root: ReactDOM.Root;
const render = (props?: QiankunProps) => {
	root = ReactDOM.createRoot(props?.container || document.getElementById("root")!);
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
	);
};

renderWithQiankun({
	bootstrap() {
		console.log("micro-react app bootstraped");
	},
	mount(props: QiankunProps) {
		console.log("micri-react app mount");
		console.log(props);
		render(props);
	},
	update(props: QiankunProps) {
		// TODO
		console.log("micro-react app update");
		console.log(props);
	},
	unmount(props: QiankunProps) {
		console.log("micro-react app update");
		console.log(props);
		root?.unmount();
	},
});

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
	render();
}
