<template>
	<header>
		    <div class="pack">
		    	<span class="pagename">{{this.$parent.$store.state.type}}</span>
		    	<ul>
		    		
		    		<li><a :href="path">登录</a></li>
		    		<li><a href="#"><span class="iconfont icon-weibo"></span></a></li>
		    		<li @click="statusChange"><a href="#"><span class="iconfont icon-icon"></span></a></li>		
		    	</ul>
		    </div>
	</header>
</template>

<script>
	export default {
		data() {
			return {
				bool:false,
				path:'#/newsLogin',
			}
		},
		methods: {
			statusChange:function(){
				this.bool=!this.bool
				bus.$emit("searchstatus",this.bool);
			}
		}
	}
</script>

<style lang="scss" scoped>
	header{
		height:1.5rem;
		width: 100%;
		background:url(../images/header_img.jpg) 0.31rem center  no-repeat #2D8BDE;
		background-size: 2.2rem 0.9rem;
		
	}
	.pack{
		height:1.5rem;
		width: 95%;
		padding:0rem 0.28rem;	
		ul{
			float: right;
		}
		.pagename{
			float: left;
			margin-top: 0.2rem;
			margin-left: 2.3rem;
			font-size: 0.43rem;
			color: white;
			font-weight: normal;
		}
		ul li{
			list-style: none;
			float: left;
			padding: 0px 0.2rem;
			line-height: 1.25rem;
			a{
				text-decoration: none;
				font-size: 0.43rem;
				color: white;
				span{
					font-size: 0.6rem;
					font-weight: normal;
				}		
			}
		}	
	}
	
</style>