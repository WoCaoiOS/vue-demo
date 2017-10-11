<template>
	<div id="detail">
		<el-button type="primary" @click="goBack">返回</el-button>
		<div>
			{{userInfo}}
		</div>
	</div>
</template>
<script>
	export default{
		name:"detail",
		data(){
			return{

			}
		},
		methods:{
			goBack(){
				// 返回
				// 方式一
				// this.$router.go(-1);
				// 
				// 方式二
				window.history.go(-1)
			}
		},
		computed:{
			userInfo:function(){
				// 通过store的getters对象中的方法获取指定的数据
				return this.$store.getters.getUserData;
			}
		}
	}
</script>