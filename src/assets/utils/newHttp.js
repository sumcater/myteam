import axios from "axios";
import { Message, MessageBox } from "element-ui";
import router from "@/router";
// import qs from "qs";

let newInstance = axios.create({
  timeout: process.env.VUE_APP_USE_TIMEOUT,
  baseURL: process.env.VUE_APP_USE_API,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

newInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

newInstance.interceptors.response.use(
  response => {
    let res = response.data;
    let status = res.status || res.code;
    if (status === "0000") {
      if (!res.datas) return { self: 1, ...res };
      return res;
    } else if (status === "1000") {
      return;
    } else if (status === "4007") {
      let redirectUrl = sessionStorage.getItem("url");
      window.location.href = redirectUrl;
    } else if (status === "4010") {
      router.push("/denied");
    } else if (status === "5000") {
      // 自定义 -- 生成报表处，判断是否需要覆盖报表
      return {
        ...res,
        mark: "cover"
      };
    }
    MessageBox.confirm(res.message, "提示", {
      showCancelButton: false,
      type: "error"
    });
    return;
  },
  error => {
    let msg = "加载失败";
    if (error.message.indexOf("timeout") !== -1) return;
    Message.error({ message: msg });
    return Promise.reject(error);
  }
);

export default newInstance;
