import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import User from '../views/User.vue'
import UserEdit from '../views/UserEdit.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '/user', component: User, name: 'user' },
    { path: '/useredit', component: UserEdit, name: 'useredit' }
  ]
})

// 判断是否有token:
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  // 如果去的是user页面，则判断是否有token;别的页面不判断
  if (to.fullPath === '/user') {
    // 有token放走，没有跳回登陆页面
    if (token) {
      next()
    } else {
      // 不能用this.$router.push;不过引入的有router
      router.push('login')
    }
  } else {
    next()
  }
})
export default router
