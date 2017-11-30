<template>
	<div>
		<xheader></xheader>
		<xregister></xregister>
		<xfooter></xfooter>	
	</div>
</template>

<script>
	import xfooter from './xfooter.vue';
	import xregister from "./xregister.vue";
	import xheader from './xheader.vue';
export default {
	components:{
		xheader,
		xregister,
		xfooter
	}
}
</script>

<style>
</style>