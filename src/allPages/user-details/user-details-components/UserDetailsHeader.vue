<template>
    <div>
        <div class='header'>
            <div class='top'>
                <span class='iconfont back'>&#xe65e;</span>
                <span class='iconfont people'>&#xe700;</span>
            </div>
            <div class='second'>
                <div class='left'>
                    <div class='left-top'>黑凤梨</div>
                    <div class='left-bottom'>213天，15个原创，36条续写，79次评论……</div>
                </div>
                <div class='right'></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'UserDetailsHeader'
}
</script>

<style lang='stylus' scoped>
  .header
    height: 2.34rem
    margin-top: .4rem
    border-top: solid 1px
    .top
      height: 1.1rem
      line-height: 1.1rem
      .back
        font-size: .7rem
        margin-left: .4rem
        float: left
      .people
        font-size: .7rem
        margin-right: .4rem
        float: right
    .second 
      height: 1.24rem
      margin-left: .4rem
      margin-right: .4rem
      .left
        float: left 
        height: 1.24rem
        padding-left: 0.4rem
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
</style>
