<template>
	<h2 class="top" :class="hasBack ? 'pl40' : ''">
		{{ title }}
		<span class="goback" v-if="hasBack" @click="goback"></span>
		<span class="default" v-if="!hasBack"></span>

		<el-button type="primary" v-if="btnTitle" @click="btnEvent">
			{{ btnTitle }}
		</el-button>
		<i
			class="el-icon-d-arrow-left fs20 font-gray"
			:class="!iconStatus ? 'icon-up' : 'icon-low'"
			v-if="icon"
			@click="changeIcon"
		></i>
	</h2>
</template>

<script>
export default {
	props: {
		title: {
			type: String
		},
		btnTitle: {
			type: String
		},
		hasBack: {
			type: Boolean,
			default: false
		},
		icon: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			iconStatus: false
		};
	},
	methods: {
		btnEvent() {
			this.$emit("btnclick");
		},
		goback() {
			this.$router.go(-1);
		},
		changeIcon() {
			this.iconStatus = !this.iconStatus;
			this.$emit("iconClick");
		}
	}
};
</script>

<style lang="scss">
.top {
	font-size: 18px;
	padding: 5px 20px;
	border-bottom: 4px solid $lightGray;
	margin-bottom: 10px;
	color: $black;
	display: flex;
	justify-content: space-between;

	position: relative;
	.default::after {
		content: "";
		position: absolute;
		left: 9px;
		top: 10px;
		height: 16px;
		width: 3px;
		background-color: $blue;
	}
	.goback {
		position: absolute;
		left: 3px;
		top: -3px;
		height: 40px;
		width: 30px;
		background: url("../../assets/images/blrw.png") no-repeat center center;
	}
	.icon-up {
		transform: rotate(90deg);
		transition: transform 0.5s;
	}
	.icon-low {
		transform: rotate(270deg);
		transition: transform 0.5s;
	}
}
</style>
