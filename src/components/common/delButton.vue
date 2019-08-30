<template>
	<span class="text-link" @click="del">{{ title }}</span>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: "删除"
		},
		msg: {
			type: String,
			default: "此操作将永久删除该条数据, 是否继续?"
		}
	},
	methods: {
		del() {
			this.$confirm(this.msg, "提示", {
				confirmButtonText: "确定",
				cancelButtonText: "取消",
				type: "warning"
			})
				.then(res => {
					console.log(res, "777");

					this.$emit("del");
				})
				.catch(() => {
					this.$message({
						type: "info",
						message: "已取消删除"
					});
				});
		}
	}
};
</script>

<style lang="scss"></style>
