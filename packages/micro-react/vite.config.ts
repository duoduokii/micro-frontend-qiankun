import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun";

// https://vitejs.dev/config/
export default defineConfig({
	base: "http://localhost:3002",
	server: {
		port: 3002,
		cors: true,
		origin: "http://localhost:3002",
	},
	plugins: [
		// TODO
		// react(),
		qiankun("micro-react", {
			useDevMode: true,
		}),
	],
});
