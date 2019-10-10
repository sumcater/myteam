<template>
	<div>
		dynamicQueryExecuteConfig
		<br />vue数据双向绑定
		<br />
		<vmodel v-model="value"></vmodel>
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
			value: 12,
			parent: 11
		};
	}
};
</script>