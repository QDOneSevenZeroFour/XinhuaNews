<template>
	<div>
		<xheader></xheader>
		<login></login>
		<xfooter></xfooter>	
	</div>
</template>

<script>
	import xfooter from './xfooter.vue';
	import login from "./login.vue";
	import xheader from './xheader.vue';
export default {
	components:{
		xheader,
		login,
		xfooter
	}
}
</script>

<style>
</style>