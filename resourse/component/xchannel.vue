<template>
	<div class="nav-more-content show" v-show="bool">
		<div class="nav-list-head">
			<i class="iconfont icon-iconfont7" id="closeFont" @click="close"></i>
		</div>
		<div class="nav-list-wrapper">
			<h2>网站地图</h2>
			<ul class="channel-list">
				<li v-for="a in chnnelData1">
					<a @click="detailList(a)">{{a}}</a>
				</li>
			</ul>
			<h2>品牌栏目</h2>
			<ul class="topic-list">
				<li v-for="a in chnnelData2">
					<a :href="path">{{a}}</a>
				</li>
			</ul>
			<h2>地方频道</h2>
			<ul class="location-list">
			<li v-for="a in chnnelData3">
					<a :href="path">{{a}}</a>
				</li>
			</ul>
			<h2>多语种频道</h2>
			<ul class="language-list">
					<li v-for="a in chnnelData4">
					<a href="http://russian.xinhuanet.com/mobile/index.htm">{{a}}</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data () {
    		return {
// 		   		chnnel:require('./resourse/json/newsChannel.json'),
				bool:false,
				chnnelData1:[],
				chnnelData2:[],
				chnnelData3:[],
				chnnelData4:[],
				path:'#/',
				
   		 	}
 		},
 		mounted (){
 			this.bool=this.$parent.$store.state.bool;
 			console.log(this.bool);
 			var self = this;
			$.ajax({
				url:'../resourse/json/newsChannel.json',
				type: 'GET',
				success: function(data) {
					self.chnnelData1=self.chnnelData1.concat(data[0].list);
					self.chnnelData2=self.chnnelData2.concat(data[1].list);
					self.chnnelData3=self.chnnelData3.concat(data[2].list);
					self.chnnelData4=self.chnnelData4.concat(data[3].list);
				}

			})
 		},
 		methods:{
 			close(){
 				this.$parent.$store.state.bool=false;
 				this.bool=this.$parent.$store.state.bool;
 				location.href='#/index';
 			},
 			detailList(a){
 				
 				if(a=='图片'){
 					location.href='#/images';
 				}else{
 				var self=this;
 				this.$parent.$store.state.type=a;
 				console.log(this.$parent.$store.state.type);
 				$.ajax({
						url: '../resourse/json/xinhua.json',
						type: 'GET',
						success: function(data) {
							for(var i = 0; i < data.length; i++) {
								if(data[i].type == self.$parent.$store.state.type) {
									console.log(data[i].type);
									self.$parent.$store.state.newslist = self.$parent.$store.state.newslist.concat(data[i]);
									self.$parent.$store.state.newslist = self.$parent.$store.state.newslist.reverse();
								}

							}
				console.log(self.$parent.$store.state.newslist)	;		
						}

					}) 
	
 				location.href='#/index';
 				
 				}
 				
 			}
 		}
 		
 		
   		
// 	mountedn () {
//		this.loardMore();
//	},
//	computed: {
//		computedArr () {
//			var self = this;
//			console.log(this.search);
//			var newsArr = this.news.filter(function(value) {
//				return value.indexOf(self.search) !== -1;
//			})
//			return newsArr;
//
//		}
//	}
}
</script>
	
	
<style>
.nav-more-content {
    position: fixed;
    z-index: 10000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    overflow: auto;
    background-color: #eee;
    -webkit-transform: scale(0, 0.1);
    transform: scale(0, 0.1);
    -webkit-transition: all 0.2s;
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    -webkit-transform-origin: 100% 10%;
    transform-origin: 100% 10%;
    margin-left: auto;
    margin-right: auto;
}
.nav-more-content.show {
    opacity: 1;
    -webkit-transform: scale(1, 1);
    transform: scale(1, 1);
}
.nav-list-head {
    position: relative;
    height: 1rem;
    z-index: 1;
    background: #eee;
    box-shadow: 0 10px 10px #eee;
}
#closeFont{
	position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    font-size: 0.6rem;
}

.nav-list-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    overflow: auto;
}
.nav-more-content h2 {
    font-size: 0.5rem;
    margin-left: 0.8rem;
    margin-bottom: 0.5rem;
}
.nav-more-content h2:first-of-type {
    margin-top: 1.4rem;
    font-size: 0.6rem;
}
.nav-more-content ul {
    width: 8rem;
    margin-bottom: 0.1rem;
    margin-right: auto;
    margin-left: auto;
    font-size: 0.4rem;
    overflow: hidden;
}
.nav-more-content li {
    float: left;
    width: 1.4rem;
    line-height: 1rem;
    text-align: center;
    margin-right: 0.12rem;
    margin-bottom: 0.16rem;
    background-color: #fff;
}
li {
    list-style-type: none;
}
a:visited {
    color: #999;
}
.nav-more-content a {
    display: block;
    color: #333 !important;
}

</style>