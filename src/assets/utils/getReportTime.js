// 根据当前时间，判断年限
const getReportTime = () => {
  const date = new Date();
  let quarter = null;
  let year = date.getFullYear();
  const month = date.getMonth() + 1;
  if (month > 0 && month < 4) {
    quarter = 4;
    year = (year - 1).toString();
  } else if (month > 3 && month < 7) {
    quarter = 1;
    year = year.toString();
  } else if (month > 6 && month < 10) {
    quarter = 2;
    year = year.toString();
  } else {
    quarter = 3;
    year = year.toString();
  }
  return {
    quarter,
    year,
    month
  };
};
export default getReportTime;
