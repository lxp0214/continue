<template>
    <div class='body'>
        <div class='top'>
            <div class='title'>
                | 谁偷走了我的昨天
                <img src ='static\icons\middle\组件 69 – 2@3x.png'>
                <span class='number'>50</span>
            </div>
            <div class='user'>
                <div class='img'></div>
                <span class='name'>用户名称</span>
                <span class='time'>3月10日</span>
            </div>
        </div>
        <div class='bottom'>
            <div class='smallTitle'>1 || 雨停了</div>
            <div class='text'>日本。东京市。练马区。天空中的云层倾轧而下，镇子里逐渐阴下来，寒风萧瑟……      似乎有什么东西在呼喊着自己的名字，但那个声音隔着一季又一季的时空，等传到大雄耳中时，只剩下被掰碎的语句杂糅在风里，和冷风的“呜呜”声合而为一，再也无从分辨。
　　他知道，自己一定是在做梦。
　　自从那时起，这个场景无数次出现在自己的噩梦中，挥之不去。
      他看到了幼时的自己，那个时间点，他和哆啦A梦一起在空地上训练棒球。大雄至今都记得那件事的整个过场：先是胖虎提着球棍，笑嘻嘻地警告他第三天会有一场和隔壁镇子决胜负的棒球赛。如果大雄在关键时候掉了链子，等待他的将是一顿胖揍。</div>
        </div>
    </div>
</template>


<script >
export default({
    name: 'NewAndHot',
})
</script>>
<style lang="stylus" scoped>
  .body 
    height: 10.68rem
    background: #eee
    margin: 0 .76rem
    padding: 0 .4rem
    border-radius: .6rem
    box-shadow: -5px -5px 16px 0px rgba(255, 255, 255, 0.5)
    .top 
      height: 1.28rem
      border-bottom: solid .02rem #f6f6f6
      padding-top: .2rem
      .title 
        height: .44rem
        line-height: .44rem 
        font-size: .32rem
        img 
          margin-left: 1.6rem
        .number 
          font-size: .26rem
      .user 
        height: 0.64rem
        //line-height: 0.64rem 
        display: flex 
        align-items: center
        .img 
          height: .4rem 
          width: .4rem 
          border-radius: 100%
          background: red
        .name 
          font-size: .26rem
         // margin-left: .1rem
        .time 
          font-size: .22rem
          margin-left: 2.82rem
    .bottom 
      .smallTitle 
        height:.8rem
        line-height: .8rem
        font-size: .32rem
      .text 
        font-size: .3rem
        color: #000000
        opacity: 0.54
        line-height: .4rem   
</style>