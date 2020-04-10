<template>
  <div>
    <div class='header'>
        <div class='left'>
            <router-link to='/myselfInformation'>
                <div class='left-top'>黑凤梨</div>
                <div class='left-bottom'>213天,5个原创,36条续写,79次评论……</div>
            </router-link>
        </div>
        <router-link to='/myselfInformation'>
            <img src='static/imgs/touxiang/批注 2020-02-10 002238.jpg' class='right'>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
    name: 'MyselfHeader',
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang='stylus' scoped>
  .header
    height: 1.24rem
    padding-left: 0.4rem
    padding-right: 0.4rem
    padding-top: 1.16rem
    padding-bottom: 0.46rem
    .left
      float: left 
      height: 1.24rem
      .left-top
        font-size: 0.64rem
        height 0.86rem
        line-height:0.86rem
        color #ffffff
      .left-bottom
        height: 0.38rem
        line-height: 0.38rem
        color #ffffff
    .right
      float: right
      border-radius: 100%
      width:1.24rem 
      height: 1.24rem 
      background: red
</style>
