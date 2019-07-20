// 提示消息弹窗
import { MessageBox } from "element-ui";
const message = {
  alert: (content, title = "提示", cb) => {
    MessageBox.alert(content, title, {
      confirmButtonText: "确定",
      callback: action => {
        cb && cb(action);
      }
    });
  },
  confirm(
    content,
    title = "提示",
    type = "warning",
    showCancelButton = false,
    cb
  ) {
    MessageBox.confirm(content, title, {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type,
      showCancelButton: showCancelButton
    })
      .then(() => {
        cb && cb("confirm");
        ``;
      })
      .catch(() => {
        cb && cb("cancel");
      });
  }
};

export default message;
