<template>
	<el-menu class="tac">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>活动管理</el-breadcrumb-item>
		</el-breadcrumb>
		<el-menu
			class="el-menu-vertical-demo"
			@open="handleOpen"
			unique-opened
			@close="handleClose"
			@select="handleSelect"
			router
		>
			<!-- <el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>数据服务动态查询</span>
				</template>
				<el-menu-item index="1-1">新增查询</el-menu-item>
				<el-menu-item index="1-2">审核查询</el-menu-item>
				<el-menu-item index="1-3">执行查询</el-menu-item>
				<el-menu-item index="1-4">Sql动态查询</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>公募数据</span>
				</template>
				<el-submenu index="2-1">
					<template slot="title">基础数据查询</template>
					<el-menu-item index="2-1-1">交易确认明细</el-menu-item>
					<el-menu-item index="2-1-2">客户份额明细</el-menu-item>
					<el-menu-item index="2-1-3">历史余额明细</el-menu-item>
				</el-submenu>
				<el-submenu index="2-2">
					<template slot="title">送报数据查询</template>
					<el-menu-item index="2-2-1">公募产品明细表</el-menu-item>
				</el-submenu>
			</el-submenu>-->
			<el-submenu :index="firstMenu.resUrl" v-for="firstMenu in menuArr" :key="firstMenu.id">
				<template slot="title">
					<!-- <i class="el-icon-location"></i> -->
					<i :class="'el-icon-'+firstMenu.icon"></i>
					<span>{{firstMenu.resName}}</span>
				</template>
				<template v-if="firstMenu.children&&firstMenu.children.length">
					<el-menu-item
						:index="firstMenu.resUrl+'/'+secondMenu.resUrl"
						v-if="!secondMenu.children.length"
						v-for="secondMenu in firstMenu.children"
						:key="secondMenu.id"
					>{{secondMenu.resName}}</el-menu-item>
					<el-submenu
						:index="firstMenu.resUrl+'/'+secondMenu.resUrl"
						v-for="secondMenu in firstMenu.children"
						:key="secondMenu.id"
						v-if="secondMenu.children.length"
					>
						<template slot="title">
							<!-- <i class="el-icon-location"></i> -->
							<span>{{secondMenu.resName}}</span>
						</template>
						<el-menu-item
							:index="firstMenu.resUrl+'/'+secondMenu.resUrl+'/'+thirdMenu.resUrl"
							v-for="thirdMenu in secondMenu.children"
							:key="thirdMenu.id"
						>{{thirdMenu.resName}}</el-menu-item>
					</el-submenu>
				</template>
			</el-submenu>
		</el-menu>
	</el-menu>
</template>

