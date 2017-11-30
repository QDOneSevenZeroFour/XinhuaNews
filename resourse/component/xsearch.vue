<template>
	<transition name="fade">
		<div v-show="bool2" class="weui-search-bar " :class="{'weui-search-bar_focusing':bool}" id="searchBar">
			<form class="weui-search-bar__form">
				<div class="weui-search-bar__box">
					<i class="weui-icon-search"></i>
					<input type="search" v-model="content" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
					<a @click="clearText" href="javascript:" class="weui-icon-clear" id="searchClear"></a>
				</div>
				<label @click="searchText" class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
                    <i class="weui-icon-search"></i>
                    <span>搜索</span>
                </label>
			</form>
			<a @click="searchCancle" href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
		</div>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				bool: false,
				bool2: false,
				content: "",
				searchstatus: -1
			}
		},
		methods: {
			searchText: function() {
				this.bool = true
			},
			searchCancle: function() {
				this.bool = false
			},
			clearText: function() {
				this.content = ""
			}
		},
		mounted: function() {
			var self = this;
			bus.$on("searchstatus", function(status) {
				self.bool2 = status;
			})
		},
		watch: {
			content: function(value, oldvalue) {
				if(value != oldvalue) {
					this.$parent.$store.state.search = this.content;
				}

			}
		}
	}
</script>

<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: all 0.5s;
	}
	
	.fade-enter,
	.fade-leave-to {
		height: 0;
		opacity: 0;
	}
	
	.fade-enter-to,
	{
		opacity: 1;
		height: 1.3rem;
	}
	
	body {
		line-height: 0.62rem;
	}
	
	.weui-search-bar__cancel-btn {
		color: #2D8BDE;
	}
	
	.weui-search-bar {
		position: absolute;
		width: 100%;
		height: 1.3rem;
		z-index: 80;
	}
	
	#searchText {
		line-height: 0.62rem;
	}
	
	.weui-search-bar__label span {
		font-size: 0.46rem;
		margin-top: 0.18rem;
	}
	
	.weui-icon-search {
		font-size: 0.46rem;
	}
	
	.weui-search-bar a {
		font-size: 0.46rem;
		line-height: 0.62rem;
	}
	
	.weui-search-bar .weui-search-bar__box #searchInput {
		height: 0.82rem;
		line-height: 0.82rem;
		font-size: 0.46rem;
		margin-left: 0.4rem;
		float: left;
	}
	
	.weui-search-bar .weui-search-bar__box .weui-icon-search {
		line-height: 0.62rem;
	}
	
	.weui-icon-search:before {
		font-size: 0.46rem;
		margin-top: 0.17rem;
		line-height: 0.62rem;
	}
	
	.weui-icon-clear:before {
		margin-top: 0.12rem;
	}
	
	.weui-search-bar .weui-search-bar__box {
		height: 0.92rem;
		line-height: 0.92rem;
	}
</style>