<template>
  <div class="login">
    <MyHeader>登录</MyHeader>
    <Mylogo></Mylogo>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名/手机号"
        :rules="rules.username"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >登录</van-button
        >
      </div>
    </van-form>
    <p class="tips">
      没有账号？去<router-link to="/register">注册</router-link>
    </p>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: '',
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'onChange'
          },
          {
            pattern: /^\d{5,11}$/,
            message: '用户名只能是5-11位数字',
            trigger: 'onChange'
          }
        ],
        password: [
          {
            required: true,
            message: '请填写密码',
            trigger: 'onChange'
          },
          {
            pattern: /^\w{3,9}$/,
            message: '用户密码只能为3-9位',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  created() {
    const { username, password } = this.$route.params
    this.username = username
    this.password = password
  },
  methods: {
    async onSubmit() {
      const res = await this.$axios.post('/login', {
        username: this.username,
        password: this.password
      })
      const { statusCode, message, data } = res.data
      if (statusCode === 200) {
        this.$toast.success(message)
        // 保存token
        localStorage.setItem('token', data.token)
        this.$router.push('/')
      } else {
        this.$toast.fail(message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .tips {
    font-size: 15px;
    text-align: right;
    padding-right: 10px;
    a {
      color: red;
    }
  }
}
</style>
