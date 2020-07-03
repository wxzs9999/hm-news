<template>
  <div class="navbar" @click="clickfn">
    <div class="title">
      <slot></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="arrow">
      <span class="iconfont iconjiantou1"></span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickfn() {
      // 给自己的Dom注册点击事件，触发组建的点击事件
      console.log('123')
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  display: flex;
  margin-left: 20px;
  border-bottom: 1px solid rgb(228, 228, 228);
  line-height: 50px;
  font-size: 16px;
  align-items: center;
  .content {
    flex: 1;
    text-align: right;
    padding-right: 10px;
    font-size: 14px;
    color: grey;
  }
  .arrow {
    width: 20px;
  }
}
</style>
