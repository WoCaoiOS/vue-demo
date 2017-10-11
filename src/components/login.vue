<template>
	<div id="login">
		<div>
			<label for="">用户名</label>
			<input type="text" v-model="user.userName">
		</div>
		<div>
			<label for="">密码</label>
			<input type="text" v-model="user.pwd">
		</div>
		<el-button type="primary" @click="login">登录</el-button>
	</div>
</template>
<script>
	export default{
		name:'login',
		data(){
			return {
				user:{
					userName:'',
					pwd:''
				}
			}
		},
		methods:{
			login(){
				// 将用户信息存入store，会调用store中actions对象的userInfo方法
				this.$store.dispatch('userInfo',this.user)
				// 路由跳转
				this.$router.push({path:'/userData'})
			}
		}
	}
</script>