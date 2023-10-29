/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-26 20:01:30
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-29 15:47:34
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../views/Layout.vue"),
    // children: [
    //   {
    //     path: "register",
    //     component: () => import("../views/Register.vue"),
    //   },
    // ],
  },
  {
    path: "/register",
    name:'register',
    component:()=>import('../views/login/Register.vue')
  },
  {
    //访问没有定义的路由时，跳转到404
    path: "/:pathMatch(.*)",
    component:()=>import('../views/404.vue')
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
