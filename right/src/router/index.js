/*
 * @Descripttion:
 * @version:
 * @Author: shaye
 * @Date: 2023-10-26 20:01:30
 * @LastEditors: shaye
 * @LastEditTime: 2023-10-28 21:45:08
 */
import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Register.vue"),
    // children: [
    //   {
    //     path: "register",
    //     component: () => import("../views/Register.vue"),
    //   },
    // ],
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: function () {
  //     return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //   }
  // }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
