<template>
	<div>
		<xdetail_header></xdetail_header>
		<xdetail></xdetail>
		<xdetail_footer></xdetail_footer>
	</div>	
</template>

<script>
import xdetail_header from './xdetail_header.vue';
import xdetail from "./xdetail.vue";
import xdetail_footer from './xdetail_footer.vue';
export default {
	
		components:{
			xdetail,
			xdetail_header,
			xdetail_footer,
		},
	  
}
</script>

<style>
</style>