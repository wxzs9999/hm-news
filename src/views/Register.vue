<template>
  <div class="register">
    <MyHeader>注册</MyHeader>
    <Mylogo></Mylogo>
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.nickname"
        label="昵称"
        placeholder="请输入昵称"
        :rules="rules.nickname"
      />
      <van-field
        v-model="user.username"
        label="用户名"
        placeholder="请输入用户名/手机号"
        :rules="rules.username"
      />
      <van-field
        v-model="user.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="rules.password"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit"
          >注册</van-button
        >
      </div>
    </van-form>
    <p class="tips">已有账号，去<router-link to="/login">登录</router-link></p>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      user: {
        nickname: '',
        username: '',
        password: ''
      },
      rules: {
        nickname: [
          { require: true, message: '请输入昵称', trigger: 'onChange' },
          {
            pattern: /^[\u4e00-\u9fa5]{2,5}$/,
            message: '昵称只能是2-5为中文',
            trigger: 'onChange'
          }
        ],
        username: [
          { require: true, message: '请输入用户名', trigger: 'onChange' },
          {
            pattern: /^\d{5,11}$/,
            message: '用户名只能是5-11位的数字',
            trigger: 'onChange'
          }
        ],
        password: [
          { require: true, message: '请输入密码', trigger: 'onChange' },
          {
            parttern: /^\w{3,9}$/,
            message: '密码只能是5-11位的数字',
            trigger: 'onChange'
          }
        ]
      }
    }
  },
  methods: {
    async onSubmit() {
      const res = await this.$axios.post('/register', this.user)
      const { statusCode, message } = res.data
      if (statusCode === 200) {
        this.$toast(message)
        // 注册成功：跳转到登陆页面
        this.$router.push({
          name: 'login',
          params: this.user
        })
      } else {
        this.$toast(message)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register {
  .tips {
    text-align: right;
    padding-right: 20px;
    font-size: 14px;
    a {
      color: red;
    }
  }
}
</style>
