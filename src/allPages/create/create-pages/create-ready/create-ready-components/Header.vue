<template>
    <div class='header'>
        <span class='iconfont left'>&#xe611;</span>
        创作
        <span class='iconfont right'>&#xe607;</span>
    </div>
</template>

<script>

export default {
    name: 'CreateHeader',
}
</script>

<style lang='stylus' scoped>
  .header
    margin-top: .4rem
    margin-bottom: .4rem
    padding-left: .4rem
    padding-right: .4rem
    height: 0.88rem
    line-height: 0.88rem
    text-align: center
    font-size: .5rem
    border-bottom: solid .01rem
    border-top: solid .01rem
    .left
      float: left
      font-size: .6rem
    .right 
      float: right
      font-size: .6rem
</style>
