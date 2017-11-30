<template>
	<div class="wr_out" id="wr_play">
		<ul class="wr_img">
			<li class="imgOn" v-for="n in news">
				<a href="#"><img :src="n.img" alt="" /></a>
				<a class="desc" href="#">{{n.desc}}</a>
				<a class="number"><span class="num_child">{{num}}</span>&nbsp;<span class="num_father">/&nbsp;8</span></a>
			</li>
		</ul>		
	</div>
</template>

<script>
	export default {
		data() {
			return {
				news: [],
				num:1
			}
		},
		methods: {
			carousel() {
				//代码初始化
				//var size = $(".wr_img li").size();
				var size = 8;	
				var self = this;
				
				for(var i = 1; i <= size; i++) {	
					var li = "<li>" + "</li>";
					$(".num").append(li);
				};

				//手动控制轮播效果
				$(".wr_img li").eq(0).show();
				$(".num li").eq(0).addClass("active");
				//自动
				var i = 0;
				var t = setInterval(move, 1500);
				//核心向右的函数
				function move() {
					i++;
					//num代表轮播图的第几张图片
					self.num = i;
					if(i == size) {
						i = 0;
					}
					$(".num li").eq(i).addClass("active").siblings().removeClass("active");
					$(".wr_img li").eq(i).fadeIn(1500).siblings().fadeOut(1500);

				}
			},
			loadMore: function() {
				var self = this;
				$.ajax({
					url: "http://127.0.0.1:8020/vue/vue%2bwebpack/resourse/json/banner.json",
					type: "GET",
					success: function(data) {
						//console.log(data);
						self.news = self.news.concat(data);
					}
				})
			}
		},
		mounted() {
			this.carousel();
			this.loadMore()
		}
	}
</script>

<style lang="scss" scoped>
	.wr_out {
		height:5.62rem;
		width: 100%;
		position: relative;	
		
	}	
	.wr_out .wr_img li {
		height:5.62rem;
		width:100%;
		list-style: none;
		position: absolute;
		left: 0;
		top: 0;
		/*display: none;*/
		a{
			text-decoration: none;
		}
	}
	.wr_out .wr_img .desc{
		display: block;
		font-size: 0.5rem;
		z-index: 20;
		margin-top: -1.2rem;
		text-indent: 0.31rem;
		color:white;
		font-size: 0.4rem;;	
	}
	.wr_out .wr_img .number{
		display: block;
		margin-top: -1.2rem;
		font-size: 0.5rem;
		z-index: 20;
		margin-left: 8.9rem;
		color: white;
		.num_child{
			color:#2D8BDE;
			font-size:0.5rem;
		}
		.num_father{
			font-size:0.37rem;
		}
	}
	.wr_out .wr_img img {
		width: 100%;
		height:5.62rem;
	}
	.wr_out .num li {
		width: 10px;
		height: 10px;
		line-height: 20px;
		border-radius: 50%;
		background: #666;
		color: #fff;
		text-align: center;
		display: inline-block;
		font-size: 16px;
		margin: 0 3px;
		cursor: pointer;
	}
	.wr_out .num li .active {
		border: 2px solid #666;
		background: #fff;
	}	
</style>