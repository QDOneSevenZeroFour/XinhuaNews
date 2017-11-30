<template>
	<div>
		<xheader></xheader>
		<xsearch></xsearch>
		<xnav></xnav>
		<xcarousel></xcarousel>
	
		<div class="weui-panel weui-panel_access" style="position: relative;">
		<transition-group class="weui-panel__bd" name='list' tag='div'>
			<a :key='a.id' v-for='a in computedArr' @click='detailNews(a.title,a.img,a.source)' class="weui-media-box weui-media-box_appmsg">
				<div class="weui-media-box__hd">
					<img id="Newsimg" class="weui-media-box__thumb thumb-img" :src="a.img" alt="">
				</div>
				<div class="weui-media-box__bd">
					<h4 id='newsTitle' class="weui-media-box__title">{{a.title}}</h4>
					<p id="newsSource" class="weui-media-box__desc">{{a.source}}</p>
				</div>
			</a>
			
		</transition-group>
		<div class="weui-cells" @click="loadMore">
				<a class="weui-cell weui-cell_access" href="javascript:;" >
					<div class="weui-cell__bd">
						<p></p>
					</div>
					<div class="weui-cell__ft">加载更多</div>
				</a>
		</div>
		<div class="weui-loadmore" v-show='!bool'>
			<i class="weui-loading"></i>
			<span class="weui-loadmore__tips">正在加载</span>
		</div>
	</div>
	<xfooter></xfooter>
	</div>
</template>
<script scoped>
import xheader from './xheader.vue';
import xpanle from './xpanle.vue';
import xnav from './xnav.vue';
//频道
import xchannel from './xchannel.vue';
import xfooter from './xfooter.vue';
import xcarousel from './xcarousel.vue';
import ximages from './ximages.vue';
import xloading from './xloading.vue';
import xsearch from './xsearch.vue';
	export default {
		data() {
			return {
				news: [],
				bool: true,
				type: this.$parent.$store.state.type,
				search:'',
				num :0,
				m:10,
			}
		},
		methods:{
			detailNews(title,img,source){
				this.$parent.$store.state.title=title;
				this.$parent.$store.state.img=img;
				this.$parent.$store.state.source=source;
				location.href='#/newsDetail';
			},
			loadMore(){
				var self = this;
				this.news=[];
				setTimeout(function() {
//							bus.$emit("showloading", false);
							for(var i = self.num; i < self.m; i++) {
								console.log(self.$parent.$store.state.newslist[i]);
								self.$parent.$store.state.newslist = self.$parent.$store.state.newslist.concat(self.$parent.$store.state.newslist[i]);
							}
							self.m = self.m + 10;
							self.num = self.num + 10;
						}, 1000);
//						console.log(self.news);
			}
		},
		components:{
			xheader,
			xcarousel,
			xnav,
			xsearch,
			xpanle,
			xchannel,
			xfooter,
			xloading,
		},
		computed: {
		computedArr() {
			var self = this;
			console.log("这是神马"+self.$parent);
			console.log(self.$parent.$store.state.search);
			if(self.search!=self.$parent.$store.state.search){
				self.search=self.$parent.$store.state.search;
				
			}
			var newArr = self.$parent.$store.state.newslist.filter(function(value) {				
//				console.log(value);
				return value.title.indexOf(self.search) !== -1;
			})
//			console.log(self.news);
			return newArr;

		}
	},
	mounted: function() {
			this.loadMore();
	}
}
</script>

<style scoped>
	.thumb-img{
    background: #eee url(http://www.xinhuanet.com/m/img/placeholder.png) no-repeat center center;
}
	.weui-panel {
		position: relative;
		overflow: inherit;
	}
	
	#Newsimg {
		display: block;
		width: 2.8rem;
		height: 1.9rem;
	}
	
	#newsTitle {
		margin-left: 1.23rem;
		font-size: 0.5rem;
		line-height: 1.4;
		height: 1.25rem;
		color: #333333;
	}
	
	#newsSource {
		float: right;
		margin-top: 0.02rem;
		font-size: 0.4rem;
		color: #aaa;
	}
	.weui-cells .weui-cell__ft{
		font-size: 0.4rem;
	}
	.weui-media-box_appmsg .weui-media-box__hd{
		height: 2.3rem;
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