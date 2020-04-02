<template>
    <div>
        <div class='top'>|| 雨打芭蕉湿</div>
        <div class='bottom'>
            <div class='left'>
                <div class='img'></div>
                <div class='desc'>由xxx用户发起</div>
            </div>
            <div class='right'>
                <span class='iconfont item'>&#xe65e;</span>
                <span class='iconfont item'>&#xe607;</span>
                <span class='iconfont item'>&#xe65e;</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArticalDetailsTitle'
}
</script>

<style lang='stylus' scoped>
  .top 
    line-height: .86rem
    font-size: .64rem
    margin-left: .4rem
  .bottom
    height: .5rem
    line-height: .5rem
    margin-left: .4rem
    .left
      float: left 
      height: .5rem
      min-width: 2.4rem
      .img 
        float: left
        width: .5rem
        height: .5rem
        border-radius: 100%
        background: red
      .desc 
        float: right
    .right
      float: right 
      height: .5rem
      .item 
        margin: 0 .33rem
        font-size: .4rem
</style>