<script>
export default {
	data() {
		return {
			menuArr: [
				{
					createId: "H000000",
					createTime: "2019-08-15 14:42:45",
					updateId: "H000000",
					updateTime: "2019-08-15 14:42:45",
					id: 26490,
					system: 30,
					resName: "数据服务动态查询",
					parentId: 0,
					resKey: "dynamicQuery",
					resType: 0,
					resUrl: "dynamicQuery",
					resLevel: 1,
					resSort: 1,
					description: "数据服务动态查询",
					icon: "setting",
					children: [
						{
							createId: "H000000",
							createTime: "2019-08-15 14:42:45",
							updateId: "H000000",
							updateTime: "2019-08-15 14:42:45",
							id: 26491,
							system: 30,
							resName: "新增查询",
							parentId: 26490,
							resKey: "dynamicQueryAddConfig",
							resType: 1,
							resUrl: "dynamicQueryAddConfig",
							resLevel: 2,
							resSort: 1,
							description: "新增查询",
							icon: null,
							children: [],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-08-15 14:42:45",
							updateId: "H000000",
							updateTime: "2019-08-15 14:42:45",
							id: 26493,
							system: 30,
							resName: "审核查询",
							parentId: 26490,
							resKey: "dynamicQueryVerifyConfig",
							resType: 1,
							resUrl: "dynamicQueryVerifyConfig",
							resLevel: 2,
							resSort: 2,
							description: "审核查询",
							icon: null,
							children: [],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-08-15 14:42:45",
							updateId: "H000000",
							updateTime: "2019-08-15 14:42:45",
							id: 26495,
							system: 30,
							resName: "执行查询",
							parentId: 26490,
							resKey: "dynamicQueryExecuteConfig",
							resType: 1,
							resUrl: "dynamicQueryExecuteConfig",
							resLevel: 2,
							resSort: 3,
							description: "执行查询",
							icon: null,
							children: [],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-08-15 14:42:45",
							updateId: "H000000",
							updateTime: "2019-08-15 14:42:45",
							id: 26498,
							system: 30,
							resName: "SQL动态查询",
							parentId: 26490,
							resKey: "dynamicQueryParamsExecute",
							resType: 1,
							resUrl: "dynamicQueryParamsExecute",
							resLevel: 2,
							resSort: 4,
							description: "SQL动态查询",
							icon: null,
							children: [],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-01-02 18:18:34",
					updateId: "H024280",
					updateTime: "2019-01-03 21:13:08",
					id: 200365,
					system: 30,
					resName: "公募数据",
					parentId: 0,
					resKey: "publicDataService",
					resType: 0,
					resUrl: "publicDataService",
					resLevel: 1,
					resSort: 1,
					description: "公募数据",
					icon: "set-up",
					children: [
						{
							createId: "H000000",
							createTime: "2019-01-02 18:18:34",
							updateId: "H000000",
							updateTime: "2019-01-02 18:18:34",
							id: 200367,
							system: 30,
							resName: "基础数据查询",
							parentId: 200365,
							resKey: "publicDataFund",
							resType: 0,
							resUrl: "publicDataFund",
							resLevel: 2,
							resSort: 1,
							description: "基础数据查询",
							icon: null,
							children: [
								{
									createId: "H000000",
									createTime: "2019-01-02 18:18:34",
									updateId: "H000000",
									updateTime: "2019-01-02 18:18:34",
									id: 200368,
									system: 30,
									resName: "交易确认明细",
									parentId: 200367,
									resKey: "exchangeComfirmnDetail",
									resType: 1,
									resUrl: "exchangeComfirmnDetail",
									resLevel: 3,
									resSort: 1,
									description: "交易确认明细",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-01-02 18:18:34",
									updateId: "H000000",
									updateTime: "2019-01-02 18:18:34",
									id: 200372,
									system: 30,
									resName: "客户份额明细",
									parentId: 200367,
									resKey: "clientShareDetail",
									resType: 1,
									resUrl: "clientShareDetail",
									resLevel: 3,
									resSort: 2,
									description: "客户份额明细",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-01-02 18:18:34",
									updateId: "H000000",
									updateTime: "2019-01-02 18:18:34",
									id: 200376,
									system: 30,
									resName: "历史余额明细",
									parentId: 200367,
									resKey: "historyBalanceDetail",
									resType: 1,
									resUrl: "historyBalanceDetail",
									resLevel: 3,
									resSort: 3,
									description: "历史余额明细",
									icon: null,
									children: [],
									flag: false
								}
							],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-01-02 18:18:34",
							updateId: "H000000",
							updateTime: "2019-01-02 18:18:34",
							id: 200380,
							system: 30,
							resName: "报送数据管理",
							parentId: 200365,
							resKey: "publicDataSubmit",
							resType: 0,
							resUrl: "publicDataSubmit",
							resLevel: 2,
							resSort: 2,
							description: "报送数据管理",
							icon: null,
							children: [
								{
									createId: "H000000",
									createTime: "2019-01-02 18:18:34",
									updateId: "H000000",
									updateTime: "2019-01-02 18:18:34",
									id: 200381,
									system: 30,
									resName: "公募产品明细表",
									parentId: 200380,
									resKey: "pfundDetailManage",
									resType: 1,
									resUrl: "pfundDetailManage",
									resLevel: 2,
									resSort: 1,
									description: "公募产品明细表",
									icon: null,
									children: [],
									flag: false
								}
							],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-01-24 10:19:34",
					updateId: "H000000",
					updateTime: "2019-01-24 10:19:34",
					id: 200633,
					system: 30,
					resName: "客户画像",
					parentId: 0,
					resKey: "customerPersonalService",
					resType: 0,
					resUrl: "customerPersonalService",
					resLevel: 1,
					resSort: 1,
					description: "公募数据",
					icon: "postcard",
					children: [
						{
							createId: "H000000",
							createTime: "2019-01-24 10:19:34",
							updateId: "H000000",
							updateTime: "2019-01-24 10:19:34",
							id: 200634,
							system: 30,
							resName: "私募交易数据",
							parentId: 200633,
							resKey: "privateTransData",
							resType: 1,
							resUrl: "privateTransData",
							resLevel: 2,
							resSort: 1,
							description: "公募数据",
							icon: null,
							children: [],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-02-18 16:14:06",
							updateId: "H000000",
							updateTime: "2019-02-18 16:14:06",
							id: 210910,
							system: 30,
							resName: "营销活动统计",
							parentId: 200633,
							resKey: "activityCountData",
							resType: 1,
							resUrl: "activityCountData",
							resLevel: 2,
							resSort: 1,
							description: "营销活动统计",
							icon: null,
							children: [],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-02-18 14:50:05",
					updateId: "H000000",
					updateTime: "2019-02-18 14:50:05",
					id: 112237262,
					system: 30,
					resName: "人力数据",
					parentId: 0,
					resKey: "personalResourceData",
					resType: 0,
					resUrl: "personalResourceData",
					resLevel: 1,
					resSort: 1,
					description: "人力数据",
					icon: "time",
					children: [
						{
							createId: "H000000",
							createTime: "2019-02-18 14:50:05",
							updateId: "H000000",
							updateTime: "2019-02-18 14:50:05",
							id: 112237263,
							system: 30,
							resName: "数据查询",
							parentId: 112237262,
							resKey: "personalResourceDataSelect",
							resType: 0,
							resUrl: "personalResourceDataSelect",
							resLevel: 2,
							resSort: 1,
							description: "数据查询",
							icon: null,
							children: [
								{
									createId: "H000000",
									createTime: "2019-02-18 14:50:05",
									updateId: "H000000",
									updateTime: "2019-02-18 14:50:05",
									id: 112237264,
									system: 30,
									resName: "员工信息查询",
									parentId: 112237263,
									resKey: "prEmpInformationSelect",
									resType: 1,
									resUrl: "prEmpInformationSelect",
									resLevel: 3,
									resSort: 1,
									description: "员工信息查询",
									icon: null,
									children: [],
									flag: false
								}
							],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-02-18 14:50:05",
							updateId: "H000000",
							updateTime: "2019-02-18 14:50:05",
							id: 112237268,
							system: 30,
							resName: "报送管理",
							parentId: 112237262,
							resKey: "personalResourceReportManage",
							resType: 0,
							resUrl: "personalResourceReportManage",
							resLevel: 2,
							resSort: 1,
							description: "报送管理",
							icon: null,
							children: [
								{
									createId: "H000000",
									createTime: "2019-02-18 14:50:05",
									updateId: "H000000",
									updateTime: "2019-02-18 14:50:05",
									id: 112237269,
									system: 30,
									resName: "总部部门及员工",
									parentId: 112237268,
									resKey: "prDeptAndEmpSelect",
									resType: 1,
									resUrl: "prDeptAndEmpSelect",
									resLevel: 3,
									resSort: 1,
									description: "总部部门及员工",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-02-18 14:50:05",
									updateId: "H000000",
									updateTime: "2019-02-18 14:50:05",
									id: 112237278,
									system: 30,
									resName: "分支机构相关数据",
									parentId: 112237268,
									resKey: "prSaleDeptDataSelect",
									resType: 1,
									resUrl: "prSaleDeptDataSelect",
									resLevel: 3,
									resSort: 1,
									description: "分支机构相关数据",
									icon: null,
									children: [],
									flag: false
								}
							],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-06-18 13:35:12",
					updateId: "H000000",
					updateTime: "2019-06-18 13:35:12",
					id: 111111113800,
					system: 30,
					resName: "数据服务业绩报表",
					parentId: 0,
					resKey: "dsAchievementReport",
					resType: 0,
					resUrl: "dsAchievementReportMenu",
					resLevel: 1,
					resSort: 1,
					description: "数据服务业绩报表",
					icon: "watch",
					children: [
						{
							createId: "H000000",
							createTime: "2019-06-18 13:35:12",
							updateId: "H000000",
							updateTime: "2019-06-18 15:46:47",
							id: 111111113801,
							system: 30,
							resName: "基础数据查询",
							parentId: 111111113800,
							resKey: "dsAchievementReportMenu",
							resType: 1,
							resUrl: "dsAchievementReportMenu",
							resLevel: 2,
							resSort: 1,
							description: "基础数据查询",
							icon: "",
							children: [],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-06-18 13:35:12",
					updateId: "H000000",
					updateTime: "2019-06-18 13:35:12",
					id: 111111113804,
					system: 30,
					resName: "数据服务固定报表",
					parentId: 0,
					resKey: "dsRegularReport",
					resType: 0,
					resUrl: "dsRegularReport",
					resLevel: 1,
					resSort: 1,
					description: "数据服务固定报表",
					icon: "soccer",
					children: [
						{
							createId: "H000000",
							createTime: "2019-06-18 13:35:12",
							updateId: "H000000",
							updateTime: "2019-06-18 13:35:12",
							id: 111111113805,
							system: 30,
							resName: "整体走势报表",
							parentId: 111111113804,
							resKey: "dsEntiretyTrendReportMenu",
							resType: 1,
							resUrl: "dsEntiretyTrendReportMenu",
							resLevel: 2,
							resSort: 1,
							description: "整体走势报表",
							icon: null,
							children: [],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-06-18 13:35:12",
							updateId: "H000000",
							updateTime: "2019-06-18 13:35:12",
							id: 111111113807,
							system: 30,
							resName: "产品晚报",
							parentId: 111111113804,
							resKey: "productEveningReport",
							resType: 0,
							resUrl: "productEveningReport",
							resLevel: 2,
							resSort: 2,
							description: "产品晚报",
							icon: null,
							children: [
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000013",
									updateTime: "2019-06-24 11:02:27",
									id: 111111113808,
									system: 30,
									resName: "私募发行晚报明细",
									parentId: 111111113807,
									resKey: "privateEveningReportMenu",
									resType: 1,
									resUrl: "privateEveningReportMenu",
									resLevel: 3,
									resSort: 1,
									description: "私募发行晚报明细",
									icon: "",
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000013",
									updateTime: "2019-06-24 11:02:58",
									id: 111111113811,
									system: 30,
									resName: "私募发行晚报概览",
									parentId: 111111113807,
									resKey: "privateIssueMenu",
									resType: 1,
									resUrl: "privateIssueMenu",
									resLevel: 3,
									resSort: 2,
									description: "私募发行晚报概览",
									icon: "",
									children: [],
									flag: false
								}
							],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-06-18 13:35:12",
							updateId: "H000000",
							updateTime: "2019-06-18 13:35:12",
							id: 111111113814,
							system: 30,
							resName: "营销晚报",
							parentId: 111111113804,
							resKey: "marketingEveningReport",
							resType: 0,
							resUrl: "marketingEveningReport",
							resLevel: 2,
							resSort: 3,
							description: "营销晚报",
							icon: null,
							children: [
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113815,
									system: 30,
									resName: "私募营销晚报",
									parentId: 111111113814,
									resKey: "privatemarketingEveningReport",
									resType: 1,
									resUrl: "privatemarketingEveningReport",
									resLevel: 3,
									resSort: 1,
									description: "私募营销晚报",
									icon: null,
									children: [],
									flag: false
								}
							],
							flag: false
						},
						{
							createId: "H000000",
							createTime: "2019-06-18 13:35:12",
							updateId: "H000000",
							updateTime: "2019-06-18 13:35:12",
							id: 111111113828,
							system: 30,
							resName: "企金业绩周报",
							parentId: 111111113804,
							resKey: "enterpriseFundWeekReport",
							resType: 0,
							resUrl: "enterpriseFundWeekReport",
							resLevel: 2,
							resSort: 4,
							description: "企金业绩周报",
							icon: null,
							children: [
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113829,
									system: 30,
									resName: "机构客户认购中融隆晟业绩走势",
									parentId: 111111113828,
									resKey: "subZRLSTrendMenu",
									resType: 1,
									resUrl: "subZRLSTrendMenu",
									resLevel: 3,
									resSort: 1,
									description: "机构客户认购中融隆晟业绩走势",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113832,
									system: 30,
									resName: "本月区域机构客户中融隆晟成交情况",
									parentId: 111111113828,
									resKey: "curMonthZRLSDealMenu",
									resType: 1,
									resUrl: "curMonthZRLSDealMenu",
									resLevel: 3,
									resSort: 2,
									description: "本月区域机构客户中融隆晟成交情况",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113835,
									system: 30,
									resName: "机构客户中融隆晟期限区间成交情况",
									parentId: 111111113828,
									resKey: "subZRLSTermIntervalMenu",
									resType: 1,
									resUrl: "subZRLSTermIntervalMenu",
									resLevel: 3,
									resSort: 3,
									description: "机构客户中融隆晟期限区间成交情况",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113838,
									system: 30,
									resName: "机构客户认购JJS业绩走势",
									parentId: 111111113828,
									resKey: "subJJSTrendMenu",
									resType: 1,
									resUrl: "subJJSTrendMenu",
									resLevel: 3,
									resSort: 4,
									description: "机构客户认购JJS业绩走势",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113841,
									system: 30,
									resName: "本月区域机构客户JJS成交情况",
									parentId: 111111113828,
									resKey: "curMonthJJSDealMenu",
									resType: 1,
									resUrl: "curMonthJJSDealMenu",
									resLevel: 3,
									resSort: 5,
									description: "本月区域机构客户JJS成交情况",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113844,
									system: 30,
									resName: "机构客户JJS期限区间成交情况",
									parentId: 111111113828,
									resKey: "subJJSTermIntervalMenu",
									resType: 1,
									resUrl: "subJJSTermIntervalMenu",
									resLevel: 3,
									resSort: 6,
									description: "机构客户JJS期限区间成交情况",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113847,
									system: 30,
									resName: "机构客户认购现金管理业绩走势",
									parentId: 111111113828,
									resKey: "subCashManageTrendMenu",
									resType: 1,
									resUrl: "subCashManageTrendMenu",
									resLevel: 3,
									resSort: 7,
									description: "机构客户认购现金管理业绩走势",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113850,
									system: 30,
									resName: "本月区域机构客户现金管理成交情况",
									parentId: 111111113828,
									resKey: "curMonthCashManageDealMenu",
									resType: 1,
									resUrl: "curMonthCashManageDealMenu",
									resLevel: 3,
									resSort: 8,
									description: "本月区域机构客户现金管理成交情况",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113853,
									system: 30,
									resName: "本月机构客户现金管理项目成交情况",
									parentId: 111111113828,
									resKey: "curMonthCashManageProjectDealMenu",
									resType: 1,
									resUrl: "curMonthCashManageProjectDealMenu",
									resLevel: 3,
									resSort: 9,
									description: "本月机构客户现金管理项目成交情况",
									icon: null,
									children: [],
									flag: false
								},
								{
									createId: "H000000",
									createTime: "2019-06-18 13:35:12",
									updateId: "H000000",
									updateTime: "2019-06-18 13:35:12",
									id: 111111113856,
									system: 30,
									resName: "周度/月度/季度/年度区域企金期间业绩对比",
									parentId: 111111113828,
									resKey: "enterpriseFundCompareMenu",
									resType: 1,
									resUrl: "enterpriseFundCompareMenu",
									resLevel: 3,
									resSort: 10,
									description: "周度/月度/季度/年度区域企金期间业绩对比",
									icon: null,
									children: [],
									flag: false
								}
							],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-07-18 15:00:06",
					updateId: "H000000",
					updateTime: "2019-07-18 15:00:06",
					id: 111111113874,
					system: 30,
					resName: "财务数据",
					parentId: 0,
					resKey: "financialData",
					resType: 0,
					resUrl: "financialData",
					resLevel: 1,
					resSort: 1,
					description: "财务数据",
					icon: "basketball",
					children: [
						{
							createId: "H000000",
							createTime: "2019-07-18 15:00:06",
							updateId: "H000000",
							updateTime: "2019-07-18 15:00:06",
							id: 111111113875,
							system: 30,
							resName: "明泽私募现金类销售核算表",
							parentId: 111111113874,
							resKey: "mingzePrivateCashSalesAccounting",
							resType: 1,
							resUrl: "mingzePrivateCashSalesAccounting",
							resLevel: 2,
							resSort: 1,
							description: "明泽私募现金类销售核算表",
							icon: null,
							children: [],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-01-02 18:18:34",
					updateId: "H000000",
					updateTime: "2019-01-02 18:18:34",
					id: 200390,
					system: 30,
					resName: "报表统计",
					parentId: 0,
					resKey: "publicDataReport",
					resType: 0,
					resUrl: "publicDataReport",
					resLevel: 1,
					resSort: 2,
					description: "报表统计",
					icon: "sunny",
					children: [
						{
							createId: "H000000",
							createTime: "2019-01-02 18:18:34",
							updateId: "H000000",
							updateTime: "2019-01-02 18:18:34",
							id: 200391,
							system: 30,
							resName: "集团报送进度管理",
							parentId: 200390,
							resKey: "progressManage",
							resType: 1,
							resUrl: "progressManage",
							resLevel: 2,
							resSort: 1,
							description: "集团报送进度管理",
							icon: null,
							children: [],
							flag: false
						}
					],
					flag: false
				},
				{
					createId: "H000000",
					createTime: "2019-01-02 18:18:34",
					updateId: "H000000",
					updateTime: "2019-01-02 18:18:34",
					id: 200397,
					system: 30,
					resName: "基础信息",
					parentId: 0,
					resKey: "publicDataInstitution",
					resType: 0,
					resUrl: "publicDataInstitution",
					resLevel: 1,
					resSort: 3,
					description: "基础信息",
					icon: "tableware",
					children: [
						{
							createId: "H000000",
							createTime: "2019-01-02 18:18:34",
							updateId: "H000000",
							updateTime: "2019-01-02 18:18:34",
							id: 200398,
							system: 30,
							resName: "合作机构维护",
							parentId: 200397,
							resKey: "insitutionManage",
							resType: 1,
							resUrl: "insitutionManage",
							resLevel: 2,
							resSort: 1,
							description: "合作机构维护",
							icon: null,
							children: [],
							flag: false
						}
					],
					flag: false
				}
			]
		};
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		},
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		}
	}
};
</script>
<style lang="">
.tac {
	width: 300px;
	position: absolute;
	left: 0;
	/* margin: 20px; */
	background-color: silver;
}
.el-menu {
	background-color: silver;
	border-right: none;
}
.el-menu > li {
	background-color: #fff;
	border-radius: 10px;
	margin: 10px 0;
}
.tac > ul > li {
	background-color: #fff;
	border-radius: 10px;
	margin: 10px 0;
}
li.el-submenu {
	border-radius: 0;
	margin: 0;
}
ul.el-menu--inline > li {
	border-radius: 0;
	margin: 0;
	position: relative;
}
ul.el-menu--inline > li::after {
	content: "";
	position: absolute;
	/* bottom: 0; */
	left: 20px;
	right: 20px;
	height: 1px;
	background-color: #eee;
}
ul.el-menu--inline > li:last-child {
	border-radius: 0 0 10px 10px;
}
ul.el-menu--inline {
	/* border-radius: 0 0 5px 5px; */
}
.el-submenu [class^="el-icon-"] {
	font-size: 26px;
	color: #409eff;
}
.el-submenu__title i {
	color: #409eff;
}
.el-icon-arrow-down:before {
	font-size: 16px;
	content: "\e790";
}

.el-submenu__title:focus,
.el-submenu__title:hover {
	border-radius: 10px;
}
</style>