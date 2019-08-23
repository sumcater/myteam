const publicDataService = [
  {
    path: "publicDataService",
    meta: {
      title: "公募数据",
    },
    component: () => import("@/views/publicDataService/index"),
    redirect: { name: "exchangeComfirmnDetail" },
    children: [
      {
        path: "publicDataFund",
        name: "publicDataFund",
        meta: {
          title: "基础数据查询",
        },
        component: () => import("@/views/publicDataService/publicDataFund/index"),
        children: [
          {
            path: "exchangeComfirmnDetail",
            name: "exchangeComfirmnDetail",
            meta: {
              title: "交易确认明细",
            },
            component: () => import("@/views/publicDataService/publicDataFund/exchangeComfirmnDetail"),
          },
        ],
      },
    ],
  },
];
console.log(publicDataService, "publicDataService");

export default publicDataService;
