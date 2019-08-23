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
      // children: [
      // {
      //   path: "denied",
      //   name: "denied",
      //   component: () => import("@/views/Denied"),
      //   meta: { breadcrumbName: "未授权页" },
      // },
      // {
      //   path: "welcome",
      //   component: () => import("@/views/Welcome"),
      //   meta: {
      //     title: "首页",
      //   },
      // },
      // {
      //   path: "dynamicQuery",
      //   component: () => import("@/views/dynamicQuery/index"),
      //   redirect: { name: "dynamicQueryAddConfig" },
      //   meta: {
      //     title: "数据服务动态查询",
      //   },
      //   children: [
      //     {
      //       path: "dynamicQueryAddConfig",
      //       name: "dynamicQueryAddConfig",
      //       meta: {
      //         title: "新增查询",
      //       },
      //       component: () => import("@/views/dynamicQuery/dynamicQueryAddConfig"),
      //     },
      //     {
      //       path: "dynamicQueryVerifyConfig",
      //       name: "dynamicQueryVerifyConfig",
      //       meta: {
      //         title: "审核查询",
      //       },
      //       component: () => import("@/views/dynamicQuery/dynamicQueryVerifyConfig"),
      //     },
      //   ],
      // },
      // {
      //   path: "publicDataService",
      //   meta: {
      //     title: "公募数据",
      //   },
      //   component: () => import("@/views/publicDataService/index"),
      //   redirect: { name: "exchangeComfirmnDetail" },
      //   children: [
      //     {
      //       path: "publicDataFund",
      //       name: "publicDataFund",
      //       meta: {
      //         title: "基础数据查询",
      //       },
      //       component: () => import("@/views/publicDataService/publicDataFund/index"),
      //       children: [
      //         {
      //           path: "exchangeComfirmnDetail",
      //           name: "exchangeComfirmnDetail",
      //           meta: {
      //             title: "交易确认明细",
      //           },
      //           component: () => import("@/views/publicDataService/publicDataFund/exchangeComfirmnDetail"),
      //         },
      //       ],
      //     },
      //   ],
      // },
      // ],
    },
  ],
});
