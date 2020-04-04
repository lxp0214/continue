<template>
    <div class='body'>
        <div class='header'>
            <div class='header-left'>创作</div>
            <router-link to='/createEdit'>
                <div class='header-right'>+</div>
            </router-link>
        </div>
        <div class='small'>滴滴答答打开连接心灵的.....</div>
    </div>
</template>


<script>
export default {
    name: 'CreateBody'
}
</script>

<style lang='stylus' scoped>
  .body
    border-top: solid .01rem
    height: 9.04rem
    margin-top: .4rem
    padding-top: 1rem
    .header
      margin-left: .4rem
      margin-right: .4rem
      height: .86rem
      .header-left 
        height: .86rem
        line-height: .86rem 
        font-size: .64rem
        float: left 
      .header-right
        float: right
        height: .86rem
        line-height: .86rem 
        font-size: 1rem
    .small 
      margin-left: .4rem
      font-size: .24rem
</style>