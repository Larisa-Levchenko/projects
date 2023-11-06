import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Init from "@/views/Init";
import Error from "@/views/Error";
import Projects from "@/views/Projects";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Init",
    component: Init,
  },
  {
    path: "/error",
    name: "Error",
    component: Error,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Init" && !store.state.init) {
    next({ name: "Init" });
    return;
  }
  next();
});

export default router;
