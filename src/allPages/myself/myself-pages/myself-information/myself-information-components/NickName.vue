<template>
    <div class='header'>
        <span class='iconfont left'>&#xe65e;</span>
        昵称
        <span class='iconfont right'>&#xe607;</span>
    </div>
</template>

<script>
export default {
    name: 'NickName'
}
</script>

<style lang='stylus' scoped>
  .header
    margin-top: .4rem
    height: 1.1rem
    line-height: 1.1rem
    text-align: center
    font-size: .5rem
    border-bottom: solid .01rem
    border-top: solid .01rem
    .left
      float: left
      margin-left: .4rem
      font-size: .7rem
    .right
      float: right
      margin-right: .4rem
      font-size: .7rem
</style>
