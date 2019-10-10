<template>
	<div>
		<p>{{msg}}</p>
		<button @click="changeValue">在子组件内修改prop值</button>
	</div>
</template>

<script>
export default {
	model: {
		// 使用model， 这儿2个属性，prop属性说，我要将msg作为该组件被使用时（此处为aa组件被父组件调用）v-model能取到的值，event说，我emit ‘cc’ 的时候，参数的值就是父组件v-model收到的值。
		prop: "msg",
		event: "change"
	},
	props: {
		msg: ""
	},
	methods: {
		changeValue() {
			this.$emit("change", this.msg++);
		}
	}
};
</script>