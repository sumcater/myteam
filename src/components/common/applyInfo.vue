<template>
	<div class="info-wrap">
		<top
			:title="info[infoName].title"
			icon
			class="fs14"
			@iconClick="boxStatus = !boxStatus"
		></top>
		<el-collapse-transition>
			<div class="box" v-show="boxStatus">
				<div class="tip" v-if="info[infoName].tip.length">
					<p v-for="(item, index) in info[infoName].tip" :key="index">
						※ {{ item }}
					</p>
				</div>

				<slot name="form"></slot>
				<div class="cut"></div>
			</div>
		</el-collapse-transition>
	</div>
</template>

<script>
import top from "views/common/top";
export default {
	name: "Info",
	props: {
		infoName: {
			type: String
		}
	},
	data() {
		return {
			boxStatus: false,
			info: {
				reservationInfo: {
					title: "预约信息",
					tip: [
						"必须于预计签约前三个工作日填写完整签约预约表！",
						"原则上签约时间为每周一至五；如须安排周六，可依各保险公司规定协助安排签约，惟请提前告知，以利后续作业。"
					]
				},
				plan: {
					title: "计划内容",
					tip: [
						"中国籍客户(AIA)：首期保费必须亲赴AIA缴付超过年度总应缴保费的51%，剩余差额保费可接受客户本人国内银行账户电汇至AIA。"
					]
				},
				applicantInfo: {
					title: "投保人信息",
					tip: ["月收入＊12个月必须『大于』年缴保费的3.5倍以上。"]
				},
				InsuredInfo: {
					title: "被保人信息",
					tip: [
						"被保人为本人，不需要重复填写",
						"18周岁以下未成年人或学生，不需要提供职业信息。"
					]
				},
				beneficiary: {
					title: "受益人资料",
					tip: ["可以添加多个受益人，受益人的收益百分比相加为100%即可。"]
				},
				record: {
					title: "投保记录",
					tip: [
						"投保记录（包含已投保及正在申请中的任何保险，并请换算为等值港币）。"
					]
				},
				healthNotify: {
					title: "健康告知",
					tip: ["危疾险种需要提供。"]
				},
				healthInfo: {
					title: "健康资料",
					tip: []
				}
			}
		};
	},
	components: {
		top
	}
};
</script>
<style lang="scss" scoped>
.info-wrap {
	.tip {
		background-color: $lightGray;
		margin: 0 0 10px 20px;
		padding: 10px 0 10px 20px;
		p {
			line-height: 24px;
		}
	}
	.cut {
		min-width: calc(100vw - 265px);
		height: 10px;
		background-color: #f0f3f9;
		margin-left: -10px;
	}
}
</style>
