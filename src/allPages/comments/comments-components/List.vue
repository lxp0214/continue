<template>
    <div>
        <div class='head'>
            | 添加评论
            <img src='static\icons\middle\组件 56 – 1.png' class='img'>
        </div>
        <ul class='wrapper'>
            <li class='item' v-for="(item,index) in 3" :key="index">
                <div class='top'>
                    <div class='flex-wrapper'>
                        <img src='static\icons\middle\组件 86 – 1.png' class='img'>
                        <div class='name'>xxx用户</div>
                        <div class='time'>3月10日16:30</div>
                    </div>
                    <img :src=iconUrl ref='icon' @click='changeIcon()'>
                </div>
                <div class='content'>这是个假评论。。。</div>
            </li>
            <li class='item'>
                <div class='top'>
                    <div class='flex-wrapper'>
                        <img src='static\icons\middle\组件 86 – 1.png' class='img'>
                        <div class='name'>xxx用户</div>
                        <div class='time'>3月10日16:30</div>
                    </div>
                    <img src='static\icons\small\组件 60 – 1.png'>
                </div>
                <div class='content'>评论功能暂时没写出来。。。</div>
            </li>
            <li class='item'>
                <div class='top'>
                    <div class='flex-wrapper'>
                        <img src='static\icons\middle\组件 86 – 1.png' class='img'>
                        <div class='name'>xxx用户</div>
                        <div class='time'>3月10日16:30</div>
                    </div>
                    <img src='static\icons\small\组件 60 – 1.png'>
                </div>
                <div class='content'>后续会改进哦~</div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'CommentsList',
    data () {
      return {
        iconUrl: 'static'+'/'+'icons'+'/'+'small'+'/'+'组件 60 – 1.png',
        red: false
      }
    },
    methods: {
      changeIcon () {
        this.red = !this.red
        if (this.red) {
          this.$refs.icon.src = 'static'+'/'+'icons'+'/'+'small'+'/'+'组件 61 – 1.png'
        } else {
          this.$refs.icon.src = 'static'+'/'+'icons'+'/'+'small'+'/'+'组件 60 – 1.png'
        }
      }
    }
}
</script>

<style lang='stylus' scoped>
  .head 
    margin-top: .48rem
    margin-bottom: .4rem
    background: #ffffff
    height: 1.06rem
    line-height: 1.06rem
    font-size: .36rem
    font-weight: 600
    padding-left: .28rem
    img 
      width: .5rem
      margin-left: .48rem
  .wrapper 
    .item 
      height: 1.3rem 
      background: #fff
      margin-bottom: .3rem
      padding: 0 .28rem
      padding-top: .2rem
      .top 
        height: .54rem 
        display: flex 
        justify-content: space-between
        .flex-wrapper  
          height: .54rem
          display: flex
          align-items: center
          .img 
            border-radius: 100% 
            background: red 
            height: .4rem
            width: .4rem
            display: block
          .name 
            margin-left: .1rem
          .time 
            margin-left: .2rem
        img 
          height: .4rem
      .content 
        height: .7rem 
        line-height: .7rem 
        font-size: .34rem
           
</style>