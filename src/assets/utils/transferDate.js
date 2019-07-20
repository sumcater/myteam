const dayjs = require("dayjs");

/**
 *
 * @param {Date} date 日期
 */
export const formatYmdhs = function(date) {
  if (date) return dayjs(date).format("YYYY-MM-DD HH:mm:ss");
  return;
};

/**
 *
 * @param {date} date 日期
 */
export const formatYmd = function(date) {
  if (date) return dayjs(date).format("YYYY-MM-DD");
  return;
};

// 开始时间限制
export const beginDatePicker = () => {
  const { endDate } = this.searchForm;
  const initEnd = endDate ? endDate : new Date();
  return {
    disabledDate(time) {
      // 输入的日期必须小于等于另一个输入框
      return time <= initEnd.getTime();
    }
  };
};

// 结束日期限制
export const endDatePicker = () => {
  const { beginDate } = this.searchForm;
  const initBegin = beginDate ? beginDate : new Date();
  return {
    disabledDate(time) {
      // 输入日期必须大于等于另一个输入框
      return time >= initBegin.getTime();
    }
  };
};

//newDate()日期格式转化
Date.prototype.Format = function(fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );

  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
};
