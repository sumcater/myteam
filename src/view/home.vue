
<template>
	<el-container>
		<el-header style="height: 75px;">
			<div class="m15">Header</div>
			<!-- <el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item>活动管理</el-breadcrumb-item>
			</el-breadcrumb> -->
		</el-header>
		<el-container>
			<el-aside width="300px">
				<my-menu></my-menu>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
import myMenu from "./menu";
export default {
	data() {
		return {};
	},
	components: {
		myMenu
	}
};
</script>
<style lang="">
.m15{
  /* margin: 15px 0; */
}
.el-header,
.el-footer {
  padding: 0;
	/* background-color: #b3c0d1; */
}

.el-aside {
	background-color: silver;
	height: calc(100vh - 75px);
}

.el-main {
	background-color: #e9eef3;
}
.el-breadcrumb{
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  padding-left: 20px;
}
</style>