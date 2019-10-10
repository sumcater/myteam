<template>
	<div>
		dynamicQueryExecuteConfig
		<br />vue数据双向绑定
		<br />

		<!-- 第一种  该方法，一定要注意，props的值一定要定义为‘value’，不然不起作用，提交给父组件的事件名为‘input’-->
		<vmodel v-model="ss"></vmodel>

		<!-- 等价于 -->
		<vmodel :value="ss" @input="value => {ss=value}"></vmodel>
		<!-- 因此，在自定义组件中使用 v-model 指令，那么就意味着：
		接收一个 value prop
		触发 input 事件，并传入新值
		利用 $emit 触发 input 事件：
		1
		this.$emit('input', value);-->

		<!-- 第二种  官网推荐方法 -->
		<vmodel2 v-model="parent"></vmodel2>
	</div>
</template>
<script>
import vmodel from "@/components/vmodel";
import vmodel2 from "@/components/vmodel2";
export default {
	components: { vmodel, vmodel2 },
	data() {
		return {
			ss: 12,
			parent: 11
		};
	}
};
</script>