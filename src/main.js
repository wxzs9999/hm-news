import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'
// css引入：
import './style/common.less'
import './style/iconfont.css'
// 路由引入：
import router from './router'
// 组件引入：
import MyHeader from './components/MyHeader.vue'
import Mylogo from './components/Mylogo.vue'
import NavBar from './components/NavBar.vue'
// Vant按需加载:
import { Button, Field, Form, Toast } from 'vant'
import 'amfe-flexible'
import axios from 'axios'
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.use(Toast)
Vue.component('MyHeader', MyHeader)
Vue.component('Mylogo', Mylogo)
Vue.component('NavBar', NavBar)

// 关闭控制台生产提示
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
// 时间过滤器：
Vue.filter('time', function(input) {
  return moment(input).format('YYYY-MM-DD')
})

// 设置axios请求拦截器：
axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})
// 设置axios响应拦截器：
axios.interceptors.response.use(function(res) {
  // console.log(res)
  const { statusCode, message } = res.data
  if (statusCode === 401 && message === '用户信息验证失败') {
    Toast.fail(message)
    // Vue.$router.push('/login')
    router.push('/login')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
  }
  return res
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
