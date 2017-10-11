<template>
  <div id="app">
    <router-link to="/my">跳转</router-link>
    <router-view></router-view>

    <el-button type="primary" @click="getData" class="my-btn">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
    <ul>
      <li v-for="obj of bookList">{{obj.name}}</li>
    </ul>
  </div>
</template>

<script>
// 导入qs模块
import qs from 'qs'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bookList:[]
    }
  },
  methods:{
    getData(){
      this.$http({
        method:"post",
        url:"http://route.showapi.com/92-92",
        // 当与后台交互，要求使用application/x-www-form-urlencoded格式时，可以用qs模块进行转换
        data:qs.stringify({
          showapi_appid:44993,
          showapi_sign:'82829efed7b04e2a8df1dd79a1814c55',
          id:6
        })
      })
      // 此处使用箭头函数，以便将请求得到的结果赋值给组件中的数据
      .then(response => {
        console.log(response);
        this.bookList = response.data.showapi_res_body.bookList;
      })
    }
  }
}
</script>

<style>
.my-btn{
  margin-top: 100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
