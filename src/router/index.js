import Vue from "vue";
import Router from "vue-router";
import ChildrenRouters from "./modules";

Vue.use(Router);

export default new Router({
  routes: [
    {
    path: "/",
    component: () => import("@/views/layout/home"),
    redirect: "/welcome",
    meta: {
      title: "首页",
    },
    children: ChildrenRouters,
  }, 
],
});
