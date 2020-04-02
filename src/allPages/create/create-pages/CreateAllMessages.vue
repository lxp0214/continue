<template>
    <div>
        <div class='header'>
            <span class='iconfont left'>&#xe65e;</span>
            所有消息
            <span class='iconfont right'>&#xe65e;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CreateAllMessages'
}
</script>

<style lang='stylus' scoped>
  .header
    margin-top: .4rem
    padding-left: .4rem
    padding-right: .4rem
    height: 1.1rem
    line-height: 1.1rem
    text-align: center
    font-size: .5rem
    border-bottom: solid .01rem
    border-top: solid .01rem
    .left
      float: left
      font-size: .7rem
    .right 
      float: right
      font-size: .7rem
</style>