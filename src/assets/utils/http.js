import axios from "axios";
import { Message, MessageBox } from "element-ui";
import router from "@/router";
// import qs from "qs";

let instance = axios.create({
  timeout: process.env.VUE_APP_USE_TIMEOUT,
  baseURL: process.env.VUE_APP_USE_API,
  headers: {
    "X-Requested-With": "XMLHttpRequest"
  }
});

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    let res = response.data;
    if (res.status === "0000" || res.code === "0000") {
      if (!res.datas) return { self: 1, ...res };
      return res.datas;
    } else if (res.status === "1000" || res.code === "1000") {
      // MessageBox.confirm(res.message, "提示", {
      //   showCancelButton: false,
      //   type: "warning"
      // });
      return;
    } else if (res.status === "4007" || res.code === "4007") {
      let redirectUrl = localStorage.getItem("redirectUrl");
      window.location.href = redirectUrl;
    } else if (res.status == "4010" || res.code === "4010") {
      router.push("/denied");
    } else if (res.status === "6666" || res.code === "5000") {
      // 自定义 -- 生成报表处，判断是否需要覆盖报表
      return {
        ...res.data,
        mark: "cover"
      };
    }
    MessageBox.confirm(res.message, "提示", {
      showCancelButton: false,
      type: "error"
    });
  },
  error => {
    let msg = "加载失败";
    if (error.message.indexOf("timeout") !== -1) return;
    Message.error({ message: msg });
    return Promise.reject(error);
  }
);

export default instance;
