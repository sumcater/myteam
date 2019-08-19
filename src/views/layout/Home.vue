
<template>
	<el-container>
		<el-header style="height: 75px;">
			<div class="m15">Header</div>
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item
					:to="{ path: item.path }"
					v-for="(item, index) in breadcrumbArr"
					:key="index"
				>{{item.title}}</el-breadcrumb-item>
			</el-breadcrumb>
		</el-header>
		<el-container>
			<el-aside width="300px">
				<my-menu></my-menu>
			</el-aside>
			<el-container>
				<el-main>
					11
					<router-view></router-view>
				</el-main>
				<el-footer>Footer</el-footer>
			</el-container>
		</el-container>
	</el-container>
</template>

<script>
import myMenu from "./Menu";
export default {
	data() {
		return {
			breadcrumbArr: []
		};
	},
	watch: {
		$route: {
			handler(newVal) {
				this.breadcrumbArr = newVal.matched.map(item => ({
					title: item.meta.title,
					path: item.path || item.redirect
				}));
			},
			immediate: true
		}
	},
	created() {
		console.log(this.$route.matched, "0000");
		// this.breadcrumbArr = this.$route.matched.map(item => ({
		// 	title: item.meta.title,
		// 	path: item.path || item.redirect
		// }));
	},
	components: {
		myMenu
	}
};
</script>
<style lang="">
.m15 {
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
.el-breadcrumb {
	height: 40px;
	line-height: 40px;
	background-color: #fff;
	padding-left: 20px;
}
</style>