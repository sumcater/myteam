import Axios from "axios";
import router from "@/router";

/**
 * @description 下载文件
 * @author xiaoyang
 * @date 2018-11-08
 * @export
 * @param {String} url 下载文件地址
 * @param {Object} [params={}] 下载文件需要传递的参数
 * @param {string} [name="附件"] 下载文件的名称
 */
export default function download(url, params = {}, name = "附件", isQuery) {
  return new Promise((resolve, reject) => {
    getData(url, params, isQuery).then(res => {
      console.log(res);
      const cont = res;
      const header = cont.headers["content-disposition"];
      const code = cont.headers["x-response-code"];
      const msg = cont.headers["x-response-message"];
      if (code === "0000") {
        const prefix = header.match(/\.\w+/);
        const blob = new Blob([cont.data]);
        const fileName = `${name}${prefix}`;
        if ("download" in document.createElement("a")) {
          const link = document.createElement("a");
          link.download = fileName;
          link.style.display = "none";
          link.href = URL.createObjectURL(blob);
          document.body.appendChild(link);
          link.click();
          URL.revokeObjectURL(link.href);
          document.body.removeChild(link);
          resolve("success");
        } else {
          navigator.msSaveBlob(blob, fileName);
        }
      } else if (code === "1000" || code === "4000") {
        return reject(decodeURIComponent(msg));
      } else if (code === "4010") {
        router.push("/denied");
      } else {
        return reject(msg);
      }
    });
  });
}

/**
 * @description 文件下载返回blob数据
 * @author xiaoyang
 * @date 2018-11-08
 * @param {String} url 下载文件地址
 * @param {Object} params 下载文件参数
 */
function getData(url, params, isQuery) {
  const category = isQuery ? "params" : "data";
  return new Promise(resolve => {
    Axios({
      url,
      method: "POST",
      responseType: "blob",
      [category]: params
    }).then(res => {
      console.log(res);
      resolve(res);
    });
  });
}
