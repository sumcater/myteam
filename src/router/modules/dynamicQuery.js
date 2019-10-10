const dynamicQuery = [
  {
    path: "dynamicQuery",
    component: () => import("@/views/dynamicQuery/index"),
    redirect: { name: "dynamicQueryAddConfig" },
    meta: {
      title: "数据服务动态查询",
    },
    children: [
      {
        path: "dynamicQueryAddConfig",
        name: "dynamicQueryAddConfig",
        meta: {
          title: "新增查询",
        },
        component: () => import("@/views/dynamicQuery/dynamicQueryAddConfig"),
      },
      {
        path: "dynamicQueryVerifyConfig",
        name: "dynamicQueryVerifyConfig",
        meta: {
          title: "审核查询",
        },
        component: () => import("@/views/dynamicQuery/dynamicQueryVerifyConfig"),
      },
      {
        path: "dynamicQueryExecuteConfig",
        name: "dynamicQueryExecuteConfig",
        meta: {
          title: "执行查询",
        },
        component: () => import("@/views/dynamicQuery/dynamicQueryExecuteConfig"),
      },
    ],
  },
];
console.log(dynamicQuery,"dynamicQuery");

export default dynamicQuery;
