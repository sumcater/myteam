import Axios from "axios";

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
      //console.log(res);
      if (res.data.size > 22) {
        const cont = res;
        const header = cont.headers["content-disposition"];
        if (!header) return reject("导出失败");
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
      } else {
        console.info("无数据下载");
        reject("error");
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
