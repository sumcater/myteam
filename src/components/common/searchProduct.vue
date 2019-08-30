<template>
	<el-dialog
		class="search-product"
		:visible.sync="visibile"
		width="650px"
		@open="open"
		@close="close"
		title="意向产品"
	>
		<el-form
			:inline="true"
			:model="searchForm"
			:rules="rules"
			ref="searchForm"
			label-width="80px"
		>
			<el-form-item label="产品名称" prop="custNo">
				<el-input
					v-model.trim="searchForm.custNo"
					placeholder="产品名称"
					class="inp140"
					@keyup.enter.native="search(url, searchForm)"
				></el-input>
			</el-form-item>
			<el-form-item label="集团统一编号" prop="custName" label-width="100px">
				<el-input
					v-model.trim="searchForm.custName"
					placeholder="集团统一编号"
					class="inp140"
					@keyup.enter.native="search(url, searchForm)"
				></el-input>
			</el-form-item>
			<el-form-item>
				<el-button
					round
					:loading="searchStatus"
					type="primary"
					@click="search(url, searchForm)"
					class="ml20"
					>搜索</el-button
				>
				<a class="ml10 mt20 reset-btn" @click="resetForm()">重置</a>
			</el-form-item>
		</el-form>
		<el-table
			:data="parseNull(compTableData)"
			class="fs12"
			style="width: 100%"
			border
			@selection-change="handleSelectionChange"
			@sort-change="sortChange"
			size="small"
			header-row-class-name="header-row"
		>
			<el-table-column prop="name" label="产品名称"></el-table-column>
			<el-table-column prop="name" label="集团统一编号"></el-table-column>
			<el-table-column prop="name" label="保险合作类型"></el-table-column>
			<el-table-column prop="name" label="保险公司"></el-table-column>
			<el-table-column prop="name" label="合作渠道"></el-table-column>
			<el-table-column label="操作" align="center">
				<template slot-scope="scope">
					<span class="text-link" @click="add(scope.row)">确定</span>
				</template>
			</el-table-column>
		</el-table>
		<div slot="footer" class="dialog-footer">
			<el-pagination
				class="fr"
				:page-size.sync="page.pageSize"
				background
				layout="total, sizes, prev, pager, next, jumper"
				@current-change="currentChange"
				@size-change="sizeChange"
				@prev-click="prevClick"
				@next-click="nextClick"
				:current-page.sync="page.pageNum"
				:total="page.totalSize"
			></el-pagination>
		</div>
	</el-dialog>
</template>

<script>
import search from "mixins/search";

export default {
	mixins: [search],
	data() {
		return {
			url: "",
			visibile: false,
			compTableData: [{ sss: 99 }, { sss: 99 }],
			searchForm: {
				custNo: "",
				custName: ""
			}
		};
	},
	methods: {
		open() {}
	}
};
</script>
<style lang="scss"></style>
