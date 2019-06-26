let apiURL = ''; // 通用接口

//正式服
const sh = "https://sh.baojunev.com";
//测试
// const sh = "http://mall.xwmission.com";
// const sh = "http://192.168.31.30:8074";
const sixTest = "https://sixtest.baojunev.com";
// const sixTest = "https://test.sixwe.fun";
// const sh = 'https://test.rhealane.com/'
let loc = ''
if (typeof window != "undefined") {
  loc = window.location.hostname || window.location.protocol
}
if (process.env.NODE_ENV === 'development' || loc == "file:" || loc == "localhost") {
  // 开发服务器
  apiURL = sixTest;
} else if (loc == "https://sixtest.baojunev.com") {
  // sh 测试服务器
  apiURL = sixTest;
} else {
  // 正式服
  // apiURL = sixTest;
  apiURL = sh;
}

module.exports = {
  apiURL: apiURL
}
