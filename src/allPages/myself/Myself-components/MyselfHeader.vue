<template>
    <div class='header'>
        <div class='left'>
          <router-link to="/myself/myself-pages/myself-information'">
            <div class='left-top'>黑凤梨</div>
          </router-link>
            <div class='left-bottom'>213天，15个原创，36条续写，79次评论……</div>
        </div>
        <router-link>
          <div class='right'>头像</div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'MyselfHeader'
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
      .left-bottom
        height: 0.38rem
        line-height: 0.38rem
    .right
      float: right
      border-radius: 100%
      width:1.24rem 
      height: 1.24rem 
      background: red
      border: solid
</style>
