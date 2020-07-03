<template>
  <div class="user">
    <!-- 头部 -->
    <div class="header" @click="$router.push('/useredit')">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="this.$axios.defaults.baseURL+info.head_img" alt />
      </div>
      <!-- 信息 -->
      <div class="info">
        <p class="name">
          <span class="iconfont iconxingbienv" v-if="info.gender===0"></span>
          <span class="iconfont iconxingbienan" v-else></span>
          {{info.nickname}}
        </p>
        <p class="time">{{info.create_date |time}}</p>
      </div>
      <!-- 箭头 -->
      <div class="arrow">
        <span class="iconfont iconjiantou1"></span>
      </div>
    </div>
    <!-- 导航 -->
    <NavBar>
      <template>我的关注</template>
      <template v-slot:content>关注的用户</template>
    </NavBar>
    <NavBar>
      <template>我的跟帖</template>
      <template v-slot:content>跟帖/回复</template>
    </NavBar>
    <NavBar>
      <template>我的收藏</template>
      <template v-slot:content>文章/视频</template>
    </NavBar>
    <NavBar @click="$router.push('/useredit')">
      <template>设置</template>
    </NavBar>
  </div>
</template>

<script>
export default {
  // 组件级别的钩子：before RouterEnter在user组件渲染之前
  //   beforeRouteEnter(to, from, next) {
  //     const token = localStorage.getItem('token')
  //     if (token) {
  //       next()
  //     } else {
  //       //   console.log('123')
  //       next(vm => {
  //         Vue.$router.push('/login')
  //       })
  //     }
  //   },
  data() {
    return {
      info: {}
    }
  },
  async created() {
    const userId = localStorage.getItem('userId')
    // const token = localStorage.getItem('token')
    // const res = await this.$axios.get(`/user/${userId}`, {
    //   headers: {
    //     Authorization: token
    //   }
    // })
    const res = await this.$axios.get(`/user/${userId}`)
    const { statusCode, data } = res.data
    if (statusCode === 200) {
      this.info = data
    }
    // 验证token失效：
    // if (statusCode === 401) {
    //   this.$toast.fail(message)
    //   // console.log(res.data)
    //   this.$router.push('/login')
    //   localStorage.removeItem('token')
    //   localStorage.removeItem('userId')
    // }
  }
}
</script>

<style lang="less" scoped>
.user {
  .header {
    height: 140px;
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-bottom: 5px solid rgb(228, 228, 228);
    .avatar {
      width: 70px;
      height: 70px;
      margin-right: 15px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .info {
      flex: 1;
      font-size: 16px;
      .name {
        color: #333;
        .iconxingbienv {
          color: pink;
          font-size: 18px;
        }
        .iconxingbienan {
          color: blue;
          font-size: 18px;
        }
      }
      .time {
        color: #999;
        margin-top: 8px;
      }
    }
    .arrow {
      width: 15px;
    }
  }
}
</style>
