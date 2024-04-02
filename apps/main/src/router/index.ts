import * as VueRouter from "vue-router";
import Login from "../pages/Login.vue";
import Home from "../pages/Home.vue";

const routes: VueRouter.RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
	},
];

export default VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
	routes,
});
