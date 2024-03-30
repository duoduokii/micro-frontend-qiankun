import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
	base: "http://localhost:3001",
	server: {
		port: 3001,
		cors: true,
		origin: "http://localhost:3001",
	},
	plugins: [
		vue(),
		qiankun("micro-vue3", {
			useDevMode: true,
		}),
	],
});
