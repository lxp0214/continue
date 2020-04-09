<template>
    <div>
        <div class='top'>|| 雨打芭蕉湿</div>
        <div class='bottom'>
            <div class='left'>
                <div class='img'></div>
                <div class='desc'>由xxx用户发起</div>
            </div>
            <div class='right'>
                <img src='static\icons\middle\组件 73 – 1.png'>
                <img :src=iconUrl @click='changeIcon()' ref='icon'>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CommentsBody',
    data () {
      return {
        iconUrl: 'static/icons/middle/组件 51 – 1.png',
        red: false
      }
    },
    methods: {
      changeIcon () {
        this.red = !this.red
        if (this.red) {
          this.$refs.icon.src = 'static'+'/'+'icons'+'/'+'middle'+'/'+'组件 49 – 1.png'
        } else {
          this.$refs.icon.src = 'static/icons/middle/组件 72 – 1.png'
        }
      }
    }
}
</script>

<style lang='stylus' scoped>
  .top 
    line-height: .86rem
    font-size: .64rem
    font-weight: 600
    margin-left: .4rem
    color #ffffff
  .bottom
    height: .92rem
    line-height: .92rem
    margin-left: .4rem
    margin-right: .4rem
    .left
      float: left 
      line-height: .92rem
      min-width: 2.6rem
      .img 
        display: inline-block
        vertical-align: middle
        width: .6rem
        height: .6rem
        border-radius: 100%
        background: red
      .desc 
        float: right
        color #000000
    .right
      float: right 
      height: .92rem
      img 
        margin-left: .3rem
        height: .6rem
        width: .6rem
</style>