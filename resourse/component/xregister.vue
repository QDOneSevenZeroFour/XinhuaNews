<template>
	<div class="wrap">
		<form method="" type="">
			<!--	手机号-->
			<div class="tel_number">
				<span class="des">手机号码</span>
				<input @blur="tel_test" type="text" name="" id="tel_input" placeholder="用于登录、密码召回等">
			</div>
			<div class="err tel_err"></div>
			<!--	昵称-->
			<div class="username">
				<span class="des">昵称</span>
				<input @blur="user_test" type="text" name="" id="user_input" placeholder="可由中文、英文、字母和数字组成">
			</div>
			<div class="err user_err"></div>
			<!--密码-->
			<div class="password">
				<span class="des">设定密码</span>
				<input @blur="pass_test" type="passWord" name="" id="pass_input" placeholder="6-16位字符">
			</div>
			<div class="err pass_err"></div>
			<!--确认密码-->
			<div class="password">
				<span class="des">确定密码</span>
				<input @blur="twopass_test" type="passWord" name="" id="twopass_input" placeholder="请再次输入您设定的密码">
			</div>
			<div class="err twopass_err"></div>
			<!--注册按钮-->
			<div class="login" id="reg_btn">
				<input @click="reg" value="注册" id="" type="button">
				<span><a :href="path">去登录</a></span>
			</div>

		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bool1: false,
				bool2: false,
				bool3: false,
				bool4: false,
				path:'#/newsLogin'
			}
		},
		methods: {
			tel_test: function() {
				var str = $("#tel_input").val();
				if($("#tel_input").val().length == 0) {
					$(".tel_err").text("手机号不能为空");
				} else {
					//$(".tel_err").text("");
					var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
					if(!myreg.test(str)) {
						$(".tel_err").text("手机号格式错误");
					} else {
						$(".tel_err").text("");
						this.bool1 = true;
					}
				}
			},
			user_test: function() {
				var str = $("#user_input").val();
				if($("#user_input").val().length == 0) {
					$(".user_err").text("昵称不能为空");
				} else {
					$(".user_err").text("");
					var myreg = /^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
					if(!myreg.test(str)) {
						$(".user_err").text("昵称格式错误");
					} else {
						$(".user_err").text("");
						this.bool2 = true;
					}
				}
			},
			pass_test: function() {
				var str = $("#pass_input").val();
				if($("#pass_input").val().length == 0) {
					$(".pass_err").text("密码不能为空");
				} else {
					$(".pass_err").text("");
					var myreg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
					if(!myreg.test(str)) {
						$(".pass_err").text("密码格式错误");
					} else {
						$(".pass_err").text("");
						this.bool3 = true;
					}
				}
			},
			twopass_test: function() {
				//var str = $("#twopass_input").val();
				if($("#twopass_input").val().length == 0) {
					$(".twopass_err").text("确认密码不能为空");
				} else {
					if($("#pass_input").val() == $("#twopass_input").val()) {
						$(".twopass_err").text("");
						this.bool4 = true;
					} else {
						$(".twopass_err").text("请再次确认密码");
					}
				}
			},
			//cookie
			jqcookie: function(key, value, options) {
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
				var result, decode = options.raw ? function(s) {
					return s;
				} : decodeURIComponent;
				return(result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
			},
			//点击注册按钮以后
			reg: function() {
				if(this.bool1 && this.bool2 && this.bool3 && this.bool4) {
					var usertel = $("#tel_input").val();
					var userpass = $("#pass_input").val();
					this.jqcookie("usertel", usertel, {
						expires: 7,
						raw: true
					});
					this.jqcookie("userpass", userpass, {
						expires: 7,
						raw: true
					});
					//注册成功后输入框里的用户信息清空
					$("#tel_input").val("");
					$("#user_input").val("");
					$("#pass_input").val("");
					$("#twopass_input").val("");
					alert("注册成功！")
				} else {
					alert("请重新完善您的信息！")
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
				text-indent: 2.2rem;
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
				.des {
					font-size: 0.45rem;
					float: left;
					line-height: 0.93rem;
				}
			}
			width: 100%;
			height: 10rem;
			.tel_number,
			.password,
			.username {
				width: 100%;
				height: 0.94rem;
				input {
					float: right;
					width: 77%;
					height: 0.93rem;
					font-size: 0.43rem;
					border: none;
					outline: none;
					background-color: #9ec0e0;
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
				span {
					float: right;
					font-size: 0.43rem;
					a {
						color: #2D8BDE;
						line-height: 1.25rem;
					}
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