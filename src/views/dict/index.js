const DICT = JSON.parse(sessionStorage.getItem("dict"))
function dictFn(type) {  //字符串 接口返回的字典值
	if(!DICT) return //初始化字典为空
	if (typeof type === "string") {
		let arr = [];
		for (const key in DICT[type]) {
			arr.push({ label: DICT[type][key], value: Number(key) });
		}
		return arr;
	}
	if (typeof type === "object") { //数组 自定义的字典值
		return type.map((n, i) => {
			return { label: n, value: i };
		});
	}
}

const dictArr = {
	//业务类型
	businessType: dictFn("BUSINESS_TYPE"),
	//上下架状态
	custLevel: dictFn("CUST_LEVEL"),
	//险种分类大类
	insuranceType: dictFn("INSURANCE_PARENT_LEVEL"),

	//险种分类小类
	insuranceSonLevel: dictFn("INSURANCE_SON_LEVEL"),
	//年月日小时
	dataArr: dictFn(["小时", "日", "月", "年"]),
	//保障期限
	insuredPeriod: dictFn("INSURED_PERIOD"),
	//预约状态
	reservationStatus: dictFn("RESERVATION_STATUS"),
	//核保进展
	checkProgress: dictFn("DIPLOMATIC_TYPE"),
	//跟进方
	followPerson: dictFn("DIPLOMATIC_FOLLOWER_TYPE"),
	//跟进方
	insuranceStatus: dictFn(["已投保", "核保", "撤单", "搁置受保", "拒保", "退保", "承保生效"]),
	//保单币种
	currency: dictFn("CURRENCY"),
	//缴费期别
	paymentPeriod: dictFn("PAYMENT_PERIOD"),
	// 首期保费缴付方法
	firstPayWay: dictFn("FIRST_PAY_WAY"),
	// 红利分配
	shareOfProfit: dictFn("SHARE_OF_PROFIT"),
	// 个人证件
	identityType: dictFn("IDENTITY_TYPE"),
	// 入港证件类型
	accessIdType: dictFn(["港澳通行证", "护照"]),
	// 性别
	sex: dictFn("SEX"),
	// 婚姻状况
	maritalStatus: dictFn("MARITAL_STATUS"),
	// 教育程度
	education: dictFn("EDUCATION"),
	// 与被保人关系
	relation: dictFn("RELATION"),
	//是否保单提前生效
	isEffectiveInAdvance: dictFn(["否", "是"]),
};
export default dictArr;
