<template>
	<div class="tableForm-wrap" style="max-width:1000px">
		<el-table
			ref="tableData"
			border
			:data="tableData"
			class="tb-edit fs12"
			header-row-class-name="header-row"
		>
			<el-table-column
				:label="item.label"
				align="center"
				v-for="(item, index) in formArr"
				:key="index"
				:min-width="item.width || '120px'"
			>
				<template slot-scope="scope" v-if="item.aa === 'sel'">
					<!-- <el-input v-if="!scope.row[item.aa]" size="mini" v-model="scope.row[item.value]" placeholder="请输入"></el-input> -->
					<el-select
						placeholder="险种分类"
						class="sel140 ml10"
						v-model="scope.row[item.value]"
					>
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
					<!-- <span>{{ scope.row[item.value] }}</span> -->
				</template>
				<template slot-scope="scope" v-if="item.aa !== 'sel'">
					<el-input
						size="mini"
						v-model="scope.row[item.value]"
						placeholder="请输入"
					></el-input>
					<!-- <el-select v-if="scope.row[item.aa]==='sel'"  placeholder="险种分类" class="sel140 ml10">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select> -->
					<!-- <span>{{ scope.row[item.value] }}</span> -->
				</template>
			</el-table-column>
			<el-table-column
				label="操作"
				label-class-name="opt"
				class-name="opt"
				width="100"
			>
				<template slot-scope="scope">
					<i
						class="el-icon-circle-plus-outline"
						@click="add(scope.$index, scope.row)"
					></i>
					<i
						class="el-icon-remove-outline"
						v-if="scope.$index !== 0 || tableData.length > 1"
						@click="del(scope.$index, scope.row)"
					></i>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
export default {
	name: "TableForm",
	props: {
		formArr: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
			currentIndex: 0,
			tableIndex: 0,
			// formArr: [
			// 	{ label: "日期", value: "data" },
			// 	{ label: "姓名", value: "name" },
			// 	{ label: "地址", value: "address" }
			// ],
			form: () => {
				this.formArr.reduce((m, n) => {
					m[n.value] = "";
					return m;
				}, {});
			},
			tableData: [{ ...this.form }]
		};
	},
	methods: {
		add(index, row) {
			this.tableData.splice(index + 1, 0, { ...this.form });
			this.addCurrent = true;
		},
		del(index, row) {
			this.tableData = this.tableData.filter((n, i) => i !== index);
		}
	}
};
</script>
<style lang="scss">
.tableForm-wrap {
	.el-input--mini .el-input__inner {
		border-radius: 25px;
	}
	// .tb-edit .el-input {
	// 	display: none;
	// }
	// .tb-edit .current-row .el-input {
	// 	display: block;
	// }
	// .tb-edit .current-row .el-input + span {
	// 	display: none;
	// }
	i {
		font-size: 25px;
		color: $tableColor;
	}
	.opt {
		.cell {
			display: flex;
			justify-content: space-around;
		}
	}
}
</style>
