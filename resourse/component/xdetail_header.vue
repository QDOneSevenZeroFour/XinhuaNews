<template>
	<header>
		    <div class="pack">
		    	<a href="#/channel" style="display: block;overflow: hidden;"@click="show"><span id="more" class="iconfont icon-icon119"></span></a>
		    </div>
	</header>
</template>

<script>
	export default{
		methods:{
			show() {
				this.$parent.$store.state.bool = true;
				
				console.log(this.$parent.$store.state.bool);
			}
		}
	}
</script>

<style lang="scss" scoped>
	header{
		height:1.87rem;
		width: 100%;
		background:url(../images/header_img.jpg) 0.31rem center  no-repeat #2D8BDE;
		background-size: 2.81rem 1.12rem;
		
	}
	.pack{
		height:1.5rem;
		width: 95%;
		padding:0rem 0.28rem;	
		#more{
			line-height: 1.5rem;
			float: right;
			margin-right:0.15rem;
			font-size:0.62rem;
		}
		a{
			text-decoration: none;
			color:white;
		}
	}
	
</style>