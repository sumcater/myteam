

const common = [
  {
    path: "denied",
    name: "denied",
    component: () => import("@/views/Denied"),
    meta: { breadcrumbName: "未授权页" },
  },
  {
    path: "welcome",
    name: "welcome",
    component: () => import("@/views/Welcome"),
    meta: { breadcrumbName: "欢迎页" },
  },
];
export default common;
