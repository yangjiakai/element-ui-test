import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/componentTest",
    name: "ComponentTest",
    component: () => import("../views/ComponentTest.vue"),
  },
  {
    path: "/requestTest",
    name: "RequestTest",
    component: () => import("../views/RequestTest.vue"),
  },
  {
    path: "/child",
    name: "child",
    component: () =>
      import(/* webpackChunkName: "child" */ "../views/child/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
