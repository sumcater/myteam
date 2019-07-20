/**
 * 验证规则
 */
var validator = {
  //限制字符长度 任意字符
  length(n) {
    return {
      max: n,
      message: `请输入${n}位以内的字符`,
      required: false
    }
  },
  //限制数字长度 仅数字
  numLength(n) {
    return {
      // pattern: /^\d{0,n}$/,
      pattern: new RegExp("^\\d{0," + n + "}$"),
      message: `请输入${n}位以内的数字`,
      required: false
    }
  },
  //限制文字长度 仅文字
  strLength(n) {
    return {
      // pattern: /^\w{0,18}$/,
      pattern: new RegExp("^\\w{0," + n + "}$"),
      message: `请输入${n}位以内汉字`,
      required: false
    }
  },
  ruleNotEmptyBlur: { required: true, message: "不能为空", trigger: "blur" },
  ruleNotEmptyChange: {
    required: true,
    message: "不能为空",
    trigger: "change"
  },
  //请输入整数或两位小数的数字
  ruleFundFlo: {
    pattern: /^(([1-9]{1}\d{0,5})|(0{1}))(\.\d{0,2})?$/,
    message: "请输入6位以内的数字（保留两位小数）",
    required: false
  },
  //请输入整数或两位小数的数字
  ruleFundLongFlo: {
    pattern: /^(([1-9]{1}\d{0,17})|(0{1}))(\.\d{0,2})?$/,
    message: "请输入18位以内的数字（保留两位小数）",
    required: false
  },
  //请输入整数或两位小数的数字
  ruleProjectPeriod: {
    pattern: /^(([1-9]{1}\d{0,4})|(0{1}))(\.\d{0,2})?$/,
    message: "请输入5位以内的数字（保留两位小数）",
    required: false
  },
  //请输入数字
  ruleFundNum: {
    pattern: /^[0-9]+([.]{1}[0-9]{1,2})?$/,
    message: "请输入数字",
    required: false
  },
  // 基金代码
  ruleFundCode: {
    pattern: /^\d{0,6}$/,
    message: "请输入6位以内的数字",
    required: false
  },
  // 基金名称
  rulePfundName: {
    max: 40,
    message: "请输入40位以内的字符",
    required: false
  },
  // 客户名称
  ruleClientName: {
    max: 60,
    message: "请输入60位以内的字符",
    required: false
  },
  // 公募客户编号
  rulePfundClientNo: {
    pattern: /^\d{0,12}$/,
    message: "请输入12位以内的数字",
    required: false
  },

  // 统一客户编号
  ruleUnitClientNo: {
    pattern: /^\d{0,20}$/,
    message: "请输入20位以内的数字",
    required: false
  },

  // 交易账号
  ruleExchangeAccount: {
    pattern: /^\d{0,17}$/,
    message: "请输入17位以内的数字",
    required: false
  },
  length10: {
    max: 10,
    message: "请输入10位以内的字符",
    required: false
  },
  length24: {
    max: 24,
    message: "请输入24位以内的字符",
    required: false
  },
  ruleAgencyName: {
    max: 100,
    message: "请输入100位以内的字符",
    required: false
  },
  ruleUnitSocialCreditCode: {
    pattern: /^\d{0,18}$/,
    message: "请输入18位以内的数字",
    required: false
  },
  ruleLogoutReason: {
    max: 100,
    message: "请输入100位以内的字符",
    required: false
  },
  ruleShowProductCode: {
    max: 40,
    message: "请输入40位以内的字符",
    required: false
  },
  ruleShowCityCode: {
    max: 20,
    message: "请输入20位以内的字符",
    required: false
  },
  ruleShowProductName: {
    max: 100,
    message: "请输入100位以内的字符",
    required: false
  },
  ruleShowIssueScale: {
    pattern: /^[0-9.]{0,16}$/,
    required: false,
    message: "请输入合法长度字符"
  },
  ruleShowDepositStatus: {
    pattern: /^\d{0,2}$/,
    message: "请输入2位数以内字符",
    required: false
  },
  ruleShowCoName: {
    max: 50,
    message: "请输入50位以内字符",
    required: false
  },
  ruleShowCoCreditCode: {
    pattern: /^\w{0,18}$/,
    message: "请输入18位以内字符",
    required: false
  },
  ruleShowRemark: {
    max: 100,
    message: "请输入100位以内的字符",
    required: false
  },
  ruleShowRemarkChars: {
    max: 200,
    message: "请输入200位以内的字符",
    required: false
  },
  ruleCheckState: {
    required: true,
    message: "请输入复核说明"
  }
};

export default validator;
