// store配置
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 创建一个存储实例
const store = new Vuex.Store({
	// 存储公共的数据（状态）
	state:{
		// 共享的用户信息
		user_info:{}
	},
	// 用户行为（突变），主要用于组件想要对vuex中的数据进行的处理，类似于方法
	// 
	mutations:{
		// 定义函数，用于处理state的变量，函数中的state表示store中的state对象，
		// 后面的参数表示传递的值
		setUserInfo(state,info){
			state.user_info = info;
		}
	},
	// 用来调用mutations中的操作
	actions:{
		// 定义方法，用于提供给实例进行调用
		// commit用于调用mutations中的方法
		userInfo({commit},info){
			// 第一个参数，表示mutations中的方法名
			commit('setUserInfo',info)
		}
	},
	// 获取store中的数据
	getters:{
		getUserData(state){
			return state.user_info;
		}
	}
})
export default store;