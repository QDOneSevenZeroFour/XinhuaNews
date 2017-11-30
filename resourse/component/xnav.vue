<template>
	<div style="overflow: hidden;">
		<div class="nav-wrapper">
			<nav class="nav-content">
				<ul class="nav-list">
					<li class="nav-item" v-for="a in arr">
						<a @click="Btntype(a)" class="nav-link">{{a}}</a>
					</li>
				</ul>
				<div class="nav-more-btn">
					<a class="ico-add" :href="path" @click="showChannel">
						<i class="iconfont icon-iconfont71" id="add"></i> </a>
				</div>
			</nav>
		</div>
	</div>
</template>

<script scoped>
	export default {
		data() {
			return {
				arr: ['新闻', '财经', '国际', '娱乐', '图片', '社区'],
				newsList: [],
				search: '',
				bool: true,
				type: this.$parent.$store.state.type,
				count: 1,
				path: '#/channel',
				imgPath: '#/images',
				num: 10,
				m: 0,
			}
		},
		mounted() {
			var self = this;
			this.type = this.$parent.$store.state.type;
			self.$parent.$store.state.newslist = [];
			$.ajax({
				url: '../resourse/json/xinhua.json',
				type: 'GET',
				success: function(data) {
					for(var i = self.m; i < self.num; i++) {
						if(data[i].type == self.$parent.$store.state.type) {
							console.log(data[i].type);
							self.$parent.$store.state.newslist = self.$parent.$store.state.newslist.concat(data[i]);
							self.$parent.$store.state.newslist = self.$parent.$store.state.newslist.reverse();
						}

					}
					console.log(self.$parent.$store.state.newslist.length);
				}

			})

		},
		methods: {

			Btntype(aType) {
				if(aType == '图片') {
					this.$parent.$store.state.type = aType;
					location.href = '#/images';
				} else {

					location.href = '#/index';
					//				console.log(this);
					this.$parent.$store.state.type = aType;
					console.log(this.$parent.$store.state.type);
					this.$parent.$store.state.newslist = [];
					var self = this;
			this.type = this.$parent.$store.state.type;
			self.$parent.$store.state.newslist = [];
			$.ajax({
				url: '../resourse/json/xinhua.json',
				type: 'GET',
				success: function(data) {
					for(var i = 0; i <data.length; i++) {
						if(data[i].type == self.$parent.$store.state.type) {
							console.log(data[i].type);
							self.$parent.$store.state.newslist = self.$parent.$store.state.newslist.concat(data[i]);
							self.$parent.$store.state.newslist = self.$parent.$store.state.newslist.reverse();
						}

					}
					console.log(self.$parent.$store.state.newslist.length);
				}

			})

				}
			},
			showChannel() {
				this.$parent.$store.state.bool = true;
				console.log(this.$parent.$store.state.bool);
			}
		}
	}
</script>

<style scoped>
	li {
		list-style: none;
	}
	
	.nav-wrapper {
		float: left;
		height: 1.0rem;
		width: 100%;
		overflow: hidden;
	}
	
	.nav-content {
		height: 1.0rem;
		overflow-x: auto;
		-webkit-overflow-scrolling: touch;
		font-size: 0.5rem;
	}
	
	.nav-list {
		width: 100%;
		height: 1.0rem;
		background-color: #eee;
	}
	
	.nav-item {
		float: left;
	}
	
	.nav-link {
		display: block;
		font-size: 0.5rem;
		padding-left: 0.18rem;
		padding-right: 0.18rem;
		line-height: 1rem;
		text-decoration: none;
		color: #333;
	}
	
	.nav-more-btn {
		position: absolute;
		top: 1.5rem;
		right: 0rem;
		width: 1.0rem;
		height: 1.0rem;
		background: #fff;
		text-align: center;
	}
	
	.nav-more-btn a {
		display: block;
		width: 1.0rem;
		height: 1.0rem;
		background: #fff;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	
	#add {
		font-weight: 800;
		font-size: 0.6rem;
		color: blue;
	}
	
	.weui-panel {
		top: 32px;
		overflow: inherit;
	}
	
	#Newsimg {
		display: block;
		width: 5.3rem;
		height: 3.9rem;
	}
	
	#newsTitle {
		margin-left: 1.43rem;
		font-size: 0.95rem;
		line-height: 1.4;
		height: 1.25rem;
		color: #333333;
	}
	
	#newsSource {
		float: right;
		margin-top: 0.02rem;
		font-size: 0.3rem;
		color: #aaa;
	}
</style>