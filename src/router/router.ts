import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/login.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/",
    name: "dashboard",
    component: () => import("@/views/Dashboard/index.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/views/ErrorPage/404.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
