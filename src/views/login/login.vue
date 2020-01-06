<template>
	<div>
		<nav-bar class="navbar">
			<div slot="left" @click="loginback">返回</div>
			<div slot="center" >注册用户信息</div>
		</nav-bar>
		<div class="login">
			<div class="lists">
				<van-field
					v-model="usernametext"
				    label="用户名:"
				    placeholder="请输入用户名"/>
				 </div>
			<div class="lists">
				 <van-field
					type="password"
				    v-model="passwordtext"
				    label="密码:"
				    placeholder="请输入密码"/>
				 </div>
			<div class="lists">
				 <van-field
					type="password"
				    v-model="repasswordtext"
				    label="确认密码:"
				    placeholder="请确认密码"/>
				  </div>
			<div class="lists">
				<van-field
				    v-model="emailtext"
				    label="邮箱:"
				    placeholder="请输入邮箱"/>
				  </div>
			<div class="lists">
				 <van-field
				    v-model="telphonetext"
				    label="手机号:"
				    placeholder="请输入手机号"/>
				  </div>
			<div class="loginbutton">
				<van-button color="orangered" plain type="info" @click="loginbuttonclick">注册</van-button>
			</div>
		</div>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navbar/NavBar.vue'
	
	export default{
		data(){
			return{
				usernametext:'',
				passwordtext:'',
				repasswordtext:'',
				emailtext:'',
				telphonetext:''
			}
		},
		components:{
			NavBar
		},
		methods:{
			loginback(){
				this.$router.back()
			},
			loginbuttonclick(){
				console.log('注册成功')
			}
		}
	}
</script>

<style scoped="scoped">
	.navbar{
		height: 44px;
		width: 100%;
		background-color: orangered;
		color: white;
		font-size: 18px;
		z-index: 9;
		
		padding-top: 1px;
		
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
	}
	.login{
		margin: 139px 5px 5px 5px;
		height: 350px;
		width: 350px;
		background-image: url(bg.png);
		
	}
	.lists{
		padding: 15px 5px 5px 15px;
	}
	.loginbutton{
		padding-top: 40px;
		text-align: center;
	}
	.van-field{
		border: solid 1px orangered;
		border-radius: 8%;
	}
</style>
