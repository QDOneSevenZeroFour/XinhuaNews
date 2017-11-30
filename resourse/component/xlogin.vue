<template>
	<div class="comment-dialog" :style="{display: bool ? 'block' : 'none'}">
		<div class="dialog-header">
			<div class="title">社区登录</div>
			<div class="close" @click="closeDialog"></div>
		</div>
		<div class="dialog-article">
			<div class="register">
				<div class="r-title">从未使用过新华社区？</div>
				<div class="r-link">
					<a href="http://my.home.news.cn/profile/passport.do" target="_blank">注册新用户</a>
				</div>
			</div>
			<!-- <div class="connect"><div class="c-title">登录时使用：</div><div class="c-link clearfix"><ul  id="COMMENT_LOGIN_ID_1510363129535_links" ><li class="qq"><a href="javascript:;">&nbsp;</a></li><li class="more"><a href="javascript:;">更多&gt;&gt;</a></li></ul></div></div> -->
			<div class="login">
				<div class="l-title">登录新华社区</div>
				<div class="l-form">
					<div class="lf-item">
						<div class="lf-title">用户名：</div>
						<div class="lf-input clearfix">
							<div><input id="COMMENT_LOGIN_ID_1510363129535_username" tabindex="1" type="text"></div>
							<!-- <div><a href="http://blog.home.news.cn/help/help.html" target="_blank">帮助中心</a></div> --></div>
					</div>
					<div class="lf-item">
						<div class="lf-title">密码：</div>
						<div class="lf-input clearfix">
							<div><input id="COMMENT_LOGIN_ID_1510363129535_password" tabindex="1" type="password"></div>
							<div>
								<a href="http://login.home.news.cn/getPwd.jsp" target="_blank">忘记密码</a>
							</div>
						</div>
					</div>
				</div>
				<div class="l-submit"><input value="登录" id="COMMENT_LOGIN_ID_1510363129535_submit" type="button" tabindex="1"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		methods: {
			closeDialog(){
//				console.log(this.$parent);
				this.$parent.bool = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.comment-dialog {
		position: fixed;
		padding: 0.56rem 0.37rem;
		width: 8.8rem;
		height: 13rem;
		border: 0.03rem solid #CDCDCD;
		background: #FFF;
		box-shadow: 0 0 0.31rem #CDCDCD;
		z-index: 100;
		left: 0.2rem;
		top: 3.04rem;
		.dialog-header {
			position: relative;
			height: 1.12rem;
			line-height: 1.12rem;
			border-bottom: 0.06rem solid #1264a4;
			margin-top: 0.5rem;
			display: block;
			background: url(http://www.newsimg.cn/xl2017/images/bg2.jpg) 0 100% no-repeat;
			padding-bottom: 0.93rem;
			.title {
				float: left;
				padding: 0 0.18rem;
				height: 1.12rem;
				line-height: 1.12rem;
				background-color: #146eba;
				font-size: 0.8rem;
				font-family: 'Microsoft YaHei';
				color: #FFF;
			}
			.close {
				position: absolute;
				right: 0;
				top: 0.3rem;
				width: 0.5rem;
				height: 0.5rem;
				background: url(../images/dialog_36x72.gif) no-repeat 0 0;
				overflow: hidden;
				cursor: pointer;
			}
		}
		.dialog-article {
			padding: 0.56rem;
			.r-title {
				padding-bottom: 0.15rem;
				color: #333333;
				border-bottom: 0.03rem solid #D1D1D1;
				font-size: 0.43rem;
			}
			.r-link {
				margin-top: 0.37rem;
				a {
					height: 1.09rem;
					line-height: 1.09rem;
					display: block;
					background-color: #146eba;
					color: #FFF;
					text-align: center;
					font-size: 0.56rem;
					font-weight: bold;
					font-family: 'Microsoft YaHei';
				}
			}
			.login {
				margin-top: 0.68rem;
				.l-title {
					padding-bottom: 0.15rem;
					color: #333333;
					font-size: 0.43rem;
					border-bottom: 0.03rem solid #D1D1D1;
				}
				.l-form {
					padding: 0.09rem;
					margin-top: 0.31rem;
					background-color: #F9F9F9;
					.lf-item {
						margin-top: 0.15rem;
						.lf-title {
							padding-bottom: 0.18rem;
							font-size: 0.43rem;
							font-weight: bold;
							color: #000000;
							font-family: 'SimSun';
						}
						.lf-input {
							padding-bottom: 0.5rem;
							overflow: hidden;
							div {
								float: left;
								margin-left: 0.15rem;
								height: 0.8rem;
								line-height: 0.75rem;
								input {
									font-size: 0;
									padding: 0.15rem;
									width: 5rem;
									height: 0.43rem;
									line-height: 0.43rem;
									border: 0;
									background: none;
									border: 0.03rem solid #ABADB3;
									background-color: #FFF;
								}
								a {
									color: #999999;
									font-weight: bold;
									font-size: 0.4rem;
								}
							}
						}
					}
				}
				.l-submit {
					margin-top: 0.15rem;
					input {
						width: 2.96rem;
						height: 1.09rem;
						line-height: 1.09rem;
						border: 0;
						background-color: #146eba;
						color: #FFF;
						font-size: 0.56rem;
						cursor: pointer;
					}
				}
			}
		}
	}
	
	.clearfix {
		display: block;
	}
</style>