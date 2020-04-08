<template>
    <div>
        <div class='header'>
            <div class='top'>
              <router-link to='/myself'>
                <img src='static\icons\middle\组件 76 – 1.png'>
              </router-link>
                <img src='static\icons\middle\组件 86 – 1.png'>
            </div>
            <div class='second'>
                <div class='left'>
                    <div class='left-top'>黑凤梨</div>
                    <div class='left-bottom'>做不一样的自己</div>
                </div>
                <div class='right'></div>
            </div>
            <div class='desc'>213天，15个原创，36条续写，79次评论……</div>
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
    margin-top: .4rem
    .top
      height: .88rem
      line-height: .88rem
      margin: 0 .4rem
      display: flex 
      justify-content: space-between
      img 
        height: .46rem
    .second 
      height: 1.24rem
      margin-left: .4rem
      margin-right: .4rem
      .left
        float: left 
        height: 1.24rem
        .left-top
          font-size: 0.64rem
          height 0.86rem
          line-height:0.86rem
          color: #ffffff
        .left-bottom
          font-size: .32rem
          height: 0.38rem
          line-height: 0.38rem
          color: #ffffff
      .right
        float: right
        border-radius: 100%
        width:1.24rem 
        height: 1.24rem 
        background: red
    .desc 
      font-size: .24rem
      color: #ffffff
      margin: 0 .4rem
</style>
