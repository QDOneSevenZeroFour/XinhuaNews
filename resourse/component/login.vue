<template>
	<div class="wrap">
		<form method="" type="">
			<!--	手机号-->
			<div class="tel_number">
				<input type="number" id="logintel_input" placeholder="请填写登录手机号">
			</div>
			<div class="err tel_err"></div>
			<!--密码-->
			<div class="password">
				<input type="passWord" name="" id="loginpass_input" placeholder="请填写密码">
			</div>
			<div class="err pass_err"></div>
			<!--登录按钮-->
			<div class="login" id="login_btn">
				<input @click="userlogin" value="登录" id="" type="button">
			</div>
			<div class="more_ope">
				<p>
					<a :href="path"><span class="reg">注册</span></a>
				</p>
				<p>
					<a href="#"><span class="forget">忘记密码？</span></a>
				</p>

			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				user_tel: "j",
				path:'#/newsRegister',
			}
		},
		methods: {
			jqcookie(key, value, options) {
				// key and value given, set cookie...
				if(arguments.length > 1 && (value === null || typeof value !== "object")) {
					options = $.extend({}, options);

					if(value === null) {
						options.expires = -1;
					}

					if(typeof options.expires === 'number') {
						var days = options.expires,
							t = options.expires = new Date();
						t.setDate(t.getDate() + days);
					}

					return(document.cookie = [
						encodeURIComponent(key), '=',
						options.raw ? String(value) : encodeURIComponent(String(value)),
						options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
						options.path ? '; path=' + options.path : '',
						options.domain ? '; domain=' + options.domain : '',
						options.secure ? '; secure' : ''
					].join(''));
				}
				// key and possibly options given, get cookie...
				options = value || {};
				var result, decode = options.raw ? function(s) { return s; } : decodeURIComponent;
				return(result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
			},
			userlogin() {
				var self = this;
				if(($("#logintel_input").val().length > 0) && ($("#loginpass_input").val().length > 0)) {
					if((self.jqcookie("usertel") == $("#logintel_input").val()) && (self.jqcookie("userpass") == $("#loginpass_input").val())) {
						$("#logintel_input").val("");
						$("#loginpass_input").val("");
						alert("登录成功");
						location.href='#/index';
					} else {
						alert("用户名或密码有误")
					}
				}else{
					alert("用户名或密码不能为空")
				}

			}
		}
	}
</script>
<style lang="scss" scoped>
	.wrap {
		height: 10.7rem;
		width: 91%;
		margin: 0rem 0.46rem;
		form {
			margin-top: 1.8rem;
			.err {
				text-indent: 0.62rem;
				color: red;
				font-size: 0.43rem;
				line-height: 0.93rem;
			}
			div {
				height: 0.94rem;
				width: 100%;
				input {
					text-indent: 0.31rem;
				}
			}
			width: 100%;
			height: 10rem;
			.tel_number {
				width: 100%;
				height: 0.94rem;
				input {
					float: right;
					width: 96%;
					height: 0.93rem;
					font-size: 0.43rem;
					border: 1px solid #2D8BDE;
					outline: none;
				}
			}
			.password {
				width: 100%;
				height: 0.94rem;
				input {
					float: right;
					width: 96%;
					height: 0.93rem;
					font-size: 0.43rem;
					border: 1px solid #2D8BDE;
					outline: none;
				}
			}
			.login {
				input {
					float: left;
					width: 2.5rem;
					height: 0.8rem;
					border-radius: 0.09rem;
					margin-left: 36%;
					font-size: 0.43rem;
					line-height: 0.62rem;
					background-color: #2D8BDE;
					border: none;
					outline: none;
					text-align: center;
					text-indent: 0rem;
				}
			}
			.more_ope {
				a {
					text-decoration: none;
					font-size: 0.43rem;
					line-height: 0.62rem;
					color: #2D8BDE;
					.forget {
						float: right;
					}
					.reg {
						float: right;
						margin-left: 0.15rem;
					}
				}
			}
		}
	}
</style>