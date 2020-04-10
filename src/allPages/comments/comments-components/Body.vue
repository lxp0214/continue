<template>
    <div>
        <div class='top'>|| 雨打芭蕉湿</div>
        <div class='bottom'>
            <div class='left'>
                <img src='static\imgs\touxiang\批注 2020-02-10 002238.jpg' class='img'>
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
        iconUrl: 'static'+'/'+'icons'+'/'+'middle'+'/'+'组件 72 – 1.png',
        red: false
      }
    },
    methods: {
      changeIcon () {
        this.red = !this.red
        if (this.red) {
          this.$refs.icon.src = 'static'+'/'+'icons'+'/'+'middle'+'/'+'组件 49 – 1.png'
        } else {
          this.$refs.icon.src = 'static'+'/'+'icons'+'/'+'middle'+'/'+'组件 72 – 1.png'
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
    color: #ffffff
  .bottom
    height: .46rem
    margin-left: .4rem
    margin-right: .4rem
    .left
      float: left 
      height: .46rem
      min-width: 2.6rem
      display: flex
      align-items: center
      background: #ffffff
      box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.16)
      opacity: 0.9
      border-radius: .24rem
      .img 
        width: .46rem
        height: .46rem
        border-radius: 100%
        background: red
      .desc 
        margin-left: .1rem
        color: #000000
    .right
      float: right 
      height: .92rem
      img 
        margin-left: .3rem
        height: .46rem
</style>