<template>
	<div id="app">
		<!-- <img src="./assets/images/logo.png"> -->
		<router-view />
	</div>
</template>

<script>
export default {
	name: "App"
};
</script>

<style>
#app {
	background-color: silver;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
