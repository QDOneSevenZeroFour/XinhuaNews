<template>
	<div>
		<xheader></xheader>
		<xnav></xnav>
		<xsearch></xsearch>	
		<div style="position: relative;">
			<!--图片列表-->
			<div class="images_box">
				<transition-group name='list' tag='ul'>
				
					<li v-for="n in computedArr" @click="detailNews(n.title,n.img)" :key="n.id">
						<div class="title">{{n.title}}</div>
						<a ><img :src="n.img" /></a>
					</li>
				
			</transition-group>	
			</div>
			<!--加载更多的按钮-->
			<div class="weui-cells">
				<a class="weui-cell weui-cell_access" href="javascript:;" @click="loadMore">
					<div class="weui-cell__bd">
						<p></p>
					</div>
					<div class="weui-cell__ft">加载更多</div>
				</a>
			</div>
		</div>
		<div id="loadingToast" :style="{'display':bool?'block':'none'}">
			<div class="weui-mask_transparent"></div>
			<div class="weui-toast">
				<i class="weui-loading weui-icon_toast"></i>
				<p class="weui-toast__content">数据加载中</p>
			</div>
		</div>
		<xfooter></xfooter>
	</div>
</template>

<script>
	import xheader from './xheader.vue';
	import xnav from './xnav.vue';
	import xfooter from './xfooter.vue';
	import xsearch from './xsearch.vue';
	import xloading from './xloading.vue';
	export default {
		data() {
			return {
				bool:true,
				news: [],
				num: 0,
				m: 5,
				search:"",
			}
		},
		components:{
			xheader,
			xnav,
			xsearch,
			xfooter,
			xloading,
		},
		computed: {
		computedArr() {
			var self = this;
			if(self.search!=self.$parent.$store.state.search){
				self.search=self.$parent.$store.state.search;
				
			}
			var newArr = self.news.filter(function(value) {				
				console.log(value);
				return value.title.indexOf(self.search) !== -1;
			})
			return newArr;

		}
	},
		methods: {
			loadMore: function() {
				bus.$emit("showloading", true);
				var self = this;
				$.ajax({
					url: "../resourse/json/images.json",
					type: "GET",
					success: function(data) {
						setTimeout(function() {
							bus.$emit("showloading", false);
							for(var i = self.num; i < self.m; i++) {
								self.news = self.news.concat(data[i]);
							}
							self.m = self.m + 5;
							self.num = self.num + 5;
						}, 1000)
					}
				})
			},
			detailNews(title,img){
				this.$parent.$store.state.title=title;
				this.$parent.$store.state.img=img;
				console.log(this.$parent.$store.state.title);
				console.log(this.$parent.$store.state.img);
				location.href='#/newsDetail';
				
			}
		},
		mounted: function() {
			this.loadMore();
			var self = this;
			//接受statue->data里的bool改变->决定加载图标隐藏还是现实
			bus.$on("showloading", function(status) {
				//console.log(status);
				self.bool = status;
			})
		}
		
	}
</script>

<style lang="scss" scoped>
	.images_box {
		width: 100%;
		ul li {
			list-style: none;
			position: relative;
			a img {
				width: 100%;
				height: 5.62rem;
			}
			.title {
				font-size: 0.5rem;
				position: absolute;
				width: 88%;
				height: 1.43rem;
				margin-top: 0.46rem;
				margin-left: 0.62rem;
				margin-right: 0.62rem;
				font-size: 0.62rem;
				color: white;
				top: 0;
			}
		}
	
	}
	
	
	.weui-cells .weui-cell__ft {
		font-size: 0.4rem;
	}
	.weui-toast {
   	 font-size: 0.5rem;
    }
    	.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>