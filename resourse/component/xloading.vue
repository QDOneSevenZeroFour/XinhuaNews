<template>
	<div id="loadingToast" :style="{'display':bool?'block':'none'}">
		<div class="weui-mask_transparent"></div>
		<div class="weui-toast">
			<i class="weui-loading weui-icon_toast"></i>
			<p class="weui-toast__content">数据加载中</p>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool: true
			}
		},
		mounted: function() {
			var self = this;
			//接受statue->data里的bool改变->决定加载图标隐藏还是现实
			bus.$on("showloading", function(status) {
				//console.log(status);
				self.bool = status;
			})
		}
	}
</script>

<style>
	.weui-toast {
   	 font-size: 0.5rem;
    }
</style>