<template>
	<el-upload
		style="display: inline-block"
		action
		class="ml10"
		:show-file-list="false"
		:http-request="importData"
		ref="fileUpload"
		:limit="1"
		accept="application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
	>
		<el-button size="small" slot="trigger" :loading="importLoading"
			>导入表格</el-button
		>
	</el-upload>
</template>

<script>
export default {
	data() {
		return {
			action: "",
			importLoading: false
		};
	},
	props: {
		url: String
	},
	methods: {
		// 导入文件
		importData(file) {
			this.$refs.fileUpload.clearFiles();
			let fd = new FormData();
			fd.append("file", file.file);
			this.importLoading = true;
			this.$store
				.dispatch(this.url, fd)
				.then(res => {
					this.importLoading = false;
					if (!res) return;
					this.$alert("导入成功！", "提示", {
						dangerouslyUseHTMLString: true,
						type: "success"
					});
					this.$emit("refresh");
				})
				.catch(e => {
					this.importLoading = false;
					console.log(e);
				});
		}
	}
};
</script>
