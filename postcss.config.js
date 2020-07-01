module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 1rem的大小  750
      // 设置为37.5是为了不影响到第三方的组件库 比如vant-ui, 需要我们需要把设计稿缩小一倍测量
      // 设置为75，直接量750的设计稿
      rootValue: 37.5,
      propList: ['*']
    }
  }
}
