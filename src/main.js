import Vue from 'vue'
import App from './App.vue'
// css引入：
import './style/common.less'
import './style/iconfont.css'
// 路由引入：
import router from './router'
// 组件引入：
import MyHeader from './components/MyHeader.vue'
import Mylogo from './components/Mylogo.vue'
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

// 关闭控制台生产提示
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
