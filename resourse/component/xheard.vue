<template>
	<header>{{msg}}</header>
</template>

<script>
	export default {
  		data () {
    		return {
   		   	msg: 'Hello from vue-loader'
   		 }
 	 }
}
</script>

<style>
	header{
	height: 50px;
	width: 100%;
	background: red;
	line-height: 50px;
	text-align: center;
	color: white;
	font-size: 1.2em;
}
</style>