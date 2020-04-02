<template>
    <div class='search'>
        <input class='input' type='text' placeholder='搜索ta的创作'>
        <span class='iconfont icon'>&#xe60a;</span>
    </div>
</template>

<script>
export default {
    name: 'UserDetailsSearch'
}
</script>

<style lang='stylus' scoped>
  .search
    margin-top: .4rem
    height: 1rem
    margin-bottom:.4rem
    margin-left: .4rem
    margin-right: .4rem
    position: relative
    .input
      box-sizing: border-box
      -moz-box-sizing:border-box
      -webkit-box-sizing:border-box
      height: 1rem
      line-height: 1rem
      width: 100%
      background:#eee
      border-radius: .22rem
      border: solid .02rem
      font-size:.32rem
      padding-left: .28rem
      padding-right: .28rem
    .icon
      position: absolute
      top: .17rem
      bottom: 0
      right: .28rem
      font-size: .6rem

</style>