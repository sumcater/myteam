<template>
	<div class="addTag-wrap">
		<el-input
			class="ipt inp140 ml10"
			placeholder="请输入内容"
			v-model="form[index]"
			v-for="(item, index) in form"
			:key="index"
			@blur="$emit('addTag', tagArr)"
		>
			<i
				class="el-icon-close el-input__icon pointer"
				slot="suffix"
				@click="del(index)"
				v-if="tagArr.length > 1"
			></i>
		</el-input>
		<div class="ml20" size="small " @click="add" v-if="tagArr.length < 5">
			增加
		</div>
	</div>
</template>

<script>
export default {
	name: "AddTag",
	data() {
		return {
			form: { ipt1: "" }
		};
	},
	computed: {
		tagArr(val) {
			return Object.values(this.form);
		}
	},
	methods: {
		add() {
			let largeAttr = Object.keys(this.form).reduce((m, n) => {
				// console.log(m, n, +n.slice(3));
				if (+m.slice(3) < +n.slice(3)) {
					m = n;
				}
				return m;
			}, "");
			let objLen = largeAttr.slice(3);
			let label = `ipt${+objLen + 1}`;
			this.form = Object.assign({}, this.form, { [label]: "" });
		},
		del(index) {
			delete this.form[index];
			console.log(index);
			this.form = Object.assign({}, this.form);
			this.$emit("addTag", this.tagArr);
		}
	}
};
</script>
<style lang="scss">
.addTag-wrap {
	display: flex;
	justify-content: flex-start;
	.ipt,
	div {
		width: 150px;
		display: inline-block;
	}
}
</style>
