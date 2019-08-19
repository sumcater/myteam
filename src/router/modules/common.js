import Denied from "@/views/Denied";

const common = [
  {
    path: "denied",
    name: "denied",
    component: Denied,
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
