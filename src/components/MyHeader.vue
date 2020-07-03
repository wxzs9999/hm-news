<template>
  <div class="hm-header">
    <div class="back">
      <span class="iconfont iconjiantou2" @click="backFn"></span>
    </div>
    <div class="title">
      <slot></slot>
    </div>
    <div class="extra"></div>
  </div>
</template>

<script>
export default {
  methods: {
    backFn() {
      this.$router.back()
    }
  }
}
</script>

<style lang="less" scoped>
.hm-header {
  height: 40px;
  border-bottom: 1px solid grey;
  display: flex;
  line-height: 40px;
  .back,
  .extra {
    width: 40px;
    text-align: center;
  }
  .title {
    flex: 1;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
