<template>
	<div>
		<!--  使用时有v-model属性，value默认值‘child’ 不会被渲染，而是v-model绑定的parent值被渲染，这儿value会被赋值为v-model绑定的parent的值。 -->
		<p>{{value}}</p>
		<button @click="changeValue">在子组件内修改v-model值，并且动态响应给父组件</button>
	</div>
</template> 
<script>
export default {
	props: {
		value: {
			// 必须要使用value
			default: "child"
		}
	},
	methods: {
		changeValue() {
			let newValue = "2";
			this.$emit("input", newValue); // 这儿必须用input 发送数据，发送的数据会被父级v-model=“parent”接收到，再被value=parent传回来。
		}
	}
};
//  该方法，一定要注意，props的值一定要定义为‘value’，不然不起作用，提交给父组件的事件名为‘input’
</script>
